'use client';

import FeatureList from '@/components/content/feature-list';
import Hero from '@/components/content/hero';
import { PageQuery } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

export default function PageComponent(props: {
  data: PageQuery;
  variables: { relativePath: string };
  query: string;
}) {
  const data = useTina(props);
  const { page } = data.data;

  return (
    <div>
      <h1 className='sr-only'>{page.title}</h1>
      <div className='flex flex-col gap-spacer-120'>
        {page.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case 'PageBlocksHero': {
              return <Hero {...block} key={i} />;
            }
            case 'PageBlocksFeatureList': {
              return <FeatureList {...block} key={i} />;
            }
          }
        })}
      </div>
    </div>
  );
}
