// components/GraphicCarousel.tsx
'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
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

  const radius = Math.min(size.width, size.height) * 0.4;
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
      >
        {/* 內部定位層 */}
        <div className="absolute inset-0">
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
        </div>
      </motion.div>

      {/* 中央文字 */}
      <div className="absolute text-center text-gray-800 text-2xl font-semibold">
        平面設計
      </div>
    </div>
  );
}
