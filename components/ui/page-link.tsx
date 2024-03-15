'use client';

import { uiActions } from '@/store';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  let computedClass = className;

  if (props.href.toString().split('/')[1] === currentRoute.split('/')[1]) {
    computedClass += ` ${activeClassName}`;
  }

  const handleClick = () => {
    if (scrollToTop === false) {
      dispatch(uiActions.setScrollToTopOnPageChange(false));

      setTimeout(() => {
        dispatch(uiActions.setScrollToTopOnPageChange(true));
      }, 100);
    }
  };

  return (
    <Link onClick={handleClick} scroll={scrollToTop} className={computedClass} {...props}>
      {children}
    </Link>
  );
}
