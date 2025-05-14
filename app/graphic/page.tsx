// app/graphic/page.tsx
'use client';

import { useState } from 'react';
import GraphicCarousel from '@/components/GraphicCarousel';
import Modal from '@/components/ui/Modal';
import FooterDark from '@/app/FooterDark';

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* 桌機 & 平板：完整圓環，不使用 CSS spin 類 */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <GraphicCarousel onSelect={setSelectedImage} />
      </div>

      {/* 手機：半圓排列 + 標題 */}
      <div className="md:hidden flex flex-1 items-center justify-center relative">
        {/* 半圓示例，如果需，亦可改為 GraphicCarousel props pattern */}
        <div className="relative w-60 h-36">
          {/* ...手機版半圓排列程式碼... */}
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
