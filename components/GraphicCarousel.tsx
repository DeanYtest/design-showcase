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
      {/* 靜態定位外框：置中 & 大小 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin]">
        {/* 內部旋轉容器：無定位 transform 只有旋轉 */}
        <MotionDiv
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 48, ease: 'linear' }}
          style={{ transformOrigin: 'center center' }}
        >
          {images.map((img, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-center cursor-pointer"
                style={{ transform: `rotate(${angle}deg) translate(40vmin) rotate(${-angle}deg)` }}
                onClick={() => onSelect(img)}
              >
                <GraphicItem src={img} hoverEffect="flip" />
              </div>
            );
          })}
        </MotionDiv>
      </div>

      {/* 靜止中心文字 & 提示 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-3xl font-semibold">平面設計</h2>
        <p className="mt-2 text-sm text-gray-500">click to explore</p>
      </div>
    </div>
  );
}