// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GraphicItemProps {
  src: string;
}

// 1. 泛型工廠：motion<HTMLDivElement>('div')
const MotionDiv = motion<HTMLDivElement>('div');

export default function GraphicItem({ src }: GraphicItemProps) {
  return (
    <MotionDiv
      className="relative w-40 h-56 overflow-hidden rounded-xl shadow-xl"
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
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
