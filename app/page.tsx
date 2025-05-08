// app/page.tsx
import HeroSection from '@/components/HeroSection';
import HomeCarousel from '@/components/HomeCarousel';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* 1. 漸層背景：animated-gradient 在 globals.css 已定義 */}
      <div className="animated-gradient" />

      {/* 2. 波浪圖案：wave-bg 在 globals.css 已定義 */}
      <div className="wave-bg absolute bottom-0 left-0 w-full" />

      {/* 3. Hero 區塊（保留所有原本邏輯與樣式） */}
      <HeroSection />

      {/* 4. 首頁走馬燈（左右箭頭 + 輪番播放） */}
      <HomeCarousel />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
