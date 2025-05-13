// app/graphic/page.tsx
'use client';

import { useState } from 'react';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '../FooterDark';

const rawImages = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
];
const SLOT_COUNT = 12;
const slots = Array.from({ length: SLOT_COUNT }, (_, i) => i);

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* 桌面版：純 CSS 緩慢旋轉的圓環 */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div
          className="
            relative 
            w-80 h-80 
            origin-center 
            animate-[spin_60s_linear_infinite]
          "
        >
          {slots.map((i) => {
            const angle = (360 / SLOT_COUNT) * i;
            const radius = 120;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const src = rawImages[i % rawImages.length];
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-16 origin-center cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                onClick={() => setSelectedImage(src)}
              >
                <GraphicItem src={src} />
              </div>
            );
          })}
          <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            平面設計
          </h1>
        </div>
      </div>

      {/* 手機版：半圓排列 + 下方標題 */}
      <div className="md:hidden flex flex-1 items-center justify-center relative">
        <div className="relative w-60 h-36">
          {slots.map((i) => {
            const angle = -90 + (180 / (SLOT_COUNT - 1)) * i;
            const radius = 80;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = -Math.sin(rad) * radius;
            const src = rawImages[i % rawImages.length];
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-10 h-14 origin-center cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
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

      {/* Footer 固定頁尾 */}
      <FooterDark />
    </div>
  );
}
