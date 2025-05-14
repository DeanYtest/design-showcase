// components/GraphicCarousel.tsx
'use client';

import { motion } from '@/app/MotionTags';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

// 使用示例圖，總計 20 張
const images: string[] = Array.from(
  { length: 20 },
  (_, i) => `/images/graphic/image${(i % 5) + 1}.jpg`
);

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden">
      {/* 圓環容器：寬高均取 80vmin，絕對置中 */}
      <div className="absolute left-1/2 top-1/2 w-[80vmin] h-[80vmin] -translate-x-1/2 -translate-y-1/2">
        {/* 緩線性、無限循環旋轉 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          style={{ width: '100%', height: '100%', transformOrigin: 'center center' }}
        >
          {images.map((img, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{ transform: `rotate(${angle}deg) translate(40vmin) rotate(${-angle}deg)` }}
                onClick={() => onSelect(img)}
              >
                <GraphicItem src={img} />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 中央固定文字 */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold">
        平面設計
      </div>
      {/* 互動提示 */}
      <div className="absolute left-1/2 top-[calc(50%+2.5rem)] transform -translate-x-1/2 text-sm text-gray-500">
        click to explore
      </div>
    </div>
  );
}