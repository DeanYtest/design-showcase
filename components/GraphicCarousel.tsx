// components/GraphicCarousel.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

const images: string[] = Array.from({ length: 20 }, (_, i) => `/images/graphic/image${(i % 5) + 1}.jpg`);

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  const radius = 250; // 半徑
  const centerX = 300;
  const centerY = 300;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.2);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* 使用 motion.div 只處理旋轉動畫，不直接帶 className */}
      <motion.div
        animate={{ rotate: rotation }}
        style={{ transformOrigin: 'center center' }}
      >
        {/* 將位置與樣式移到內部 div */}
        <div className="absolute w-full h-full">
          {images.map((img, index) => {
            const angle = (360 / images.length) * index;
            const rad = (angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(rad) - 50;
            const y = centerY + radius * Math.sin(rad) - 50;

            return (
              <div
                key={index}
                className="absolute cursor-pointer"
                style={{ left: `${x}px`, top: `${y}px` }}
                onClick={() => onSelect(img)}
              >
                <GraphicItem src={img} />
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="absolute text-center text-black text-xl font-bold">
        平面設計
      </div>
    </div>
  );
}