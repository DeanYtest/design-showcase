'use client';
import Link from 'next/link';

interface TiltCardProps {
  href: string;
  imgSrc: string;
  title: string;
}

export default function TiltCard({ href, imgSrc, title }: TiltCardProps) {
  return (
    <Link href={href}>
      <a className="group block overflow-hidden rounded-lg shadow-lg perspective">
        <div className="relative transform transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105">
          <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-white text-lg font-medium">{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
