'use client';

import FeatureList from '@/components/content/feature-list';
import Hero from '@/components/content/hero';
import PostList from '@/components/content/post-list';
import Navigation from '@/components/ui/navigation';
import { PageResult, PostsResult } from '@/tina/types';
import { useTina } from 'tinacms/dist/react';

export default function PageComponent(props: { pageProps: PageResult; postsProps?: PostsResult }) {
  const pageData = useTina(props.pageProps);
  const { page, navigation } = pageData.data;

  return (
    <div>
      <Navigation {...navigation} />
      <h1>{page.title}</h1>
      <div className='my-spacer-120 flex flex-col gap-spacer-80'>
        {page.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case 'PageBlocksHero': {
              return <Hero {...block} key={i} />;
            }
            case 'PageBlocksFeatureList': {
              return <FeatureList {...block} key={i} />;
            }
            case 'PageBlocksPostList': {
              return <PostList blockProps={{ ...block }} postsProps={props.postsProps!} key={i} />;
            }
          }
        })}
      </div>
    </div>
  );
}
