// components/GraphicCarousel.tsx
'use client';

import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

// 圖片清單
const images: string[] = [
  '/images/graphic/image1.jpg',
  '/images/graphic/image2.jpg',
  '/images/graphic/image3.jpg',
  // ...其他圖片
];

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] overflow-visible">
      {images.map((img, idx) => (
        // ← 外層 div 負責定位、樣式、點擊
        <div
          key={idx}
          className="absolute cursor-pointer"
          style={{ transformOrigin: 'center' }}
          onClick={() => onSelect(img)}
        >
          {/* ← 內層 motion.div 只放動畫設定 */}
          <motion.div
            initial={{ rotate: (360 / images.length) * idx, translateY: -200 }}
            animate={{ rotate: 360 + (360 / images.length) * idx }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            whileHover={{ scale: 1.2 }}
          >
            <GraphicItem src={img} />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
