// components/HomeCarousel.tsx
'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { title: 'UI',           href: '/ui',           img: '/images/ui1.jpg' },
  { title: 'Logo',         href: '/logo',         img: '/images/logo1.jpg' },
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic1.jpg' },
  { title: 'Packaging',    href: '/packaging',    img: '/images/pack1.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg' },
];

export default function HomeCarousel() {
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const VISIBLE = 3;
  const maxPage = categories.length - VISIBLE;

  // 計算單步滾動寬度
  const getStep = () => {
    if (!ref.current) return 336; // fallback
    const card = ref.current.querySelector<HTMLAnchorElement>('a');
    return card ? card.offsetWidth + 16 : 336;
  };

  const go = (dir: number) => {
    const next = Math.min(maxPage, Math.max(0, page + dir));
    const step = getStep();
    ref.current?.scrollTo({ left: next * step, behavior: 'smooth' });
    setPage(next);
  };

  return (
    <section className="relative bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* 左箭頭 */}
        <button
          onClick={() => go(-1)}
          disabled={page === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-50 disabled:opacity-25 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* 滾動區 */}
        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2"
        >
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} passHref>
              <a className="group flex-shrink-0 w-[80vw] sm:w-[320px] h-[50vw] sm:h-[200px] relative rounded-xl overflow-hidden shadow-lg">
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
          onClick={() => go(1)}
          disabled={page === maxPage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-50 disabled:opacity-25 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
}
