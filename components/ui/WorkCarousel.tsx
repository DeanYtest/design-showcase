'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const allWorks = [
  { title: 'UI',           href: '/ui',           img: '/images/ui1.jpg' },
  { title: 'Logo',         href: '/logo',         img: '/images/logo1.jpg' },
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic1.jpg' },
  { title: 'Packaging',    href: '/packaging',    img: '/images/pack1.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg' },
];

export default function WorkCarousel() {
  // 當前第一張的 index
  const [start, setStart] = useState(0);
  // 最多可以滑到 start = allWorks.length - visibleCount
  const visibleCount = 3;
  const maxStart = allWorks.length - visibleCount;

  const prev = () => setStart((s) => Math.max(s - 1, 0));
  const next = () => setStart((s) => Math.min(s + 1, maxStart));

  // 取出當前要顯示的那 3 張
  const visibleWorks = allWorks.slice(start, start + visibleCount);

  return (
    <section className="container mx-auto py-12 relative">
      <h2 className="text-3xl font-bold mb-6">所有作品</h2>

      {/* 左箭頭 */}
      {start > 0 && (
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100 transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* 作品列表 */}
      <div className="flex overflow-hidden gap-6">
        {visibleWorks.map((work, i) => (
          <Link key={start + i} href={work.href} passHref>
            <a className="block flex-shrink-0 w-[calc((100%-_2*1.5rem)/3)] overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-[3/2]">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <h3 className="text-white text-center mt-2">{work.title}</h3>
            </a>
          </Link>
        ))}
      </div>

      {/* 右箭頭 */}
      {start < maxStart && (
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </section>
  );
}
