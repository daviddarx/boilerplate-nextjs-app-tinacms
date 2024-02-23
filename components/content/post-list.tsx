import CustomMarkdown from '@/components/ui/custom-markdown';
import { PageBlocksPostList } from '@/tina/__generated__/types';
import { postsRoute } from '@/tina/config';
import { PostResult } from '@/tina/types';
import Link from 'next/link';
import { tinaField, useTina } from 'tinacms/dist/react';

export default function PostList(props: {
  blockProps: PageBlocksPostList;
  postsProps: PostResult;
}) {
  const { data } = useTina(props.postsProps);
  const posts = data.postConnection.edges;

  return (
    <section>
      <div className='text-container'>
        {!props.blockProps.hideTitle && (
          <h2 data-tina-field={tinaField(props.blockProps, 'title')}>{props.blockProps.title}</h2>
        )}
        {props.blockProps.description && (
          <div data-tina-field={tinaField(props.blockProps, 'description')}>
            <CustomMarkdown content={props.blockProps.description} />
          </div>
        )}
      </div>

      {posts && posts?.length > 0 && (
        <ul className='mt-gutter'>
          {posts.map((edge) => {
            const post = edge?.node;

            if (!post) {
              return null;
            }

            return (
              <li key={post._sys.filename} className='border-t border-black py-gutter pr-gutter'>
                <Link href={`${postsRoute}/${post._sys.filename}`} className='text-container'>
                  <h3 data-tina-field={tinaField(post, 'title')}>{post.title}</h3>
                  <div>{post.category.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
