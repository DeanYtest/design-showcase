'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

interface WorkSectionProps {
  category: string;
}

const categories = [
  {
    title: 'UI',
    href: '/ui',
    images: ['/images/ui1.jpg', '/images/ui2.jpg', '/images/ui3.jpg'],
  },
  {
    title: 'Logo',
    href: '/logo',
    images: ['/images/logo1.jpg', '/images/logo2.jpg', '/images/logo3.jpg'],
  },
  {
    title: 'Graphic',
    href: '/graphic',
    images: ['/images/graphic1.jpg', '/images/graphic2.jpg', '/images/graphic3.jpg'],
  },
  {
    title: 'Packaging',
    href: '/packaging',
    images: ['/images/packaging1.jpg', '/images/packaging2.jpg', '/images/packaging3.jpg'],
  },
  {
    title: 'Illustration',
    href: '/illustration',
    images: ['/images/ill1.jpg', '/images/ill2.jpg', '/images/ill3.jpg'],
  },
];

export default function WorkSection({ category }: WorkSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // 每個分類目前顯示的圖片索引
  const [currentIdx, setCurrentIdx] = useState<number[]>(
    categories.map(() => 0)
  );

  // 自動輪播：每個分類各自定時切換
  useEffect(() => {
    const timers = categories.map((cat, i) =>
      window.setInterval(() => {
        setCurrentIdx((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % cat.images.length;
          return next;
        });
      }, 3000)
    );
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative container mx-auto py-12">
      {/* 無障礙隱藏標題 */}
      <h2 className="sr-only">{category} 作品切換區</h2>

      {/* 左箭頭 */}
      <button
        onClick={() => scroll(-320)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ‹
      </button>

      {/* 水平滾動容器 */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
      >
        {categories.map((cat, i) => (
          <Link key={cat.title} href={cat.href}>
            <a className="group flex-shrink-0 w-80 relative">
              {/* 圖片輪播區 */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={cat.images[currentIdx[i]]}
                  alt={`${cat.title} ${currentIdx[i] + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {/* 懸停顯示分類名稱 */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl">{cat.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* 右箭頭 */}
      <button
        onClick={() => scroll(320)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ›
      </button>
    </section>
  );
}
