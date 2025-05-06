// app/graphic/page.tsx
import Navbar from '../../components/ui/Navbar'
import Footer from '../Footer'
import Carousel from '../../components/ui/Carousel'
import WorkSection from '../WorkSection'

export const metadata = {
  title: '平面設計',
  description: '小設｜平面設計作品集',
}

export default function GraphicPage() {
  const images = [
    '/images/graphic1.jpg',
    '/images/graphic2.jpg',
    '/images/graphic3.jpg',
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">平面設計</h1>
            <Carousel images={images} />
            <WorkSection category="graphic" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
