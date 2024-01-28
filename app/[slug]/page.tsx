import PageComponent from '@/components/app/page';
import client from '@/tina/__generated__/client';

export async function generateStaticParams() {
  const result = await client.queries.pageConnection();

  return result.data.pageConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.pageAndNav({ relativePath: `${params.slug}.mdx` });

  return <PageComponent {...result} />;
}
