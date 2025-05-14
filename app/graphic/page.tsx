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
      {/* 圓環互動區域 */}
      <div className="flex-1 w-full">
        <GraphicCarousel onSelect={setSelectedImage} />
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
