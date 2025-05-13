// components/GraphicCarousel.tsx
'use client';

import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

// 讓 MotionDiv 同時支援 HTMLDivElement 原生屬性和 MotionProps
const MotionDiv = motion<HTMLDivElement>('div');

const images: string[] = [
  '/images/graphic/image1.jpg',
  '/images/graphic/image2.jpg',
  '/images/graphic/image3.jpg',
  // ...其他圖片路徑
];

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] overflow-visible">
      {images.map((img, idx) => (
        <MotionDiv
          key={idx}
          className="absolute cursor-pointer"
          style={{ transformOrigin: 'center' }}
          initial={{ rotate: (360 / images.length) * idx, translateY: -200 }}
          animate={{ rotate: 360 + (360 / images.length) * idx }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          whileHover={{ scale: 1.2 }}
          onClick={() => onSelect(img)}
        >
          <GraphicItem src={img} />
        </MotionDiv>
      ))}
    </div>
  );
}
