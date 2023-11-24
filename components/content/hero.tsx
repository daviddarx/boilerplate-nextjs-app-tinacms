import { CustomMarkdown } from '@/components/ui/custom-markdown';
import { PageBlocksHero } from '@/tina/__generated__/types';
import classNames from 'classnames';
import { tinaField } from 'tinacms/dist/react';

export function Hero(props: PageBlocksHero) {
  return (
    <section>
      <h2 className='font-bold' data-tina-field={tinaField(props, 'title')}>
        {props.title}
      </h2>
      <div data-tina-field={tinaField(props, 'description')}>
        <CustomMarkdown content={props.description} />
      </div>
      <div className='flex items-start gap-12'>
        {props.links?.map((link, i) => (
          <a
            key={i}
            href={link?.href}
            className={classNames('inline-block px-12 py-2 rounded-full border border-gray-200', {
              'bg-black border-black text-white': link?.style === 'primary',
            })}
            data-tina-field={tinaField(link!, 'label')}
          >
            {link?.label}
          </a>
        ))}
      </div>
    </section>
  );
}
