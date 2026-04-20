import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function GET() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const titleFontSize = 24;
  const bodyFontSize = 12;

  page.drawText('Aaradhya Shekdar', { x: 50, y: 770, size: titleFontSize, font: timesRoman, color: rgb(0.92, 0.92, 0.96) });
  page.drawText('AI and ML Student', { x: 50, y: 744, size: 14, font: timesRoman, color: rgb(0.68, 0.72, 0.94) });

  const lines = [
    'Education',
    'B.Tech CSE - JSPM University',
    'Learning and making machine learning projects while studying AI architecture.',
    '',
    'Skills',
    'Python, MySQL, Python Libraries, Machine Learning Projects, AI Architecture'
  ];

  let y = 710;
  for (const line of lines) {
    page.drawText(line, { x: 50, y, size: bodyFontSize, font: timesRoman, color: rgb(0.84, 0.88, 0.96) });
    y -= line === '' ? 20 : 18;
  }

  const pdfBytes = await pdfDoc.save();
  const pdfBuffer = Buffer.from(pdfBytes);

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="AaradhyaShekdar_Resume.pdf"'
    }
  });
}
