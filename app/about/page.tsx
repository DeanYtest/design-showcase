// app/about/page.tsx
import AnimatedAvatar from '../../components/AnimatedAvatar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16 overflow-hidden">
      {/* 裝飾線條 */}
      <div className="absolute top-10 left-8 w-24 h-px bg-purple-300 animate-pulse"></div>
      <div className="absolute top-32 right-12 w-32 h-px bg-pink-300"></div>
      <div className="absolute bottom-20 left-16 w-20 h-px bg-indigo-300"></div>
      <div className="absolute bottom-10 right-10 h-24 w-px bg-purple-200"></div>

      <div className="container mx-auto px-4 bg-white bg-opacity-90 rounded-3xl shadow-xl p-8 md:p-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 動畫浮動頭像 */}
          <AnimatedAvatar />

          {/* 自我介紹 */}
          <div>
            <h1 className="text-4xl font-bold text-purple-600 mb-4">關於我</h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              嗨，我是 Chu 設計師，一位專注於平面與品牌識別的創意人才。
              我喜歡將簡約與色彩結合，為品牌注入故事與溫度。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Logo & VI 系統設計</li>
              <li>平面印刷：海報、名片、包裝</li>
              <li>數位插畫 & 社群素材</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              一起合作
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
