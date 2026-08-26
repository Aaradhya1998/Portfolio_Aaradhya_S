import { resumeUrl } from '@data/portfolio';

export async function GET() {
  return Response.redirect(resumeUrl, 307);
}
