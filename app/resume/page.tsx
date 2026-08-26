import { redirect } from 'next/navigation';
import { resumeUrl } from '@data/portfolio';

export default function ResumePage() {
  redirect(resumeUrl);
}
