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
      className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt="Graphic Work"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
