import PostComponent from '@/components/app/post';
import client from '@/tina/__generated__/client';

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.post({ relativePath: `${params.slug}.md` });

  return <PostComponent {...result} />;
}
