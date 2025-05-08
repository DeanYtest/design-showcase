'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const works = [
  { title: 'Project A', href: '/graphic', img: '/images/graphic2.jpg' },
  { title: 'Project B', href: '/illustration', img: '/images/ill2.jpg' },
  { title: 'Project C', href: '/logo', img: '/images/logo2.jpg' },
  // ...依專案需求自行新增
];

export default function WorkSection({ category }: { category: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      works.forEach((_, i) =>
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * 150) // 每個卡片延遲 150ms
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => {
          const isVisible = visibleItems.includes(index);
          return (
            <Link key={index} href={work.href}>
              <a
                className={`group relative overflow-hidden rounded-xl shadow-lg ${
                  isVisible ? `fade-up delay-${index}` : ''
                }`}
              >
                <div className="relative w-full h-64">
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
    </section>
  );
}
