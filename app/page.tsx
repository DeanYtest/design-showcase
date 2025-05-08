// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import HomeCarousel from '../components/HomeCarousel'; // 确认这个文件存在
import Footer from './Footer';                       // 位于 app/Footer.tsx

// HeroSection 仍由动态加载，并且只在客户端运行
const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">載入中…</div>
  ),
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* 首頁走馬燈：三張卡＋左右箭頭＋自動輪播 */}
      <HomeCarousel />

      {/* Footer（app/Footer.tsx） */}
      <Footer />
    </>
  );
}
