'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MotionDiv from '../components/ui/MotionDiv';

const works = [
  { title: 'Project A', href: '/graphic', img: '/images/graphic2.jpg' },
  { title: 'Project B', href: '/illustration', img: '/images/ill2.jpg' },
  { title: 'Project C', href: '/logo', img: '/images/logo2.jpg' },
];

export default function WorkSection({ category }: { category: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 bg-black z-20"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        {category === 'graphic'
          ? '平面設計'
          : category === 'illustration'
          ? '插畫'
          : category === 'ui'
          ? 'UI 設計'
          : '包裝設計'}
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works
          .filter((p) => p.href.includes(category))
          .map((work, idx) => (
            <MotionDiv
              key={idx}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="overflow-hidden rounded-lg bg-white"
            >
              <Link href={work.href} className="block group">
                <div className="relative h-48">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center text-black group-hover:text-primary transition">
                  {work.title}
                </h3>
              </Link>
            </MotionDiv>
          ))}
      </div>
    </section>
  );
}
