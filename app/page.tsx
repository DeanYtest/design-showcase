// app/page.tsx
'use client';

import HeroSection from './HeroSection';           // 位於 app/HeroSection.tsx
import HomeCarousel from '../components/HomeCarousel';  // 位於 components/HomeCarousel.tsx
import WorkSection from './WorkSection';           // 位於 app/WorkSection.tsx

export default function HomePage() {
  return (
    <>
      {/* 1. Hero（打字機、漸層背景由 layout 管理） */}
      <HeroSection />

      {/* 2. 首頁走馬燈：3 張卡＋左右箭頭＋自動輪播 */}
      <HomeCarousel />

      {/* 3. 作品展示區（原本的 WorkSection） */}
      <WorkSection category="all" />

    </>
  );
}
