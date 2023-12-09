'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type ActiveLinkProps = LinkProps & {
  className: string;
  activeClassName: string;
};

export default function ActiveLink({
  children,
  className = '',
  activeClassName = '',
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const currentRoute = usePathname();

  let computedClass = className;

  if (props.href === currentRoute) {
    computedClass += ` ${activeClassName}`;
  }

  return (
    <Link scroll={false} className={computedClass} {...props}>
      {children}
    </Link>
  );
}
