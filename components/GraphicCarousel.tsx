// components/GraphicCarousel.tsx
'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion } from '@/app/MotionTags';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

const images: string[] = Array.from({ length: 20 }, (_, i) => `/images/graphic/image${(i % 5) + 1}.jpg`);

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // 半徑採容器最小邊的 45%
  const radius = Math.min(size.width, size.height) * 0.45;
  const diameter = radius * 2;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRotation(r => r + 0.1), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 圓形容器：絕對置中 */}
      <div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${diameter}px`, height: `${diameter}px` }}
      >
        {/* 旋轉組件：以自身中心旋轉 */}
        <motion.div
          animate={{ rotate: rotation }}
          style={{ width: '100%', height: '100%', transformOrigin: 'center center' }}
        >
          {images.map((img, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                }}
                onClick={() => onSelect(img)}
              >
                {/* hover 放大效果 */}
                <GraphicItem
                  src={img}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 中央靜態文字 */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 text-3xl font-semibold">
        平面設計
      </div>
      {/* 互動提示 */}
      <div className="absolute left-1/2 top-[calc(50%+2.5rem)] transform -translate-x-1/2 text-sm text-gray-500">
        click to explore
      </div>
    </div>
  );
}
