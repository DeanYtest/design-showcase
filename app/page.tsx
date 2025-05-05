import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans p-8 space-y-20">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}