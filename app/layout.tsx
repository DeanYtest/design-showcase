// app/layout.tsx
export const metadata = {
  title: 'My Portfolio',
  description: 'Personal design showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}