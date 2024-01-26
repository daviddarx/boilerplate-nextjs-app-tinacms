import ActiveLink from '@/components/ui/active-link';
import { PageAndNavQuery } from '@/tina/__generated__/types';

export default function Navigation(props: PageAndNavQuery['navigation']) {
  return (
    <nav className='mb-40 lg:fixed lg:bottom-0 lg:left-0 lg:mb-0 lg:p-gutter'>
      <h2 className='sr-only'>Navigation</h2>
      <ul className='flex gap-spacer-16 lg:flex-col'>
        {props.links &&
          props.links.map((link) => (
            <li key={link!.link}>
              <ActiveLink href={link!.link} className='button' activeClassName='button--primary'>
                {link?.label}
              </ActiveLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
