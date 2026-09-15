// Requires env var: RESEND_API_KEY
// Get it free at https://resend.com → API Keys
// Add to Vercel: Project Settings → Environment Variables → RESEND_API_KEY

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, company, rating, message } = body;

    if (!name || !role || !company || rating === undefined || rating === null || rating === '' || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'portfolio@resend.dev',
        to: 'aaradhya.shek@gmail.com',
        subject: `New Portfolio Review from ${name}`,
        html: `
          <h2>New Portfolio Review</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Rating:</strong> ${rating}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
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
