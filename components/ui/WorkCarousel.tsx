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
  const [index, setIndex] = useState(0);
  const maxIndex = allWorks.length - 3; // 最多滑動到倒數第3張
  
  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < maxIndex && setIndex(index + 1);

  // 當前要顯示的三張
  const visible = allWorks.slice(index, index + 3);

  return (
    <section className="relative container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">所有作品</h2>

      {/* 左箭頭 */}
      <button
        onClick={prev}
        disabled={index === 0}
        className={`
          absolute top-1/2 -translate-y-1/2 left-0
          p-2 rounded-full
          bg-white bg-opacity-50 hover:bg-opacity-80
          disabled:opacity-30 disabled:cursor-not-allowed
          z-10
        `}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* 圖片區 */}
      <div className="grid grid-cols-3 gap-6">
        {visible.map((work, i) => (
          <Link key={i} href={work.href}>
            <a className="block overflow-hidden rounded-lg shadow-lg">
              {/* 固定高度，確保圖片不會太小 */}
              <div className="relative w-full h-64">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="mt-2 text-center text-white">{work.title}</div>
            </a>
          </Link>
        ))}
      </div>

      {/* 右箭頭 */}
      <button
        onClick={next}
        disabled={index === maxIndex}
        className={`
          absolute top-1/2 -translate-y-1/2 right-0
          p-2 rounded-full
          bg-white bg-opacity-50 hover:bg-opacity-80
          disabled:opacity-30 disabled:cursor-not-allowed
          z-10
        `}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </section>
  );
}
