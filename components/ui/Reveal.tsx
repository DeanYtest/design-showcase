'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Reveal({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        visible ? 'opacity-100 fade-up' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
