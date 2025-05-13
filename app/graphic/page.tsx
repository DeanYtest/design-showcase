'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '../FooterDark';

const rawImages = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
];
const SLOT_COUNT = 12;

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const slots = Array.from({ length: SLOT_COUNT }, (_, i) => i);

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* 桌面圓環 + 標題 */}
      <div className="hidden md:block absolute inset-0 flex items-center justify-center">
        {slots.map((i) => {
          const angle = (360 / SLOT_COUNT) * i;
          const radius = 200;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
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
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <GraphicItem src={src} />
              </motion.div>
            </div>
          );
        })}

        {/* 圓心標題 */}
        <h1 className="absolute text-4xl font-bold">平面設計</h1>
      </div>

      {/* 手機半圓 + 標題 */}
      <div className="md:hidden relative w-full h-96 flex items-end justify-center pt-8">
        {slots.map((i) => {
          const angle = -90 + (180 / (SLOT_COUNT - 1)) * i;
          const radius = 120;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = -Math.sin(rad) * radius;
          const src = rawImages[i % rawImages.length];
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-20 cursor-pointer"
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

        {/* 手機版圓心標題 */}
        <h1 className="absolute text-2xl font-bold">平面設計</h1>
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
              這裡可以放作品的詳細說明，例如設計理念、使用工具與發想過程等。
            </p>
          </>
        )}
      </Modal>

      <FooterDark />
    </div>
  );
}
