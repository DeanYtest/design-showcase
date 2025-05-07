// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '../components/ui/Navbar'   


export const metadata: Metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
  openGraph: {
    title: '小設 設計作品集',
    description: '個人品牌視覺設計作品集｜Graphic, Illustration, Logo…',
    url: 'https://yourdomain.com',
    siteName: '小設 Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小設 設計作品集',
    description: 'Graphic, Illustration, Logo…',
    images: ['https://yourdomain.com/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','GA_MEASUREMENT_ID',{ page_path: window.location.pathname });
        `}</Script>
      </head>
      <body>
        <Navbar />           {/* 重新加回 Navbar */}
        {children}
      </body>
    </html>
  )
}
