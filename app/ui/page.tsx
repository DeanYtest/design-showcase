// app/ui/page.tsx
import Carousel from '../../components/ui/Carousel';
import WorkSection from '../WorkSection';
import FooterDark from '../FooterDark';

export const metadata = {
  title: 'UI 設計',
  description: '小設｜UI 設計作品集',
};

export default function UIPage() {
  const images = ['/images/ui1.jpg', '/images/ui2.jpg', '/images/ui3.jpg'];

  return (
    <>
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">UI 設計</h1>
            <Carousel images={images} />
            <WorkSection category="ui" />
          </div>
        </section>
      </main>
      <FooterDark />
    </>
  );
}
