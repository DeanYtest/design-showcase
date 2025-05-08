// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import HomeCarousel from '../components/HomeCarousel';
import WorkSection from './WorkSection';

// 客户端动态加载 HeroSection，保留原有打字机／渐变／波浪
const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">載入中…</div>
  ),
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2+3. 走馬燈＋作品區 → 全部包在純黑背景下 */}
      <section className="bg-black">
        {/* 2. 首頁走馬燈 (3 卡 + 箭頭 + 自動輪播) */}
        <HomeCarousel />

        {/* 3. 作品淡入展示 (五種類型) */}
        <WorkSection category="all" />
      </section>
    </>
  );
}
