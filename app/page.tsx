// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkCarousel from '../components/ui/WorkCarousel';
import FooterLight from './FooterLight';
import FooterDark from './FooterDark';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否为手机宽度 (<768px)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* 手机端：全页渐变背景 */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500 z-0" />
      )}

      {/* 内容容器：位于背景之上 */}
      <div className={`relative flex-1 flex flex-col ${isMobile ? 'text-white' : 'bg-white text-black'}`}>
        <main className="flex-1">
          {/* Hero：传入 disableWave 隐藏底部波浪 */}
          <HeroSection disableWave={isMobile} />

          {/* HomeCarousel：纯 horizontal scroll */}
          <HomeCarousel />

          {/* WorkCarousel 区块：手机透明底 + 黑字，桌机黑底白字 */}
          <div className={`${isMobile ? 'bg-transparent text-black' : 'bg-black text-white'} py-16`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <WorkCarousel />
            </div>
          </div>
        </main>

        {/* Footer：手机深底白字，桌机浅底黑字 */}
        {isMobile ? <FooterDark /> : <FooterLight />}
      </div>
    </div>
  );
}
