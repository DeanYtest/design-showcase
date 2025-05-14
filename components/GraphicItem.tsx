// components/GraphicItem.tsx
'use client';

import Image from 'next/image';
import { MotionDiv } from '@/app/MotionTags';

interface GraphicItemProps {
  src: string;
  hoverEffect?: 'scale' | 'flip';
}

export default function GraphicItem({
  src,
  hoverEffect = 'scale',
}: GraphicItemProps) {
  // flip 時需 3D 翻牌效果
  const motionProps =
    hoverEffect === 'flip'
      ? { whileHover: { rotateY: 180 }, transition: { duration: 0.6 } }
      : { whileHover: { scale: 1.05 }, transition: { duration: 0.3 } };

  return (
    <MotionDiv
      className={`w-24 h-32 rounded-xl shadow-lg overflow-hidden ${
        hoverEffect === 'flip' ? 'perspective-1000' : ''
      }`}
      style={hoverEffect === 'flip' ? { transformStyle: 'preserve-3d' } : {}}
      {...motionProps}
    >
      {/* 正面 */}
      <div
        className="absolute inset-0 backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Image src={src} alt="Graphic Work" fill className="object-cover" />
      </div>
      {/* 背面 (空白) */}
      {hoverEffect === 'flip' && (
        <div
          className="absolute inset-0 bg-white"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        />
      )}
    </MotionDiv>
  );
}
