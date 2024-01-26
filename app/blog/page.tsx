import PostsComponent from '@/components/app/posts';
import client from '@/tina/__generated__/client';

export default async function Page() {
  const result = await client.queries.postConnectionAndNav();

  return <PostsComponent {...result} />;
}
