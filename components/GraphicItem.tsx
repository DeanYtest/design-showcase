// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GraphicItemProps {
  src: string;
}

// 用泛型工廠 motion('div')，讓這個組件同時支援 className、style、onClick…和 MotionProps
const MotionDiv = motion('div');

export default function GraphicItem({ src }: GraphicItemProps) {
  return (
    <MotionDiv
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
    </MotionDiv>
  );
}
