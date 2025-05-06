// app/logo/page.tsx
import Carousel from '../../components/ui/Carousel'
import WorkSection from '../WorkSection'
import Footer from '../Footer'

export const metadata = {
  title: 'LOGO 設計',
  description: '小設｜LOGO 設計作品集',
}

export default function LogoPage() {
  const images = ['/images/logo1.jpg', '/images/logo2.jpg', '/images/logo3.jpg']

  return (
    <>
      <main className="pt-16 bg-black text-white">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">LOGO 設計</h1>
            <Carousel images={images} />
            <WorkSection category="logo" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
