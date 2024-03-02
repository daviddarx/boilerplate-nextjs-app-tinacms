'use client';

import Footer from '@/components/layout/footer';
import CustomMarkdown from '@/components/ui/custom-markdown';
import { PostResult } from '@/types/';
import { formatDate } from '@/utils/core';
import Image from 'next/image';
import { useTina } from 'tinacms/dist/react';
import { tinaField } from 'tinacms/dist/react';

export default function Post(props: PostResult) {
  const data = useTina(props);
  const { post } = data.data;

  return (
    <div>
      <header className='text-container'>
        <h1 data-tina-field={tinaField(post, 'title')} className='h2'>
          {post.title}
        </h1>
        <div>
          <span data-tina-field={tinaField(post, 'createdAt')}>{formatDate(post.createdAt)}</span> -{' '}
          <span data-tina-field={tinaField(post, 'category')}>{post.category.title}</span>
        </div>
      </header>
      <div className='mt-gutter'>
        {post.image && (
          <div data-tina-field={tinaField(post, 'image')}>
            <Image
              src={post.image}
              alt={post.title}
              width={post.imageWidth || 1920}
              height={post.imageHeight || 1080}
            />
          </div>
        )}
        {post.body && (
          <div data-tina-field={tinaField(post, 'body')}>
            <CustomMarkdown content={post.body} className={'mt-gutter pr-gutter'} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
