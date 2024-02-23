import Page from '@/components/app/page';
import client from '@/tina/__generated__/client';

export const revalidate = 10;

export default async function ServerPage() {
  const pageResult = await client.queries.pageAndNav({ relativePath: 'home.mdx' });

  return <Page pageProps={{ ...pageResult }} />;
}
