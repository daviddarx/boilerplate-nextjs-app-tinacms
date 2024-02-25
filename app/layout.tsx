import './globals.css';
import Header from '@/components/layout/header';
import StoreProvider from '@/store/store-provider';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';

const font = Bricolage_Grotesque({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate NextJS & TinaCMS',
  description: 'Boilerplate for Next.js website with TinaCMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={classNames('h-full w-full', font.className)}>
          <div className='lg:grid lg:grid-cols-2'>
            <Header />
            <main className='p-gutter lg:px-0 lg:pr-gutter'>{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
