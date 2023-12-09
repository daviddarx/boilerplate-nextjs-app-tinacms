import ActiveLink from '@/components/ui/active-link';

export default function MainNav() {
  return (
    <nav className='p-gutter lg:fixed lg:bottom-0 lg:left-0'>
      <h2 className='sr-only'>Navigation</h2>
      <ul className='flex gap-spacer-16 lg:flex-col'>
        <li>
          <ActiveLink href='/' className='button' activeClassName='button--primary'>
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/blog' className='button' activeClassName='button--primary'>
            Blog
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
