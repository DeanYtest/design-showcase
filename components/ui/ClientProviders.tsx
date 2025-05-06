// app/components/ui/ClientProviders.tsx
'use client'

import CustomCursor from './CustomCursor'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}
