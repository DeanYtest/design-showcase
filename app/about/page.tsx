// app/about/page.tsx
'use client'

import AnimatedAvatar from '@/components/AnimatedAvatar'
import MeteorRain from '@/components/MeteorRain'
import Link from 'next/link'
import FooterLight from '../FooterLight'

export const metadata = {
  title: 'About — Chu Designs',
  description: '關於 Chu 的背景與專長。',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 relative overflow-hidden py-8">
        {/* 七彩流星雨 */}
        <MeteorRain count={30} />

        {/* 主內容卡片 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-60 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="mb-6 md:mb-0">
              <AnimatedAvatar />
            </div>

            {/* 文本內容 */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-4">
                關於 Chu
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-prose">
                嗨，我是 Chu ，一位專注於平面與品牌識別的創意人才。<br />
                我喜歡將極簡與色彩結合，為品牌注入故事與溫度。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 max-w-prose">
                <li>Logo & VI 系統設計</li>
                <li>平面印刷：海報、名片、包裝</li>
                <li>數位插畫 & 社群素材</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-purple-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-purple-700 transition"
              >
                一起合作
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 白底黑字 Footer */}
      <FooterLight />
    </div>
  )
}
