// app/ui/page.tsx
import Carousel from '../../components/ui/Carousel'
import WorkSection from '../WorkSection'
import FooterDark from '../FooterDark'

export const metadata = {
  title: 'UI 設計',
  description: 'Chu｜UI 設計作品集',
}

export default function UIPage() {
  const images = [
    '/images/ui1.jpg',
    '/images/ui2.jpg',
    '/images/ui3.jpg',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              UI 設計
            </h1>
            <div className="mb-8">
              <Carousel images={images} />
            </div>
            <WorkSection category="ui" />
          </div>
        </section>
      </main>
      <FooterDark />
    </div>
  )
}
