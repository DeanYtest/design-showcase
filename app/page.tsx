// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import HomeCarousel from '../components/HomeCarousel';
import WorkSection from './WorkSection';

const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center">載入中…</div>,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <HomeCarousel />

      <WorkSection category="all" />
    </>
  );
}
