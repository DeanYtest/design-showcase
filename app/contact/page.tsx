// app/contact/page.tsx
import Footer from '../Footer'
import ContactSection from '../ContactSection'

export const metadata = {
  title: 'Contact',
  description: '小設｜聯絡我',
}

export default function ContactPage() {
  return (
    <>
      <main className="pt-16 bg-black text-white">
        {/* ContactSection 本身就是你的聯絡表單區塊 */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
