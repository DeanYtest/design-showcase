'use client';
import TiltCard from './TiltCard';

const categories = [
  { title: 'Graphic', href: '/graphic', img: '/images/graphic2.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill2.jpg' },
  { title: 'Logo', href: '/logo', img: '/images/logo2.jpg' },
  // …其他
];

export default function CategorySection() {
  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <TiltCard
            key={i}
            href={cat.href}
            imgSrc={cat.img}
            title={cat.title}
          />
        ))}
      </div>
    </section>
  );
}
