// app/layout.tsx
import './globals.css';
import Navbar from '../components/ui/Navbar';

export const metadata = {
  title: 'Chu Designs',
  description: '個人品牌視覺設計作品集',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body id="__next" className="flex flex-col min-h-screen bg-white text-black">
        {/* 頁首導覽 */}
        <Navbar />

        {/* 主內容：撐滿剩餘空間 */}
        <main className="flex-1 relative z-10">
          {children}
        </main>

        {/* Footer 由各頁面自行決定貼底 */}
      </body>
    </html>
  );
}
