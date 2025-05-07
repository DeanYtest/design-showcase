// app/components/ui/Carousel.tsx
'use client';
import { useEffect, useState } from 'react'

interface CarouselProps { images: string[] }

export default function Carousel({ images }: CarouselProps) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const h = setInterval(() => setIdx(i => (i + 1) % images.length), 3000)
    return () => clearInterval(h)
  }, [images.length])

  if (!images.length) return null
  return (
    <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[idx]}
        alt=""
        className="w-full h-64 object-cover"
      />
    </div>
  )
}
