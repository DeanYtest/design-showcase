'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// 背景圖陣列，可自行增減
const backgrounds = [
  '/images/hero-gradient.png', // 漸層灰
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

export default function HeroSection() {
  // parallax scroll
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 背景輪播
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx((i) => (i + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(iv);
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
      {/* 動態視差 + 輪播背景 */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src={backgrounds[idx]}
          alt={`背景圖 ${idx + 1}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

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
