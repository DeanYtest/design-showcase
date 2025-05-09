// app/layout.tsx
+import './globals.css'
+import Navbar from '../components/ui/Navbar'
+import WaveTransition from '../components/ui/WaveTransition'  // ← 保留底部波浪
+import Footer from './Footer'

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
        {/* Navbar */}
        <Navbar />

        {/* 主內容 (z-10 確保在背景之上) */}
        <main className="relative z-10 pb-16">  {/* ← 新增 pb-16 */}
          {children}
        </main>
        {/* 底部波浪過渡，保留 */}
+       <WaveTransition />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
