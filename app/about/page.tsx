// app/about/page.tsx

import AnimatedAvatar from '../../components/AnimatedAvatar';
import Link from 'next/link';
import styles from './about.module.scss';

export const metadata = {
  title: 'About — Chu 設計師',
  description: '關於 Chu 的背景與專長。',
};

const METEOR_COUNT = 30;

export default function AboutPage() {
  return (
    <div className="relative bg-black text-white py-8 min-h-screen overflow-hidden">
      {/* About 專屬 七彩流星雨 背景 */}
      <div className={styles.aboutBackground}>
        {Array.from({ length: METEOR_COUNT }).map((_, i) => (
          <div key={i} className={`meteor-${i + 1}`} />
        ))}
      </div>

      {/* 內容卡片 */}
      <div className="container mx-auto px-4 bg-black bg-opacity-60 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-12 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedAvatar />

          <div>
            <h1 className="text-5xl font-bold text-purple-400 mb-4">關於 Chu</h1>
            <p className="max-w-xl text-lg text-gray-200 mb-4 leading-relaxed">
              嗨，我是 Chu 設計師，一位專注於平面與品牌識別的創意人才。<br />
              我喜歡將極簡與色彩結合，為品牌注入故事與溫度。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Logo & VI 系統設計</li>
              <li>平面印刷：海報、名片、包裝</li>
              <li>數位插畫 & 社群素材</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
            >
              一起合作
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
