'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 圖像陣列，可依需求調整
const images = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
  // 在此新增更多圖檔路徑
];

export default function GraphicCarousel() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[var(--color-bg)]">
      {/* 固定在視口中心的環形動畫 */}
      <div
        className="fixed left-1/2 top-1/2 w-[80vmin] h-[80vmin] -translate-x-1/2 -translate-y-1/2 origin-center animate-spin-custom pointer-events-none"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      {/* Carousel 內容 */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Graphic ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
