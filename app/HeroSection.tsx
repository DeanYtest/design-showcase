'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
  // parallax scroll
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // typewriter
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 視差背景 */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src="/images/hero1.jpg"
          alt="英雄背景"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* 文字層 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          {text}
          <Cursor cursorColor="#FFFFFF" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Design / Illustration / Branding
        </p>
      </div>
    </section>
  );
}
