'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/ui/Modal';
import FooterDark from '@/app/FooterDark'; // 請確認正確路徑

const images: string[] = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
  // 根據需求增減圖片
];

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 pt-16">
        <section className="py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            平面設計
          </h1>

          {/* 桌面版：環狀旋轉 */}
          <div className="hidden md:flex relative items-center justify-center w-full h-[600px]">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="absolute cursor-pointer"
                style={{ transformOrigin: 'center' }}
                onClick={() => setSelectedImage(img)}
              >
                <motion.div
                  initial={{
                    rotate: (360 / images.length) * idx,
                    translateY: -200,
                  }}
                  animate={{
                    rotate: 360 + (360 / images.length) * idx,
                  }}
                  transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <GraphicItem src={img} />
                </motion.div>
              </div>
            ))}
          </div>

          {/* 手機版：左右滑動 */}
          <div className="md:hidden overflow-x-scroll flex space-x-4 px-4 scrollbar-hide">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <GraphicItem src={img} />
              </div>
            ))}
          </div>

          {/* 點擊後的 Modal */}
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
                  className="rounded-lg object-cover mx-auto"
                />
                <p className="mt-4 text-left">
                  這裡放你對該作品的詳細說明，例如：設計理念、使用工具、發想過程等等。
                </p>
              </>
            )}
          </Modal>
        </section>
      </main>

      <FooterDark />
    </div>
  );
}
