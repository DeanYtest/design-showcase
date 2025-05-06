// app/layout.tsx
import './globals.css';

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
