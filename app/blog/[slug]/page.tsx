import PostComponent from '@/components/app/post';
import client from '@/tina/__generated__/client';

export const revalidate = 10;

export async function generateStaticParams() {
  const result = await client.queries.postConnection();

  return result.data.postConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.postAndNav({ relativePath: `${params.slug}.mdx` });

  return <PostComponent {...result} />;
}
