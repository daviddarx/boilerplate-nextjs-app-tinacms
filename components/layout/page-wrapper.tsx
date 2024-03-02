'use client';

import ease from '@/utils/eases';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          ease: ease.outQuart,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
