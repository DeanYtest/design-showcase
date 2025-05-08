// app/layout.tsx
import './globals.css'
import Navbar from '../components/ui/Navbar'
import WaveTransition from '../components/ui/WaveTransition'
import Footer from './Footer'

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="relative min-h-screen bg-black text-white antialiased">
        {/* Navbar */}
        <Navbar />

        {/* 背景：漸層 + 波浪，永遠在最下層 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="animated-gradient absolute inset-0" />
          <div className="absolute bottom-0 left-0 w-full">
            <WaveTransition />
          </div>
        </div>

        {/* 主体内容 */}
        <main className="relative z-10 pt-16">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
