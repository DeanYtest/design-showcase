// components/AnimatedAvatar.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedAvatar() {
  return (
    <motion.div
      className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-200 mx-auto"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Image
        src="/images/about-me.jpg"
        alt="Chu 設計師"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
