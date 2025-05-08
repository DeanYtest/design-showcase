// app/page.tsx
'use client';

import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkSection from './WorkSection';

export default function HomePage() {
  return (
    <>
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. 黑底走馬燈：3 張卡 + 箭頭 + 自動輪播 */}
      <section className="bg-black py-12">
        <HomeCarousel />
      </section>

      {/* 3. 作品淡入展示 (五大類) */}
      <WorkSection category="all" />
    </>
  );
}
