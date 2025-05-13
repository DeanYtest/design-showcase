'use client';

import { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '../FooterDark';

// 讓 MotionDiv 同時支援 className/style/onClick…和 MotionProps
type MotionDivProps = HTMLMotionProps<'div'>;
const MotionDiv = motion.div as React.FC<MotionDivProps>;

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
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* 桌面版：可緩慢旋轉的圓環 + 中央標題 */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <MotionDiv
          className="relative w-[400px] h-[400px]"
          style={{ transformOrigin: 'center' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        >
          {slots.map((i) => {
            const angle = (360 / SLOT_COUNT) * i;
            const radius = 150;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const src = rawImages[i % rawImages.length];
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-16 cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)`, transformOrigin: 'center' }}
                onClick={() => setSelectedImage(src)}
              >
                <GraphicItem src={src} />
              </div>
            );
          })}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
            平面設計
          </h1>
        </MotionDiv>
      </div>

      {/* 手機版：半圓排列 + 下方標題 */}
      <div className="md:hidden flex flex-1 items-center justify-center relative">
        <div className="relative w-[300px] h-[200px]">
          {slots.map((i) => {
            const angle = -90 + (180 / (SLOT_COUNT - 1)) * i;
            const radius = 100;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = -Math.sin(rad) * radius;
            const src = rawImages[i % rawImages.length];
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-10 h-14 cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)`, transformOrigin: 'center' }}
                onClick={() => setSelectedImage(src)}
              >
                <GraphicItem src={src} />
              </div>
            );
          })}
        </div>
        <h1 className="absolute bottom-4 text-2xl font-bold">平面設計</h1>
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

      {/* Footer 在最底端 */}
      <FooterDark />
    </div>
);
}
