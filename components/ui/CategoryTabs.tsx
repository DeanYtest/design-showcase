// app/components/ui/CategoryTabs.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation'

const categories = [
  { slug: 'ui', label: 'UI 設計' },
  { slug: 'graphic', label: '平面設計' },
  { slug: 'packaging', label: '包裝設計' },
  { slug: 'logo', label: 'LOGO 設計' },
  { slug: 'illustration', label: '手繪' },
]

export default function CategoryTabs() {
  const router = useRouter()
  const params = useSearchParams()
  const current = params.get('cat') || 'ui'

  return (
    <div className="flex justify-center gap-4 mb-8">
      {categories.map(c => (
        <button
          key={c.slug}
          className={`px-4 py-2 rounded-full transition ${
            current === c.slug
              ? 'bg-accent text-accent-foreground'
              : 'bg-gray-700 text-white'
          }`}
          onClick={() => router.push(`/?cat=${c.slug}`)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
