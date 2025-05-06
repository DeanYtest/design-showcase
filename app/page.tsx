// app/page.tsx
import HeroSection   from './HeroSection'
import AboutSection  from './AboutSection'
import WorkSection   from './WorkSection'
import ContactSection from './ContactSection'  // ← 確認就是這裡
import Footer        from './Footer'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />   {/* 會用到 app/ContactSection.tsx 的程式 */}
      <Footer />
    </main>
  )
}
