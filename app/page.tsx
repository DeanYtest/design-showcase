// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import HomeCarousel from '../components/HomeCarousel';
import WorkSection from './WorkSection';

// HeroSection 动态加载，保留原有打字机等效果
const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center">載入中…</div>,
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero 区块 */}
      <HeroSection />

      {/* 2. 走马灯 (纯黑背景、3 张卡＋箭头＋自动轮播) */}
      <div className="bg-black">
        <HomeCarousel />
      </div>

      {/* 3. 作品展示 (五大类网格淡入) */}
      <WorkSection category="all" />
    </>
  );
}
