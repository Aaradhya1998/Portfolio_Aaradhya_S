import { redirect } from 'next/navigation';

const resumeUrl = 'https://drive.google.com/file/d/1QrkmofRt1A3AQajgdcGb3b5Vzub-OI5R/view';
export default function ResumePage() {
  redirect(resumeUrl);
}
