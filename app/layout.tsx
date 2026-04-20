import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { CustomCursor } from '@components/CustomCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Aaradhya Shekdar | Developer Portfolio',
  description: 'Premium developer portfolio with projects, blog, resume, and contact.',
  openGraph: {
    title: 'Aaradhya Shekdar | Developer Portfolio',
    description: 'Premium developer portfolio with projects, blog, resume, and contact.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
