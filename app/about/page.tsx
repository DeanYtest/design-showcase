import AnimatedAvatar from '../../components/AnimatedAvatar';
import Link from 'next/link';

export const metadata = {
  title: 'About — Chu 設計師',
  description: '關於 Chu 的背景與專長。',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white py-16 overflow-hidden">
      {/* 流金色網狀線條 */}
      <div className="net-line horizontal top-1/4 left-1/2 transform -translate-x-1/2"></div>
      <div className="net-line vertical left-1/4 top-1/2 transform -translate-y-1/2"></div>
      <div className="net-line horizontal bottom-1/4 right-1/2 transform translate-x-1/2"></div>
      <div className="net-line vertical right-1/4 bottom-1/2 transform translate-y-1/2"></div>

      <div className="container mx-auto px-4 bg-white bg-opacity-10 rounded-3xl shadow-xl p-8 md:p-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 動畫浮動方形大頭貼 */}
          <AnimatedAvatar />

          {/* 自我介紹 */}
          <div>
            <h1 className="text-5xl font-bold text-purple-400 mb-4">關於 Chu</h1>
            <p className="max-w-xl text-lg text-gray-200 mb-4 leading-relaxed">
              嗨，我是 Chu 設計師，一位專注於平面與品牌識別的創意人才。
              我喜歡將極簡與色彩結合，為品牌注入故事與溫度。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Logo & VI 系統設計</li>
              <li>平面印刷：海報、名片、包裝</li>
              <li>數位插畫 & 社群素材</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition"
            >
              一起合作
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
