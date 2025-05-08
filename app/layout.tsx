// app/layout.tsx
import './globals.css'
import Navbar from '../components/ui/Navbar'
import WaveTransition from '../components/ui/WaveTransition'
import Footer from './Footer'

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="relative min-h-screen bg-black text-white antialiased">
        {/* 1. Navbar - 固定在最上層 */}
        <Navbar />

        {/* 2. 全站背景 - 漸層 + 波浪 (z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="animated-gradient absolute inset-0" />
          <div className="absolute bottom-0 left-0 w-full">
            <WaveTransition />
          </div>
        </div>

        {/* 3. 主區域 (z-10) */}
        <main className="relative z-10 pt-16">
          {children}
        </main>

        {/* 4. Footer (z-10) */}
        <Footer />
      </body>
    </html>
  )
}
