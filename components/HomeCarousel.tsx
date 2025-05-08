// components/HomeCarousel.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    title: 'UI',
    href: '/ui',
    images: ['/images/ui1.jpg','/images/ui2.jpg','/images/ui3.jpg'],
  },
  {
    title: 'Logo',
    href: '/logo',
    images: ['/images/logo1.jpg','/images/logo2.jpg','/images/logo3.jpg'],
  },
  {
    title: 'Graphic',
    href: '/graphic',
    images: ['/images/graphic1.jpg','/images/graphic2.jpg','/images/graphic3.jpg'],
  },
  {
    title: 'Packaging',
    href: '/packaging',
    images: ['/images/pack1.jpg','/images/pack2.jpg','/images/pack3.jpg'],
  },
  {
    title: 'Illustration',
    href: '/illustration',
    images: ['/images/ill1.jpg','/images/ill2.jpg','/images/ill3.jpg'],
  },
];

export default function HomeCarousel() {
  // ————— 走馬燈部份 —————
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idxs, setIdxs] = useState<number[]>(categories.map(() => 0));

  useEffect(() => {
    const timers = categories.map((_, i) =>
      window.setInterval(() => {
        setIdxs(prev => {
          const next = [...prev];
          next[i] = (next[i] + 1) % categories[i].images.length;
          return next;
        });
      }, 3000)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  const DELTA = 336; // 320px card + 16px gap
  const scroll = (dir: 'left'|'right') => {
    scrollRef.current?.scrollBy({
      left: dir==='right'? DELTA : -DELTA,
      behavior: 'smooth',
    });
  };

  // ————— 網格淡入部份 —————
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    if (inView) {
      categories.forEach((_, i) =>
        setTimeout(() => setVisible(v => [...v, i]), i * 150)
      );
    }
  }, [inView]);

  return (
    <section className="bg-black py-12">
      <h2 className="sr-only">作品走馬燈與展示</h2>

      {/* ==== 走馬燈 ==== */}
      <div className="relative max-w-[calc(336px*3)] mx-auto mb-12">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
        >
          ‹
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2"
        >
          {categories.map((cat, i) => (
            <Link key={cat.title} href={cat.href}>
              <a className="group flex-shrink-0 w-80 relative">
                <div className="relative w-full h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={cat.images[idxs[i]]}
                    alt={`${cat.title} ${idxs[i]+1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-lg">{cat.title}</h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
        >
          ›
        </button>
      </div>

      {/* ==== 網格淡入展示 ==== */}
      <div
        ref={ref}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat, i) => (
          <Link key={i} href={cat.href}>
            <a
              className={`group relative overflow-hidden rounded-xl shadow-lg ${
                visible.includes(i) ? `fade-up delay-${i}` : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-64">
                <Image
                  src={cat.images[0]}
                  alt={cat.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl">{cat.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
