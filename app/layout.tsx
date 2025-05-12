// app/layout.tsx
import './globals.css';
import Navbar from '../components/ui/Navbar';
import WaveTransition from '../components/ui/WaveTransition';
// import Footer from './Footer';  // <- 刪除這一行

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
      <body className="bg-white text-black">
        <Navbar />

        {/* 主內容 */}
        <main className="relative z-10 pb-16">{children}</main>

        {/* 底部波浪過渡 */}
        <WaveTransition />

        {/* 刪除 <Footer /> 由各頁面自行決定 */}
      </body>
    </html>
  );
}
