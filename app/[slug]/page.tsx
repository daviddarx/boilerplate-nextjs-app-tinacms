import PageComponent from '@/components/app/page';
import client from '@/tina/__generated__/client';

export const revalidate = 10;

export async function generateStaticParams() {
  const result = await client.queries.pageConnection();

  return result.data.pageConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pageResult = await client.queries.pageAndNav({ relativePath: `${params.slug}.mdx` });

  const hasPostListBlock = pageResult.data.page.blocks?.some(
    (block) => block?.__typename === 'PageBlocksPostList',
  );

  if (hasPostListBlock) {
    const postResult = await client.queries.postConnection();
    return <PageComponent pageProps={{ ...pageResult }} postsProps={{ ...postResult }} />;
  } else {
    return <PageComponent pageProps={{ ...pageResult }} />;
  }
}
