import PageComponent from '@/components/app/page';
import client from '@/tina/__generated__/client';

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.pageAndNav({ relativePath: `${params.slug}.md` });

  return <PageComponent {...result} />;
}
