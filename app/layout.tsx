// app/layout.tsx
import './globals.css'
import WaveTransition from '../components/ui/WaveTransition'

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
      <body className="relative bg-black text-white overflow-hidden">
        {/* 漸層動畫背景 */}
        <div className="animated-gradient" />
        {/* 波浪底圖 */}
        <WaveTransition />

        {/* 下面會插入每個 page 的內容 */}
        {children}
      </body>
    </html>
  )
}
