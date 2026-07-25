const resumeUrl = 'https://drive.google.com/drive/folders/1JHN6ZvkKbv-jxXlQpmHAe3MW5KUIOPnq?usp=drive_link';

export async function GET() {
  return Response.redirect(resumeUrl, 307);
}
