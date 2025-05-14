// components/GraphicItem.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GraphicItemProps {
  src: string;
  hoverEffect?: 'scale' | 'flip';
}

export default function GraphicItem({
  src,
  hoverEffect = 'scale',
}: GraphicItemProps) {
  return (
    <motion.div
      className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      whileHover={
        hoverEffect === 'scale'
          ? { scale: 1.05 }
          : { rotateY: 180, transition: { duration: 0.6 } }
      }
      style={{ perspective: hoverEffect === 'flip' ? 1000 : undefined }}
    >
      {/* 正面 */}
      <div className="absolute inset-0">
        <Image src={src} alt="Graphic Work" fill className="object-cover" />
      </div>
      {/* 翻面（空白）— 只有 flip 時顯示 */}
      {hoverEffect === 'flip' && (
        <div
          className="absolute inset-0 bg-white"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        />
      )}
    </motion.div>
  );
}
