import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Marcus Briggs | Developer Portfolio',
  description: 'Premium developer portfolio with projects, blog, resume, and contact.',
  metadataBase: new URL('https://www.marcusbriggs.dev'),
  openGraph: {
    title: 'Marcus Briggs | Developer Portfolio',
    description: 'Premium developer portfolio with projects, blog, resume, and contact.',
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
