// app/WorkSection.tsx

const projects = [
  '作品名稱 1',
  '作品名稱 2',
  '作品名稱 3',
  '作品名稱 4',
  '作品名稱 5',
  '作品名稱 6',
];

export default function WorkSection() {
  return (
    <section id="作品展示" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-semibold mb-8 text-center text-white">
          作品展示
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((title, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={`/images/portfolio${idx + 1}.jpg`}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-white text-sm">簡短描述此作品重點。</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
