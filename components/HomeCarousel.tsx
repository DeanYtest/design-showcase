// components/HomeCarousel.tsx
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { title: 'UI',           href: '/ui',           img: '/images/ui1.jpg' },
  { title: 'Logo',         href: '/logo',         img: '/images/logo1.jpg' },
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic1.jpg' },
  { title: 'Packaging',    href: '/packaging',    img: '/images/pack1.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg' },
];

export default function HomeCarousel() {
  const VISIBLE = 3;
  const MAX_PAGE = categories.length - VISIBLE; // 5 - 3 = 2
  const [page, setPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 每张卡片 320px + 间距 16px = 336px
  const STEP = 320 + 16;

  const goPrev = () => {
    const next = Math.max(0, page - 1);
    setPage(next);
    carouselRef.current?.scrollTo({
      left: next * STEP,
      behavior: 'smooth',
    });
  };
  const goNext = () => {
    const next = Math.min(MAX_PAGE, page + 1);
    setPage(next);
    carouselRef.current?.scrollTo({
      left: next * STEP,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative bg-black py-12">
      <h2 className="sr-only">作品分類走馬燈</h2>

      <div className="relative mx-auto w-[calc(320px*3+16*2)] overflow-hidden">
        {/* 左箭頭 */}
        <button
          onClick={goPrev}
          disabled={page === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full disabled:bg-opacity-25 transition"
        >
          ‹
        </button>

        {/* 滑動區 */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2"
        >
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href}>
              <a className="flex-shrink-0 w-[320px] h-[200px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.title}
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* 右箭頭 */}
        <button
          onClick={goNext}
          disabled={page === MAX_PAGE}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full disabled:bg-opacity-25 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
