// app/HeroSection.tsx
'use client';

import Reveal from '../components/ui/Reveal';

export default function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <h1 className="text-5xl font-display font-bold mb-4">嗨，我是小設</h1>
          <p className="text-xl mb-8">專注品牌識別、社群視覺與包裝設計</p>
          <a
            href="#作品展示"
            className="inline-block bg-accent text-accent-foreground py-3 px-8 rounded-lg font-semibold hover:bg-secondary transition"
          >
            查看作品
          </a>
        </Reveal>
      </div>
    </section>
  );
}
