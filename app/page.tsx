// app/page.tsx
import HomeContent from '../components/ui/HomeContent'

export default function Page({
  searchParams,
}: {
  searchParams: { cat?: string }
}) {
  // 在 Server 端先解析 URL 的 ?cat=xxx
  const cat = searchParams.cat || 'ui'

  // 不同分類對應的輪播圖
  const imageMap: Record<string, string[]> = {
    ui: ['/images/ui1.jpg', '/images/ui2.jpg'],
    graphic: ['/images/graphic1.jpg', '/images/graphic2.jpg'],
    packaging: ['/images/pack1.jpg', '/images/pack2.jpg'],
    logo: ['/images/logo1.jpg', '/images/logo2.jpg'],
    illustration: ['/images/ill1.jpg', '/images/ill2.jpg'],
  }

  const images = imageMap[cat] || []

  return (
    <main className="pt-20">
      <HomeContent cat={cat} images={images} />
    </main>
  )
}
