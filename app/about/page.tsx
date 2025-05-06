// app/about/page.tsx
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import AboutSection from '../AboutSection'

export const metadata = {
  title: 'About Me',
  description: '小設｜關於我',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-black text-white">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
