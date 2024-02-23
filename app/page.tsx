import PageComponent from '@/components/app/page';
import client from '@/tina/__generated__/client';

export const revalidate = 10;

export default async function Page() {
  const result = await client.queries.pageAndNav({ relativePath: 'home.mdx' });

  return <PageComponent pageProps={{ ...result }} />;
}
