const resumeUrl = 'https://drive.google.com/file/d/19UUqgrWP5da_vgipABG-8PP440M9lzT1/view';

export async function GET() {
  return Response.redirect(resumeUrl, 307);
}
