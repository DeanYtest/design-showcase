// components/GraphicCarousel.tsx
'use client';

import { MotionDiv } from '@/app/MotionTags';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

const images: string[] = Array.from(
  { length: 20 },
  (_, i) => `/images/graphic/image${(i % 5) + 1}.jpg`
);

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden">
      {/* 直接使用 MotionDiv 作為旋轉容器，透過 flex 置中 */}
      <MotionDiv
        className="relative w-[80vmin] h-[80vmin]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 48, ease: 'linear' }}
        style={{ transformOrigin: 'center center' }}
      >
        {images.map((img, i) => {
          const angle = (360 / images.length) * i;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 transform-gpu cursor-pointer"
              style={{ transform: `rotate(${angle}deg) translate(40vmin) rotate(${-angle}deg)` }}
              onClick={() => onSelect(img)}
            >
              <GraphicItem src={img} hoverEffect="flip" />
            </div>
          );
        })}
      </MotionDiv>

      {/* 靜止中心文本與提示 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-3xl font-semibold">平面設計</h2>
        <p className="mt-2 text-sm text-gray-500">click to explore</p>
      </div>
    </div>
  );
}
