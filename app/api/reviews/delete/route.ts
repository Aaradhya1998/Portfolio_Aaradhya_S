// Requires: DATABASE_URL (from Neon dashboard)
// Requires: APPROVE_SECRET (any random string you choose, e.g. "myportfolio2026")

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
    await sql`
      DELETE FROM reviews
      WHERE id = ${Number(id)};
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Review Deleted</title>
        </head>
        <body>
          <h1>Review deleted successfully!</h1>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    return new NextResponse('Internal Server Error while deleting review', { status: 500 });
  }
}
