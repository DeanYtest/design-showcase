// app/contact/page.tsx
import ContactSection from '../ContactSection'
import FooterDark from '../FooterDark'

export const metadata = {
  title: 'Contact',
  description: 'Chu｜聯絡我',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 聯絡表單 */}
        <ContactSection />
      </main>
      {/* 黑底白字 Footer */}
      <FooterDark />
    </div>
  )
}
