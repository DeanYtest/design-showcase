'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { AnimatePresence } from 'framer-motion';
import MotionDiv from '../components/ui/MotionDiv';

// 背景圖陣列：只有實際照片
const backgrounds = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

export default function HeroSection() {
  // 視差滾動
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 輪播背景 (8 秒切換)
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // 打字機效果
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景切換 + 視差 */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <MotionDiv
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          >
            <Image
              src={backgrounds[idx]}
              alt={`背景圖 ${idx + 1}`}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                transform: `translateY(${offsetY * 0.5}px)`,
              }}
              priority
            />
          </MotionDiv>
        </AnimatePresence>
      </div>

      {/* 動態多彩漸層遮罩 */}
      <div className="absolute inset-0 animated-gradient" />

      {/* 文字層 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {text}
          <Cursor cursorColor="#FFFFFF" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90">
          Design / Illustration / Branding
        </p>
      </div>
    </section>
  );
}
