import './globals.css';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';

const font = Bricolage_Grotesque({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate NextJS & TinaCMS',
  description: 'Boilerplate for Next.js website with TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={classNames('h-full w-full', font.className)}>
        <div className='lg:grid lg:grid-cols-2'>
          <header>
            <h2 className='p-gutter lg:fixed lg:left-0 lg:top-0'>
              <Link href='/'>Logo</Link>
            </h2>
          </header>
          <main className='p-gutter lg:px-0'>{children}</main>
        </div>
      </body>
    </html>
  );
}
