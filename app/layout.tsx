import './globals.css';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const font = Space_Grotesk({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate NextJS & TinaCMS',
  description: 'Boilerplate for Next.js website with TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={classNames('w-full h-full', font.className)}>
        <div className='lg:grid lg:grid-cols-2'>
          <header>
            <h2 className='lg:fixed lg:top-0 lg:left-0 p-gutter'>Logo</h2>
          </header>
          <main className='p-gutter lg:px-0'>{children}</main>
        </div>
      </body>
    </html>
  );
}
