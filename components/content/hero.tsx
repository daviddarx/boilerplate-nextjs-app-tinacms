import CustomMarkdown from '@/components/ui/custom-markdown';
import { PageBlocksHero } from '@/tina/__generated__/types';
import classNames from 'classnames';
import { tinaField } from 'tinacms/dist/react';

export default function Hero(props: PageBlocksHero) {
  return (
    <section className='lg:pr-gutter'>
      <div className='text-container'>
        <h2 data-tina-field={tinaField(props, 'title')}>{props.title}</h2>
        <div data-tina-field={tinaField(props, 'description')}>
          <CustomMarkdown content={props.description} />
        </div>
        <div className='flex items-start gap-12'>
          {props.links?.map((link, i) => (
            <a
              key={i}
              href={link?.href}
              className={classNames('button', {
                'button--primary': link?.style === 'primary',
              })}
              data-tina-field={tinaField(link!, 'label')}
            >
              {link?.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
