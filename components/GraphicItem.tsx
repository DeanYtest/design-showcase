'use client';

import Image from 'next/image';

interface GraphicItemProps {
  src: string;
  className?: string;
}

export default function GraphicItem({ src, className = '' }: GraphicItemProps) {
  return (
    <div className={`w-24 h-32 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}>
      <Image
        src={src}
        alt="Graphic Work"
        fill
        className="object-cover"
      />
    </div>
  );
}
