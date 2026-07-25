import { redirect } from 'next/navigation';

const resumeUrl = 'https://drive.google.com/drive/folders/1JHN6ZvkKbv-jxXlQpmHAe3MW5KUIOPnq?usp=drive_link';

export default function ResumePage() {
  redirect(resumeUrl);
}
