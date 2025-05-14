// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { motion } from '@/app/MotionTags';

interface GraphicItemProps {
  src: string;
  className?: string;
  hoverEffect?: 'scale' | 'flip';
}

export default function GraphicItem({ src, hoverEffect = 'scale', className = '' }: GraphicItemProps) {
  // 根據 hoverEffect 選擇動作
  const motionProps =
    hoverEffect === 'flip'
      ? { whileHover: { rotateY: 180 }, transition: { duration: 0.6 } }
      : { whileHover: { scale: 1.05 }, transition: { duration: 0.3 } };

  return (
    <motion.div
      className={`w-24 h-32 rounded-xl shadow-lg overflow-hidden ${hoverEffect === 'flip' ? 'perspective-1000' : ''} ${className}`}
      style={hoverEffect === 'flip' ? { transformStyle: 'preserve-3d' } : undefined}
      {...motionProps}
    >
      {/* 正面 */}
      <div className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
        <Image src={src} alt="Graphic Work" fill className="object-cover" />
      </div>
      {/* 背面 (空白) */}
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
