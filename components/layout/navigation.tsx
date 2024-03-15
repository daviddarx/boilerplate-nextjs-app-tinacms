'use client';

import PageLink from '@/components/ui/page-link';
import { NavigationResult } from '@/types';
import ease from '@/utils/eases';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { tinaField, useTina } from 'tinacms/dist/react';

export default function Navigation(props: NavigationResult) {
  const navigationData = useTina(props);
  const { navigation } = navigationData.data;
  const path = usePathname();

  return (
    <nav className='mb-40 p-gutter lg:fixed lg:bottom-0 lg:left-0 lg:mb-0'>
      <h2 className='sr-only'>Navigation</h2>
      <ul className='flex flex-wrap items-start gap-spacer-16 lg:flex-col'>
        {navigation.links &&
          navigation.links.map((link) => (
            <li
              key={link!.link}
              data-tina-field={link && tinaField(link, 'label')}
              className='relative'
            >
              <PageLink href={link!.link} className='button' activeClassName='button--primary'>
                {link?.label}
              </PageLink>

              {path.split('/')[1] === link!.link.split('/')[1] && (
                <motion.span
                  layoutId='activeLine'
                  className='absolute -bottom-4 -left-4 -right-4 -top-4 rounded-full border border-black'
                  transition={{
                    duration: 0.5,
                    ease: ease.inOutQuart,
                  }}
                />
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
