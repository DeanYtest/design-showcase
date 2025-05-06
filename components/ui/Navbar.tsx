// components/ui/Navbar.tsx
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-50">
      <nav className="container mx-auto px-4 flex justify-end gap-8 py-4 text-white">
        <Link href="/" className="hover:text-accent transition">Home</Link>
        <Link href="#about" className="hover:text-accent transition">About Me</Link>
        <Link href="#contact" className="hover:text-accent transition">Contact</Link>
      </nav>
    </header>
  )
}
