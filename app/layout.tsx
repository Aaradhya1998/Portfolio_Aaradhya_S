import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Aaradhya Shekdar | Developer Portfolio',
  description: 'Portfolio of Aaradhya Shekdar featuring experience, projects, hackathons, resume, and contact information.',
  openGraph: {
    title: 'Aaradhya Shekdar | Developer Portfolio',
    description: 'Portfolio of Aaradhya Shekdar featuring experience, projects, hackathons, resume, and contact information.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
