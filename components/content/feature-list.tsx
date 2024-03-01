import CustomMarkdown from '@/components/ui/custom-markdown';
import { PageBlocksFeatureList } from '@/tina/__generated__/types';
import Image from 'next/image';
import { tinaField } from 'tinacms/dist/react';

export default function FeatureList(props: PageBlocksFeatureList) {
  return (
    <section>
      <div className='text-container'>
        <h2 data-tina-field={tinaField(props, 'title')}>{props.title}</h2>
        {props.description && (
          <div data-tina-field={tinaField(props, 'description')}>
            <CustomMarkdown content={props.description} />
          </div>
        )}
      </div>

      {props.feature && (
        <ul className='mt-gutter grid grid-cols-1 gap-24 md:grid-cols-2 lg:gap-2'>
          {props.feature?.map((feature, i) => (
            <li key={i} data-tina-field={tinaField(feature!, 'title')}>
              {feature?.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={feature.imageWidth || 1920}
                  height={feature.imageHeight || 1080}
                />
              )}
              <div className='text-container mt-spacer-24 pr-gutter'>
                <h3>{feature?.title}</h3>
                <p>{feature?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
