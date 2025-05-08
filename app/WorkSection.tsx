// app/WorkSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WorkSectionProps {
  category: string;
}

const works = [
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic2.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill2.jpg'    },
  { title: 'Logo',         href: '/logo',         img: '/images/logo2.jpg'   },
  { title: 'Packaging',    href: '/packaging',    img: '/images/packaging.jpg' },
  { title: 'UI',           href: '/ui',           img: '/images/ui.jpg'      },
];

export default function WorkSection({ category }: WorkSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      works.forEach((_, i) =>
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * 150)
      );
    }
  }, [inView]);

  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="container mx-auto py-12">
      <h2 className="sr-only">{category} 作品集</h2>

      <div className="relative">
        {/* 左箭頭 */}
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
        >
          ‹
        </button>

        {/* 水平滾動容器 */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 px-8"
        >
          {works.map((work, index) => {
            const isVisible = visibleItems.includes(index);
            return (
              <Link key={work.title} href={work.href}>
                <a
                  className={`relative flex-shrink-0 w-[300px] rounded-xl shadow-lg overflow-hidden
                    ${isVisible ? `fade-up delay-${index}` : 'opacity-0'}`}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={work.img}
                      alt={work.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl">{work.title}</h3>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>

        {/* 右箭頭 */}
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
