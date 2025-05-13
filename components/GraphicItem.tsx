// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GraphicItemProps {
  src: string;
}

export default function GraphicItem({ src }: GraphicItemProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-40 h-56 overflow-hidden rounded-xl shadow-xl">
        <Image
          src={src}
          alt="Graphic Work"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
