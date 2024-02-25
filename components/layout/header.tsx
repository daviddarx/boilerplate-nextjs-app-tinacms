import Link from 'next/link';

export default function Logo() {
  return (
    <header>
      <h2 className='h1 p-gutter lg:fixed lg:left-0 lg:top-0'>
        <Link href='/' scroll={true}>
          Logo
        </Link>
      </h2>
    </header>
  );
}
