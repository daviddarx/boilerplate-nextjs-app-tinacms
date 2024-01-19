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

  return (
    <div>
      <header className='text-container'>
        <h1 data-tina-field={tinaField(data.data.post, 'title')} className='h2'>
          {data.data.post.title}
        </h1>
        {data.data.post.category && (
          <div data-tina-field={tinaField(data.data.post, 'category')}>
            {data.data.post.category.title}
          </div>
        )}
      </header>
      <div className='mt-gutter'>
        {data.data.post.image && (
          <div data-tina-field={tinaField(data.data.post, 'image')}>
            <Image
              src={data.data.post.image}
              alt={data.data.post.title}
              width={1920}
              height={1080}
            />
          </div>
        )}
        {data.data.post.body && (
          <div data-tina-field={tinaField(data.data.post, 'body')}>
            <CustomMarkdown content={data.data.post.body} className={'mt-gutter pr-gutter'} />
          </div>
        )}
      </div>
    </div>
  );
}
