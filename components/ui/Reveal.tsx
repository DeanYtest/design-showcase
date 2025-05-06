// app/components/ui/Reveal.tsx
'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { RefObject } from 'react';

export default function Reveal({ children }: { children: ReactNode }) {
  // 用 HTMLDivElement 作為 ref，但為了符合 useInView 參數宣告，我們稍作類型轉換
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(
    ref as unknown as RefObject<Element>,
    { once: true, margin: '-100px' }
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
