# components/ui/TypingText.tsx
tsx
'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

interface TypingTextProps {
  words: string[]
}

export default function TypingText({ words }: TypingTextProps) {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })
  return (
    <h1 className="text-5xl md:text-7xl font-bold">
      {text}
      <Cursor />
    </h1>
  )
}
