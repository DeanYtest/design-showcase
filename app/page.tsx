// app/page.tsx
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
