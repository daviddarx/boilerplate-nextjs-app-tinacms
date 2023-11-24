import { CustomMarkdown } from '@/components/ui/custom-markdown';
import { PageBlocksHero } from '@/tina/__generated__/types';
import { classNames } from 'tinacms';

export function Hero(props: PageBlocksHero) {
  return (
    <section>
      <h2 className='font-bold'>{props.title}</h2>
      <CustomMarkdown content={props.description} />
      <div className='flex items-start gap-12'>
        {props.links?.map((link, i) => (
          <a
            key={i}
            href={link?.href}
            className={'inline-block px-12 py-2 rounded-full border border-gray-200'}
          >
            {link?.label}
          </a>
        ))}
      </div>
    </section>
  );
}
