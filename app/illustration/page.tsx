// app/illustration/page.tsx
import Carousel from '../../components/ui/Carousel'
import WorkSection from '../WorkSection'
import FooterDark from '../FooterDark'

export const metadata = {
  title: '插畫設計',
  description: 'Chu｜插畫設計作品集',
}

export default function IllustrationPage() {
  const images = [
    '/images/ill1.jpg',
    '/images/ill2.jpg',
    '/images/ill3.jpg',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 bg-black text-white pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              插畫設計
            </h1>
            <div className="mb-8">
              <Carousel images={images} />
            </div>
            <WorkSection category="illustration" />
          </div>
        </section>
      </main>
      <FooterDark />
    </div>
  )
}
