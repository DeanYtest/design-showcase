// app/packaging/page.tsx
import Carousel from '../../components/ui/Carousel';
import WorkSection from '../WorkSection';
import FooterDark from '../FooterDark';

export const metadata = {
  title: '包裝設計',
  description: '小設｜包裝設計作品集',
};

export default function PackagingPage() {
  const images = ['/images/pack1.jpg', '/images/pack2.jpg', '/images/pack3.jpg'];

  return (
    <>
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">包裝設計</h1>
            <Carousel images={images} />
            <WorkSection category="packaging" />
          </div>
        </section>
      </main>
      <FooterDark />
    </>
  );
}
