import { redirect } from 'next/navigation';

const resumeUrl = 'https://docs.google.com/document/d/1U_jnN_ss3mg9ttI8EwCeQvZE1kdYsPe4/edit?usp=drive_link&ouid=103651636877154607130&rtpof=true&sd=true';
export default function ResumePage() {
  redirect(resumeUrl);
}
