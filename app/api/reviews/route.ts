// Requires: DATABASE_URL (from Neon dashboard)
// Requires: APPROVE_SECRET (any random string you choose, e.g. "myportfolio2026")
// Requires: RESEND_API_KEY (already set)

import { NextResponse } from 'next/server';
import { getSql, initDb } from '@/lib/db';
import { initialReviews } from '@/lib/reviews';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sql = getSql();
    if (!sql) {
      // Fallback gracefully if database is not yet configured
      return NextResponse.json(initialReviews);
    }

    await initDb();

    // Query approved reviews
    const rows = await sql`
      SELECT id, name, role, company, rating, message, approved, linkedin_url, created_at
      FROM reviews
      WHERE approved = true
      ORDER BY created_at DESC, id DESC;
    `;

    // Map database rows to the ReviewCard/ReviewItem format
    const reviews = rows.map((r: any) => ({
      id: r.id,
      name: r.name,
      role: r.role,
      company: r.company,
      organization: r.company,
      rating: r.rating,
      message: r.message,
      linkedin_url: r.linkedin_url || undefined,
      profileUrl: r.linkedin_url || undefined,
    }));

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(initialReviews);
  }
}

export async function POST(request: Request) {
  try {
    let name = '';
    let role = '';
    let company = '';
    let rating = 5;
    let message = '';
    let linkedinUrl = '';

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name?.toString().trim() || '';
      role = body.role?.toString().trim() || '';
      company = (body.company || body.organization)?.toString().trim() || '';
      rating = body.rating !== undefined && body.rating !== null ? Number(body.rating) || 5 : 5;
      message = body.message?.toString().trim() || '';
      linkedinUrl = (body.linkedin_url || body.profileUrl)?.toString().trim() || '';
    } else {
      const formData = await request.formData();
      name = formData.get('name')?.toString().trim() || '';
      role = formData.get('role')?.toString().trim() || '';
      company = (formData.get('company') || formData.get('organization'))?.toString().trim() || '';
      const formRating = formData.get('rating');
      rating = formRating !== null ? Number(formRating) || 5 : 5;
      message = formData.get('message')?.toString().trim() || '';
      linkedinUrl = (formData.get('linkedin_url') || formData.get('profileUrl'))?.toString().trim() || '';
    }

    if (!name || !role || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sql = getSql();
    let reviewId = 0;

    if (sql) {
      await initDb();
      const insertResult = await sql`
        INSERT INTO reviews (name, role, company, rating, message, linkedin_url, approved)
        VALUES (${name}, ${role}, ${company}, ${rating}, ${message}, ${linkedinUrl || null}, false)
        RETURNING id;
      `;
      if (insertResult && insertResult.length > 0) {
        reviewId = insertResult[0].id;
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const approveSecret = process.env.APPROVE_SECRET || '';
    const approveLink = reviewId
      ? `https://aaradhyashekdar.vercel.app/api/reviews/approve?id=${reviewId}&secret=${approveSecret}`
      : `https://aaradhyashekdar.vercel.app/api/reviews/approve?secret=${approveSecret}`;
    const deleteLink = reviewId
      ? `https://aaradhyashekdar.vercel.app/api/reviews/delete?id=${reviewId}&secret=${approveSecret}`
      : `https://aaradhyashekdar.vercel.app/api/reviews/delete?secret=${approveSecret}`;

    if (resendApiKey) {
      const htmlContent = `
        <h2>New Portfolio Review Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        ${company ? `<p><strong>Company / Organization:</strong> ${company}</p>` : ''}
        <p><strong>Rating:</strong> ${rating} / 5</p>
        ${linkedinUrl ? `<p><strong>Profile / LinkedIn:</strong> <a href="${linkedinUrl}">${linkedinUrl}</a></p>` : ''}
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 3px solid #38bdf8; padding-left: 12px; margin: 12px 0; color: #334155;">
          ${message}
        </blockquote>
        <br />
        <div style="margin-top: 20px; padding: 16px; background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #0369a1;">Manage this review for your public portfolio:</p>
          <p style="margin: 0 0 10px 0;">&#9989; Approve: <a href="${approveLink}">${approveLink}</a></p>
          <p style="margin: 0 0 14px 0;">&#128465;&#65039; Delete: <a href="${deleteLink}">${deleteLink}</a></p>
          <a href="${approveLink}" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-right: 8px;">
            &#9989; Approve Review
          </a>
          <a href="${deleteLink}" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            &#128465;&#65039; Delete Review
          </a>
        </div>
      `;

      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'aaradhya.shek@gmail.com',
            subject: `New Portfolio Review from ${name}`,
            html: htmlContent,
          }),
        });

        if (!res.ok) {
          const errorData = await res.text();
          console.error('Resend API error:', errorData);
        }
      } catch (emailErr) {
        console.error('Failed to send review email notification:', emailErr);
      }
    }

    return NextResponse.json({ success: true, id: reviewId }, { status: 200 });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}
