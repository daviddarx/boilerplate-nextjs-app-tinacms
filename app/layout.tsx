import './globals.css';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate NextJS & TinaCMS',
  description: 'Boilerplate for Next.js website with TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={classNames('p-20', inter.className)}>{children}</body>
    </html>
  );
}
