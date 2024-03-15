'use client';

import { uiStateType } from '@/store/ui-slice';
import eases from '@/utils/eases';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

/**
 * Only provide page transition when the scroll
 * to top on page change wasn't disabled by a PageLink
 */
const motionVariants = {
  initial: (scrollToTopOnPageChange: boolean) => {
    if (scrollToTopOnPageChange) {
      return { opacity: 0, y: 50 };
    } else {
      return { opacity: 1 };
    }
  },
  animate: (scrollToTopOnPageChange: boolean) => {
    if (scrollToTopOnPageChange) {
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          ease: eases.outQuart,
        },
      };
    } else {
      return {
        opacity: 1,
        transition: {
          duration: 0,
        },
      };
    }
  },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const scrollToTopOnPageChange = useSelector(
    (state: uiStateType) => state.ui.scrollToTopOnPageChange,
  );

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={motionVariants}
      custom={scrollToTopOnPageChange}
    >
      {children}
    </motion.div>
  );
}
