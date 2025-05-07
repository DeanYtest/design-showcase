// app/WorkSection.tsx
interface Project {
  title: string;
  img: string;
  cat: string;
}

interface WorkSectionProps {
  category: string;
}

const allProjects: Project[] = [
  { title: '作品1', img: '/images/ui1.jpg', cat: 'ui' },
  { title: '作品2', img: '/images/ui2.jpg', cat: 'ui' },
  { title: '平面-作品1', img: '/images/graphic1.jpg', cat: 'graphic' },
  { title: '平面-作品2', img: '/images/graphic2.jpg', cat: 'graphic' },
  { title: '包裝-作品1', img: '/images/pack1.jpg', cat: 'packaging' },
  { title: '包裝-作品2', img: '/images/pack2.jpg', cat: 'packaging' },
  { title: 'LOGO-作品1', img: '/images/logo1.jpg', cat: 'logo' },
  { title: 'LOGO-作品2', img: '/images/logo2.jpg', cat: 'logo' },
  { title: '手繪-作品1', img: '/images/ill1.jpg', cat: 'illustration' },
  { title: '手繪-作品2', img: '/images/ill2.jpg', cat: 'illustration' },
  // …如果還有更多作品請繼續補齊
];

export default function WorkSection({ category }: WorkSectionProps) {
  const list = allProjects.filter((p) => p.cat === category);

  return (
    <section id="作品展示" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-semibold mb-8 text-center text-white">
          {category === 'ui'
            ? 'UI 設計'
            : category === 'graphic'
            ? '平面設計'
            : category === 'packaging'
            ? '包裝設計'
            : category === 'logo'
            ? 'LOGO 設計'
            : '手繪作品'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((p, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
