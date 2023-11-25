import { CustomMarkdown } from '@/components/ui/custom-markdown';
import { PageBlocksFeatureList } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

export function FeatureList(props: PageBlocksFeatureList) {
  return (
    <section>
      <h2 className='font-bold' data-tina-field={tinaField(props, 'title')}>
        {props.title}
      </h2>
      <div data-tina-field={tinaField(props, 'description')}>
        <CustomMarkdown content={props.description} />
      </div>
      <ul className='flex items-start gap-12'>
        {props.feature?.map((feature, i) => (
          <li key={i} data-tina-field={tinaField(feature!, 'title')}>
            <h3>{feature?.title}</h3>
            <p>{feature?.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
