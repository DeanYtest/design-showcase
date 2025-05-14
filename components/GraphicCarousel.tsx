// components/GraphicCarousel.tsx
'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

interface GraphicCarouselProps {
  onSelect: (img: string) => void;
}

// 使用重複圖片作為示例，實際可替換為不同檔案
const images: string[] = Array.from({ length: 20 }, (_, i) => `/images/graphic/image${(i % 5) + 1}.jpg`);

export default function GraphicCarousel({ onSelect }: GraphicCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // 動態量測容器尺寸
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

  // 半徑取容器最小邊的 40%
  const radius = Math.min(size.width, size.height) * 0.4;

  // 自動旋轉角度
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRotation((r) => r + 0.1), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 整圈旋轉容器 */}
      <motion.div
        animate={{ rotate: rotation }}
        style={{ transformOrigin: 'center center' }}
        className="absolute inset-0"
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
              <GraphicItem src={img} />
            </div>
          );
        })}
      </motion.div>

      {/* 中央文字 */}
      <div className="absolute text-center text-gray-800 text-2xl font-semibold">
        平面設計
      </div>
    </div>
  );
}