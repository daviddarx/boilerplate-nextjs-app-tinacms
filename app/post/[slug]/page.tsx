import Post from '@/components/app/post';
import translations from '@/content/translations';
import client from '@/tina/__generated__/client';
import { PostResult } from '@/types';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let postResult = await client.queries.postAndNav({ relativePath: `${params.slug}.mdx` });

  return {
    title: translations.metaData.title(postResult.data.post.title),
    description: translations.metaData.description,
  };
}

export async function generateStaticParams() {
  const result = await client.queries.postConnection();

  return result.data.postConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function ServerPage({ params }: { params: { slug: string } }) {
  let postResult: PostResult;

  try {
    postResult = await client.queries.postAndNav({ relativePath: `${params.slug}.mdx` });
  } catch (error) {
    return notFound();
  }

  return <Post {...postResult} />;
}
