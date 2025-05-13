'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '@/app/FooterDark';

const rawImages = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
];

const SLOT_COUNT = 12; // 圓環／半圓上的總格數

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 生成 0..SLOT_COUNT-1 的索引陣列
  const slots = Array.from({ length: SLOT_COUNT }, (_, i) => i);

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* 左上角標題 */}
      <h1 className="absolute top-4 left-4 text-3xl font-bold">平面設計</h1>

      {/* 圖片環 */}
      <div className="hidden md:block relative w-full h-screen">
        {slots.map((i) => {
          const angle = (360 / SLOT_COUNT) * i;
          // 半徑：可依容器調整
          const radius = 200;
          // 將角度轉為弧度
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          // 圖片索引：重複使用 rawImages
          const src = rawImages[i % rawImages.length];
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-32 h-40 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transformOrigin: 'center',
              }}
              onClick={() => setSelectedImage(src)}
            >
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <GraphicItem src={src} />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* 手機版半圓 */}
      <div className="md:hidden relative w-full h-96">
        {slots.map((i) => {
          // 半圓：-90° 到 +90°
          const angle = -90 + (180 / (SLOT_COUNT - 1)) * i;
          const radius = 120;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = -Math.sin(rad) * radius; // 向上為負
          const src = rawImages[i % rawImages.length];
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-20 h-28 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transformOrigin: 'center',
              }}
              onClick={() => setSelectedImage(src)}
            >
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <GraphicItem src={src} />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title="作品介紹"
      >
        {selectedImage && (
          <>
            <img
              src={selectedImage}
              alt="Selected Work"
              className="rounded-lg object-cover mx-auto max-h-80"
            />
            <p className="mt-4 text-left">
              這裡可以放作品的詳細說明，比如設計概念、使用工具、發想過程等。
            </p>
          </>
        )}
      </Modal>

      <FooterDark />
    </div>
  );
}
