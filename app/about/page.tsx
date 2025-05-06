// app/about/page.tsx
import Navbar from '../../components/ui/Navbar'
import Footer from '../Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Me — 小設計師',
  description: '關於小設計師的背景、專長與作品。',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about-me.jpg"
              alt="About Me"
              width={600}
              height={600}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">關於我</h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              嗨，我是小設，一位熱愛將故事轉化為視覺語言的平面設計師。  
              從 Logo、包裝到社群視覺，我致力於打造既美觀又有溫度的品牌體驗。  
              我相信設計不只是一種「美化」，更能透過色彩、字體與排版，傳遞品牌的價值與精神。
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              • 5 年以上品牌設計經驗  
              • 擅長 Adobe Illustrator、Photoshop、Figma  
              • 曾服務科技、餐飲、時尚等多元領域  
              • 喜歡在設計中注入故事感，讓觀者感受到溫度
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">我的專長</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '品牌識別 (Logo)', icon: '/icons/logo.svg' },
              { title: '包裝設計',       icon: '/icons/packaging.svg' },
              { title: '社群視覺',       icon: '/icons/social.svg' },
              { title: '手繪插畫',       icon: '/icons/illustration.svg' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">想一起合作嗎？</h2>
          <p className="mb-6">無論是品牌建置、活動視覺或其他設計需求，歡迎隨時與我聯繫！</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            聯絡我
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
