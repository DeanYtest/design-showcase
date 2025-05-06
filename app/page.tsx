// app/page.tsx
-import CategoryTabs from './components/ui/CategoryTabs'
-import Carousel     from './components/ui/Carousel'
+import CategoryTabs from '../components/ui/CategoryTabs'
+import Carousel     from '../components/ui/Carousel'

-export default function Page() {
+export default function Page() {
  const params = useSearchParams()
  const cat = params.get('cat') || 'ui'
  const imageMap: Record<string, string[]> = {
    ui: ['/images/ui1.jpg', '/images/ui2.jpg'],
    graphic: ['/images/graphic1.jpg', '/images/graphic2.jpg'],
    packaging: ['/images/pack1.jpg', '/images/pack2.jpg'],
    logo: ['/images/logo1.jpg', '/images/logo2.jpg'],
    illustration: ['/images/ill1.jpg', '/images/ill2.jpg'],
  }
  const images = imageMap[cat] || []

  return (
    <main>
      <CategoryTabs />
      <Carousel images={images} />
      <WorkSection category={cat} />
    </main>
  )
}
