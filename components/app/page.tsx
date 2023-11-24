import { Hero } from '@/components/content/hero';
import { PageQuery } from '@/tina/__generated__/types';

export function PageComponent(props: {
  data: PageQuery;
  variables: { relativePath: string };
  query: string;
}) {
  return (
    <div>
      <h1>{props.data.page.title}</h1>
      {props.data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case 'PageBlocksHero': {
            return <Hero {...block} />;
          }
        }
      })}
    </div>
  );
}
