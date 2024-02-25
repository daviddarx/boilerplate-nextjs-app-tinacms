'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type ActiveLinkProps = LinkProps & {
  className: string;
  activeClassName: string;
  scroll?: boolean;
};

export default function ActiveLink({
  children,
  className = '',
  activeClassName = '',
  scroll = false,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const currentRoute = usePathname();

  let computedClass = className;

  if (props.href.toString().split('/')[1] === currentRoute.split('/')[1]) {
    computedClass += ` ${activeClassName}`;
  }

  return (
    <Link scroll={scroll} className={computedClass} {...props}>
      {children}
    </Link>
  );
}
