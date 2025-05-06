'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-black bg-opacity-80 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* 左邊 Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </a>
        </Link>

        {/* 右邊導覽 */}
        <nav className="space-x-6 text-white">
          <Link href="/">
            <a className="hover:text-accent transition">Home</a>
          </Link>
          <Link href="/#about">
            <a className="hover:text-accent transition">About Me</a>
          </Link>
          <Link href="/#contact">
            <a className="hover:text-accent transition">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
