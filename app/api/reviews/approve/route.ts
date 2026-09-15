// Requires: DATABASE_URL (from Neon dashboard)
// Requires: APPROVE_SECRET (any random string you choose, e.g. "myportfolio2026")
// Requires: RESEND_API_KEY (already set)

import { NextResponse } from 'next/server';
import { getSql, initDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const secret = searchParams.get('secret');

    const expectedSecret = process.env.APPROVE_SECRET;
    if (!expectedSecret || secret !== expectedSecret) {
      return new NextResponse('Unauthorized: Invalid or missing secret', { status: 401 });
    }

    if (!id) {
      return new NextResponse('Bad Request: Missing review ID', { status: 400 });
    }

    const sql = getSql();
    if (!sql) {
      return new NextResponse('Server Error: Database not configured', { status: 500 });
    }

    await initDb();
    const result = await sql`
      UPDATE reviews
      SET approved = true
      WHERE id = ${Number(id)}
      RETURNING id, name, approved;
    `;

    if (!result || result.length === 0) {
      return new NextResponse('Review not found', { status: 404 });
    }

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Review Approved</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #030712;
              color: #f3f4f6;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
            }
            .card {
              background-color: #111827;
              border: 1px solid #1f2937;
              padding: 2.5rem;
              border-radius: 1.5rem;
              text-align: center;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
              max-width: 400px;
            }
            h1 {
              color: #38bdf8;
              margin-top: 0;
              font-size: 1.5rem;
            }
            p {
              color: #9ca3af;
              font-size: 1rem;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Review Approved Successfully!</h1>
            <p>The review (ID: ${id}) has been marked as approved and is now live on your portfolio.</p>
          </div>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    console.error('Error approving review:', error);
    return new NextResponse('Internal Server Error while approving review', { status: 500 });
  }
}
