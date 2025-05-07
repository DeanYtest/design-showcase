'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import drawingAnimation from '../public/animations/drawing.json';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 flex flex-col md:flex-row items-center transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full md:w-1/2">
        <Lottie animationData={drawingAnimation} loop={false} />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          我是一名視覺設計師，擁有多年品牌規劃與數位設計經驗，擅長結合美學與
          使用者體驗，創造令人印象深刻的作品。
        </p>
      </div>
    </section>
  );
}