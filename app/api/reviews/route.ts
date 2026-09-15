import { NextResponse } from 'next/server';
import { initialReviews } from '@/lib/reviews';

export async function GET() {
  return NextResponse.json(initialReviews);
}

export async function POST(request: Request) {
  try {
    let name = '';
    let role = '';
    let company = '';
    let rating = '';
    let message = '';
    let profileUrl = '';

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name?.toString().trim() || '';
      role = body.role?.toString().trim() || '';
      company = (body.company || body.organization)?.toString().trim() || '';
      rating = body.rating !== undefined && body.rating !== null ? body.rating.toString().trim() : '';
      message = body.message?.toString().trim() || '';
      profileUrl = body.profileUrl?.toString().trim() || '';
    } else {
      const formData = await request.formData();
      name = formData.get('name')?.toString().trim() || '';
      role = formData.get('role')?.toString().trim() || '';
      company = (formData.get('company') || formData.get('organization'))?.toString().trim() || '';
      rating = formData.get('rating')?.toString().trim() || '';
      message = formData.get('message')?.toString().trim() || '';
      profileUrl = formData.get('profileUrl')?.toString().trim() || '';
    }

    if (!name || !role || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    const htmlContent = `
      <h2>New Portfolio Review</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Role:</strong> ${role}</p>
      ${company ? `<p><strong>Company / Organization:</strong> ${company}</p>` : ''}
      ${rating ? `<p><strong>Rating:</strong> ${rating}</p>` : ''}
      ${profileUrl ? `<p><strong>Profile / LinkedIn:</strong> <a href="${profileUrl}">${profileUrl}</a></p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

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
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
