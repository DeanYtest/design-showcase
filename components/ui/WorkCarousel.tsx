// components/ui/WorkCarousel.tsx
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
  const N = allWorks.length;
  const prev = () => setIndex((i) => (i - 1 + N) % N);
  const next = () => setIndex((i) => (i + 1) % N);

  // Always show three items in a loop
  const visible = [0, 1, 2].map((offset) => allWorks[(index + offset) % N]);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">所有作品</h2>

        {/* 左箭頭 */}
        <button
          onClick={prev}
          className="
            absolute top-1/2 left-2 transform -translate-y-1/2
            p-2 rounded-full
            bg-white bg-opacity-50 hover:bg-opacity-80
            z-10
          "
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* 圖片區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {visible.map((work, i) => (
            <Link key={i} href={work.href} passHref>
              <a className="block overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-48 sm:h-56 md:h-64">
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
          className="
            absolute top-1/2 right-2 transform -translate-y-1/2
            p-2 rounded-full
            bg-white bg-opacity-50 hover:bg-opacity-80
            z-10
          "
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
}
