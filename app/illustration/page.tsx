// app/illustration/page.tsx
import Navbar from '../../components/ui/Navbar'
import Footer from '../Footer'
import Carousel from '../../components/ui/Carousel'
import WorkSection from '../WorkSection'

export const metadata = {
  title: '手繪',
  description: '小設｜手繪作品集',
}

export default function IllustrationPage() {
  const images = ['/images/ill1.jpg', '/images/ill2.jpg', '/images/ill3.jpg']

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">手繪</h1>
            <Carousel images={images} />
            <WorkSection category="illustration" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
