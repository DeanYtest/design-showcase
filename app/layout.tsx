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
      <body className="relative bg-black text-white antialiased">
        {/* Navbar */}
        <Navbar />

        {/* 漸層背景：加上 -z-10 讓它跑到最底層 */}
        <div className="animated-gradient absolute inset-0 -z-10 pointer-events-none" />

        {/* 波浪底圖：同樣 -z-10 */}
        <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">
          <WaveTransition />
        </div>

        {/* 內容 */}
        <main className="relative pt-16">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
