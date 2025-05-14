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

  // 量測容器尺寸
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

  // 圓半徑 取容器最小邊的 45%
  const radius = Math.min(size.width, size.height) * 0.45;
  const [rotation, setRotation] = useState(0);

  // 自動旋轉
  useEffect(() => {
    const id = setInterval(() => setRotation(r => r + 0.1), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 圓環外框，正方形容器 */}
      <div className="relative" style={{ width: size.width, height: size.height }}>
        {/* 旋轉容器，只含 transform 屬性，不含定位 */}
        <motion.div
          animate={{ rotate: rotation }}
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: 'center center'
          }}
        >
          {/* 圖片定位 */}
          {images.map((img, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute left-[50%] top-[50%] cursor-pointer"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                }}
                onClick={() => onSelect(img)}
              >
                <GraphicItem src={img} />
              </div>
            );
          })}
        </motion.div>

        {/* 中央文字，保持靜態 */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 text-2xl font-semibold">
          平面設計
        </div>
      </div>
    </div>
  );
}
