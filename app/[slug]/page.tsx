import PageComponent from '@/components/app/page';
import client from '@/tina/__generated__/client';
import { PageResult } from '@/tina/types';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export async function generateStaticParams() {
  const result = await client.queries.pageConnection();

  return result.data.pageConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  let pageResult: PageResult;
  let hasPostListBlock: boolean | undefined;

  try {
    pageResult = await client.queries.pageAndNav({ relativePath: `${params.slug}.mdx` });
    hasPostListBlock = pageResult.data.page.blocks?.some(
      (block) => block?.__typename === 'PageBlocksPostList',
    );
  } catch (error) {
    return notFound();
  }

  if (hasPostListBlock) {
    const postsResult = await client.queries.postConnection();
    return <PageComponent pageProps={{ ...pageResult! }} postsProps={{ ...postsResult }} />;
  } else {
    return <PageComponent pageProps={{ ...pageResult! }} />;
  }
}
