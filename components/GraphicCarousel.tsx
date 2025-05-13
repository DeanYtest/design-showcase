'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  /** 點擊某張圖時，回傳該圖的 URL */
  onSelect: (img: string) => void;
}

// 圖片清單，你也可以改成從 props 傳入或從 CMS 載入
const images: string[] = [
  '/images/graphic/image1.jpg',
  '/images/graphic/image2.jpg',
  '/images/graphic/image3.jpg',
  // ...其他路徑
];

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] overflow-visible">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          className="absolute cursor-pointer"
          style={{ transformOrigin: 'center' }}
          initial={{
            rotate: (360 / images.length) * idx,
            translateY: -200,
          }}
          animate={{
            rotate: 360 + (360 / images.length) * idx,
          }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          whileHover={{ scale: 1.2 }}
          onClick={() => onSelect(img)}
        >
          <GraphicItem src={img} />
        </motion.div>
      ))}
    </div>
  );
}
