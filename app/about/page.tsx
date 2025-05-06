// app/about/page.tsx
import Footer from '../Footer'
import AboutSection from '../AboutSection'

export const metadata = {
  title: 'About Me',
  description: '小設｜關於我',
}

export default function AboutPage() {
  return (
    <>
      <main className="pt-16 bg-black text-white">
        {/* AboutSection 本身就是你寫的那段關於我內容 */}
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
