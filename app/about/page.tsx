// app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Me — Chu',
  description: '關於Chu的背景與專長。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4 bg-white rounded-3xl shadow-xl p-8 md:p-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 照片 */}
          <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-200 animate-pulse">
            <Image
              src="/images/about-me.jpg"
              alt="Chu"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>

          {/* 自我介紹 */}
          <div>
            <h1 className="text-4xl font-bold text-purple-600 mb-4">關於我</h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              嗨，我是Chu，一位熱愛將故事轉化為視覺語言的平面設計師。從 Logo、包裝到社群視覺，
              我致力於打造既美觀又有溫度的品牌體驗。設計對我而言，不僅是美觀，更是一種傳達。
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>5 年以上品牌設計經驗</li>
              <li>精通 Illustrator、Photoshop、Figma</li>
              <li>服務過科技、餐飲、時尚等多元領域</li>
              <li>喜歡在設計中注入故事感，讓品牌更有溫度</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              想一起合作？點我聯絡
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
