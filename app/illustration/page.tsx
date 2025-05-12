// app/illustration/page.tsx
import Carousel from '../../components/ui/Carousel';
import WorkSection from '../WorkSection';
import FooterDark from '../FooterDark';

export const metadata = {
  title: '插畫設計',
  description: '小設｜插畫設計作品集',
};

export default function IllustrationPage() {
  const images = ['/images/ill1.jpg', '/images/ill2.jpg', '/images/ill3.jpg'];

  return (
    <>
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">插畫設計</h1>
            <Carousel images={images} />
            <WorkSection category="illustration" />
          </div>
        </section>
      </main>
      <FooterDark />
    </>
  );
}
