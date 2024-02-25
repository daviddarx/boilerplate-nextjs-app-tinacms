import CustomMarkdown from '@/components/ui/custom-markdown';
import { PageBlocksPostList } from '@/tina/__generated__/types';
import { postRoute } from '@/tina/config';
import { PostsFilter, PostsResult } from '@/types/';
import { formatDate } from '@/utils/core';
import classNames from 'classnames';
import Link from 'next/link';
import { tinaField, useTina } from 'tinacms/dist/react';

export default function PostList(props: {
  blockProps: PageBlocksPostList;
  postsProps: PostsResult;
  filterProps: PostsFilter[];
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
        <div className='mt-gutter'>
          <ul className='flex gap-8'>
            {props.filterProps.map((filter, i) => {
              return (
                <li key={i}>
                  <Link
                    href={filter.url}
                    className={classNames('button', {
                      'button--primary': filter.active,
                    })}
                  >
                    {filter.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className='mt-gutter'>
            {posts.map((edge) => {
              const post = edge?.node;

              if (!post) {
                return null;
              }

              return (
                <li key={post._sys.filename} className='border-t border-black'>
                  <Link
                    href={`${postRoute}/${post._sys.filename}`}
                    className='flex flex-col items-center gap-8 py-gutter lg:flex-row lg:justify-between lg:gap-32'
                  >
                    <h3 data-tina-field={tinaField(post, 'title')}>{post.title}</h3>
                    <div className='flex gap-16'>
                      <span className='font-bold uppercase'>{post.category.title}</span> –
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
