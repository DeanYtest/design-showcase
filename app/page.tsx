// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import HomeCarousel from '../components/HomeCarousel';

const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeCarousel />
    </>
  );
}
