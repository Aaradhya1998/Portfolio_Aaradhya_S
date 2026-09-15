import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let name = '';
    let email = '';
    let message = '';

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name?.toString().trim() || '';
      email = body.email?.toString().trim() || '';
      message = body.message?.toString().trim() || '';
    } else {
      const formData = await request.formData();
      name = formData.get('name')?.toString().trim() || '';
      email = formData.get('email')?.toString().trim() || '';
      message = formData.get('message')?.toString().trim() || '';
    }

    if (!name || !email || !message) {
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
        from: 'onboarding@resend.dev',
        to: 'aaradhya.shek@gmail.com',
        subject: `Portfolio contact from ${name}`,
        reply_to: email,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
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
    console.error('Error sending contact message:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
