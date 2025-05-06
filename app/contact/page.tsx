// app/contact/page.tsx
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import ContactSection from '../ContactSection'

export const metadata = {
  title: 'Contact',
  description: '小設｜聯絡我',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-black text-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
