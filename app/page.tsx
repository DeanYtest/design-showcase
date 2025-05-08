// app/page.tsx
import dynamic from 'next/dynamic';
import WaveTransition from '../components/ui/WaveTransition';
import Footer from './Footer';

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
};

// HeroSection：客戶端動態載入
const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">載入中…</div>
  ),
});

// HomeCarousel：客戶端動態載入（取代原本的 CategorySection）
const HomeCarousel = dynamic(() => import('../components/HomeCarousel'), {
  ssr: false,
  loading: () => (
    <div className="h-48 flex items-center justify-center">走馬燈載入中…</div>
  ),
});

export default function Page() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* 漸層背景 */}
      <div className="animated-gradient" />

      {/* 波浪圖案 */}
      <div className="wave-bg absolute bottom-0 left-0 w-full" />

      {/* Hero */}
      <HeroSection />

      {/* 首頁走馬燈 */}
      <HomeCarousel />

      {/* Footer */}
      <Footer />
    </main>
  );
}
