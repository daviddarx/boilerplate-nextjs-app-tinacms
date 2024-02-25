import ActiveLink from '@/components/ui/active-link';
import { PageAndNavQuery } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

export default function Navigation(props: PageAndNavQuery['navigation']) {
  return (
    <nav className='mb-40 lg:fixed lg:bottom-0 lg:left-0 lg:mb-0 lg:p-gutter'>
      <h2 className='sr-only'>Navigation</h2>
      <ul className='flex flex-wrap gap-spacer-16 lg:flex-col'>
        {props.links &&
          props.links.map((link) => (
            <li key={link!.link} data-tina-field={link && tinaField(link, 'label')}>
              <ActiveLink
                href={link!.link}
                className='button'
                activeClassName='button--primary'
                scroll={true}
              >
                {link?.label}
              </ActiveLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
