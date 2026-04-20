import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

const reviewsFile = path.join(process.cwd(), 'data', 'reviews.json');

export async function GET() {
  const raw = await fs.readFile(reviewsFile, 'utf-8');
  return NextResponse.json(JSON.parse(raw));
}

export async function POST(request: Request) {
  const body = await request.formData();
  const name = body.get('name')?.toString().trim();
  const role = body.get('role')?.toString().trim();
  const organization = body.get('organization')?.toString().trim();
  const profileUrl = body.get('profileUrl')?.toString().trim();
  const message = body.get('message')?.toString().trim();

  if (!name || !role || !message) {
    return NextResponse.redirect(new URL('/?review=invalid', request.url));
  }

  const raw = await fs.readFile(reviewsFile, 'utf-8');
  const reviews = JSON.parse(raw) as Array<Record<string, string>>;
  reviews.unshift({
    name,
    role,
    organization: organization ?? '',
    profileUrl: profileUrl ?? '',
    message
  });
  await fs.writeFile(reviewsFile, JSON.stringify(reviews, null, 2), 'utf-8');

  return NextResponse.redirect(new URL('/?review=thanks', request.url));
}
