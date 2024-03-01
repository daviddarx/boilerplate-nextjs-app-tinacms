import './globals.css';
import Header from '@/components/layout/header';
import Navigation from '@/components/ui/navigation';
import translations from '@/content/translations';
import StoreProvider from '@/store/store-provider';
import client from '@/tina/__generated__/client';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';

const font = Bricolage_Grotesque({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: translations.metaData.title(),
  description: translations.metaData.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navigationResult = await client.queries.navigation({ relativePath: 'navigation.md' });

  return (
    <StoreProvider>
      <html lang='en'>
        <body className={classNames('h-full w-full', font.className)}>
          <div className='lg:grid lg:grid-cols-2'>
            <Header />
            <main className='p-gutter lg:px-0 lg:pr-gutter'>{children}</main>
            <Navigation {...navigationResult} />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
