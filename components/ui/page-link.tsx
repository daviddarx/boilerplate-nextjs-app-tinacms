'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type PageLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
  scrollToTop?: boolean;
};

export default function PageLink({
  children,
  className = '',
  activeClassName = '',
  scrollToTop = true,
  ...props
}: PropsWithChildren<PageLinkProps>) {
  const currentRoute = usePathname();

  let computedClass = className;

  if (props.href.toString().split('/')[1] === currentRoute.split('/')[1]) {
    computedClass += ` ${activeClassName}`;
  }

  return (
    <Link scroll={scrollToTop} className={computedClass} {...props}>
      {children}
    </Link>
  );
}
