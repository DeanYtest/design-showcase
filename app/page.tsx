// app/page.tsx
'use client';

import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkSection from './WorkSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. 首頁走馬燈：三張卡＋左右箭頭＋自動輪播 */}
      <HomeCarousel />

      {/* 3. 作品淡入展示：五種類型 */}
      <WorkSection category="all" />
    </>
  );
}
