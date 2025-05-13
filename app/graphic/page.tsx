'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from '@/components/GraphicItem';
import Modal from '@/components/Modal';
import FooterDark from '../FooterDark';

const images = [
  '/images/graphic1.jpg',
  '/images/graphic2.jpg',
  '/images/graphic3.jpg',
  // 根據需求增減圖片數量
];

export default function GraphicPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 bg-black text-white pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              平面設計
            </h1>

            {/* 桌面版：環狀旋轉 */}
            <div className="hidden md:flex relative items-center justify-center w-full h-[600px]">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute cursor-pointer"
                  style={{ transformOrigin: 'center' }}
                  initial={{ rotate: (360 / images.length) * idx, translateY: -200 }}
                  animate={{ rotate: 360 + (360 / images.length) * idx }}
                  transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <GraphicItem src={img} />
                </motion.div>
              ))}
            </div>

            {/* 手機版：左右滑動 */}
            <div className="md:hidden flex overflow-hidden justify-center">
              <motion.div
                drag="x"
                dragConstraints={{ left: -150, right: 150 }}
                className="flex space-x-4"
              >
                {images.map((img, idx) => (
                  <div key={idx} onClick={() => setSelectedImage(img)}>
                    <GraphicItem src={img} />
                  </div>
                ))}
              </motion.div>
            </div>

            <Modal
              isOpen={!!selectedImage}
              onClose={() => setSelectedImage(null)}
              title="作品介紹"
            >
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected Work"
                  className="rounded-lg object-cover mx-auto"
                />
              )}
              <p className="mt-4">這裡是作品的詳細說明與介紹。</p>
            </Modal>

          </div>
        </section>
      </main>

      <FooterDark />
    </div>
  );
}
