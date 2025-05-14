// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { motion } from '@/app/MotionTags';

interface GraphicItemProps {
  src: string;
}

export default function GraphicItem({ src }: GraphicItemProps) {
  return (
    // ← 普通 div 放所有样式
    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
      {/* ← motion.div 只负责动画，不带任何 className/style */}
      <motion.div
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
    </div>
  );
}
