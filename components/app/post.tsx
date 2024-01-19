'use client';

import CustomMarkdown from '../ui/custom-markdown';
import { PostQuery } from '@/tina/__generated__/types';
import Image from 'next/image';
import { useTina } from 'tinacms/dist/react';
import { tinaField } from 'tinacms/dist/react';

export default function PostComponent(props: {
  data: PostQuery;
  variables: { relativePath: string };
  query: string;
}) {
  const data = useTina(props);
  const { post } = data.data;

  return (
    <div>
      <header className='text-container'>
        <h1 data-tina-field={tinaField(post, 'title')} className='h2'>
          {post.title}
        </h1>
        <div data-tina-field={tinaField(post, 'category')}>{post.category.title}</div>
      </header>
      <div className='mt-gutter'>
        {post.image && (
          <div data-tina-field={tinaField(post, 'image')}>
            <Image src={post.image} alt={post.title} width={1920} height={1080} />
          </div>
        )}
        {post.body && (
          <div data-tina-field={tinaField(post, 'body')}>
            <CustomMarkdown content={post.body} className={'mt-gutter pr-gutter'} />
          </div>
        )}
      </div>
    </div>
  );
}
