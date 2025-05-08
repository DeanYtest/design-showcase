// components/HomeCarousel.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'UI',
    href: '/ui',
    images: ['/ui1.jpg', '/ui2.jpg', '/ui3.jpg'],
  },
  {
    title: 'Logo',
    href: '/logo',
    images: ['/logo1.jpg', '/logo2.jpg', '/logo3.jpg'],
  },
  {
    title: 'Graphic',
    href: '/graphic',
    images: ['/graphic1.jpg', '/graphic2.jpg', '/graphic3.jpg'],
  },
  {
    title: 'Packaging',
    href: '/packaging',
    images: ['/packaging1.jpg', '/packaging2.jpg', '/packaging3.jpg'],
  },
  {
    title: 'Illustration',
    href: '/illustration',
    images: ['/ill1.jpg', '/ill2.jpg', '/ill3.jpg'],
  },
];

export default function HomeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState<number[]>(
    categories.map(() => 0)
  );

  // 自動輪番：每 3 秒切換同類型圖片
  useEffect(() => {
    const timers = categories.map((_, i) =>
      window.setInterval(() => {
        setCurrentIdx((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % categories[i].images.length;
          return next;
        });
      }, 3000)
    );
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  // 點箭頭時，水平滾動卡片寬度＋間距（344px）
  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative container mx-auto py-12">
      <h2 className="sr-only">作品分類走馬燈</h2>

      {/* 左箭頭 */}
      <button
        onClick={() => scroll(-344)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ‹
      </button>

      {/* 卡片橫向滾動區，只顯示三張 */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide px-8"
      >
        {categories.map((cat, i) => (
          <Link key={cat.title} href={cat.href}>
            <a className="group flex-shrink-0 w-80 relative">
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={cat.images[currentIdx[i]]}
                  alt={`${cat.title} ${currentIdx[i] + 1}`}
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
        onClick={() => scroll(344)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ›
      </button>
    </section>
  );
}
