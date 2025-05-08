// components/HomeCarousel.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { title: 'UI',           href: '/ui',           images: ['/images/ui1.jpg','/images/ui2.jpg','/images/ui3.jpg'] },
  { title: 'Logo',         href: '/logo',         images: ['/images/logo1.jpg','/images/logo2.jpg','/images/logo3.jpg'] },
  { title: 'Graphic',      href: '/graphic',      images: ['/images/graphic1.jpg','/images/graphic2.jpg','/images/graphic3.jpg'] },
  { title: 'Packaging',    href: '/packaging',    images: ['/images/pack1.jpg','/images/pack2.jpg','/images/pack3.jpg'] },
  { title: 'Illustration', href: '/illustration', images: ['/images/ill1.jpg','/images/ill2.jpg','/images/ill3.jpg'] },
];

export default function HomeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idxs, setIdxs] = useState<number[]>(categories.map(() => 0));

  // 自动轮播
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

  const CARD_WIDTH = 336; // 320px card + 16px gap
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? CARD_WIDTH : -CARD_WIDTH,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-black py-12">
      <h2 className="sr-only">作品分類走馬燈</h2>

      {/* 箭頭 + 滾動區的包裹器，方便定位 */}
      <div className="relative max-w-[calc(336px*3)] mx-auto">
        {/* 左箭頭 */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
        >
          ‹
        </button>

        {/* 卡片橫向滾動容器：只看得到三張 */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {categories.map((cat, i) => (
            <Link key={cat.title} href={cat.href}>
              <a className="group flex-shrink-0 w-80 relative">
                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={cat.images[idxs[i]]}
                    alt={`${cat.title} ${idxs[i] + 1}`}
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

        {/* 右箭頭 */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
