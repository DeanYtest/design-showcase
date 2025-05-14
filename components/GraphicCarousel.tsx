'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// 透過 HTMLMotionProps<'div'> 正確取得 motion.div 的型別，支援 className、onClick 等原生屬性
type MotionDivProps = HTMLMotionProps<'div'>;
const MotionDiv: React.FC<MotionDivProps> = motion.div;

interface GraphicCarouselProps {
  onSelect: Dispatch<SetStateAction<string | null>>;
}

const images: string[] = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
  // 如需更多圖檔，可在此新增
];

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[var(--color-bg)]">
      {/* 環形動畫 - 鎖定於視口中央 */}
      <div
        className="fixed left-1/2 top-1/2 w-[80vmin] h-[80vmin] -translate-x-1/2 -translate-y-1/2 origin-center animate-spin-custom pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth={10} fill="none" />
        </svg>
      </div>

      {/* 圖片 Carousel 內容 */}
      <MotionDiv
        className="relative z-10 flex items-center justify-center h-full"
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {images.map((src, idx) => (
            <MotionDiv
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => onSelect(src)}
            >
              <img src={src} alt={`Graphic ${idx + 1}`} className="w-full h-auto object-cover" />
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
