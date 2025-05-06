// app/layout.tsx
import './globals.css'   // ← 引入你的全域樣式

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal design showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">  {/* ← 語系改為繁體中文 */}
      <body>{children}</body>
    </html>
  )
}
