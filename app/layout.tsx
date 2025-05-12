// app/layout.tsx
import './globals.css';
import Navbar from '../components/ui/Navbar';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Chu Designs',
  description: '個人品牌視覺設計作品集',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body id="__next" className="flex flex-col min-h-screen bg-white text-black">
        {/* 頁首導覽：在所有裝置上皆顯示 */}
        <Navbar />

        {/* 主內容：撐滿剩餘空間，Footer 由各頁面自行貼底 */}
        <main className="flex-1 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
