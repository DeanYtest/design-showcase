// app/graphic/page.tsx
'use client';

import { useState } from 'react';
import GraphicCarousel from '@/components/GraphicCarousel';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '@/app/FooterDark';

// 手機半圓示例資料與槽位
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
      {/* 桌機及平板：完整圓環 */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <GraphicCarousel onSelect={setSelectedImage} />
      </div>

      {/* 手機：半圓排列 + 標題 */}
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

      {/* Modal 彈窗 */}
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

      {/* 固定頁尾 */}
      <FooterDark />
    </div>
  );
}