// app/layout.tsx
import './globals.css'
import ClientProviders from '../components/ui/ClientProviders'
import Navbar from '../components/ui/Navbar'

export const metadata = {
  title: 'Chu Designs',
  description: '個人品牌視覺設計作品集',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body className="bg-black text-white antialiased">
        {/* 把 Navbar 放在 ClientProviders 內，或放在外面也可以，只要確保它能在頁面最上方渲染 */}
        <ClientProviders>
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
