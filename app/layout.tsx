// app/layout.tsx
import './globals.css'
import Navbar from '../components/ui/Navbar'
import WaveTransition from '../components/ui/WaveTransition'
import Footer from '../components/Footer'

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
        {/* 1. 全站固定顯示的 Navbar */}
        <Navbar />

        {/* 2. 漸變動態背景 */}
        <div className="animated-gradient absolute inset-0 pointer-events-none" />

        {/* 3. 波浪底圖 */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <WaveTransition />
        </div>

        {/* 4. 真正的頁面內容 */}
        <main className="relative pt-16">
          {children}
        </main>

        {/* 5. 全站 Footer */}
        <Footer />
      </body>
    </html>
  )
}
