'use client';

import CustomMarkdown from '../ui/custom-markdown';
import Navigation from '@/components/ui/navigation';
import { PostResult } from '@/types/';
import Image from 'next/image';
import { useTina } from 'tinacms/dist/react';
import { tinaField } from 'tinacms/dist/react';

export default function Post(props: PostResult) {
  const data = useTina(props);
  const { post, navigation } = data.data;
  const date = new Intl.DateTimeFormat('de-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(post.createdAt));

  return (
    <div>
      <Navigation {...navigation} />
      <header className='text-container'>
        <h1 data-tina-field={tinaField(post, 'title')} className='h2'>
          {post.title}
        </h1>
        <div>
          <span data-tina-field={tinaField(post, 'createdAt')}>{date}</span> -{' '}
          <span data-tina-field={tinaField(post, 'category')}>{post.category.title}</span>
        </div>
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
