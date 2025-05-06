// app/components/ui/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        pointerEvents: 'none',
        width: '20px',
        height: '20px',
        marginLeft: '-10px',
        marginTop: '-10px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        mixBlendMode: 'difference',
        zIndex: 9999,
        transition: 'transform .1s ease-out',
      }}
    />
  );
}
