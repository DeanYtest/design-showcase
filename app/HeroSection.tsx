'use client';
import { Button } from '@/components/ui/button';
import { MotionH1, MotionP } from './MotionTags';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100">
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        嗨，我是小設，一位平面設計師
      </MotionH1>
      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl text-gray-600"
      >
        我專注於品牌識別・社群視覺與包裝設計
      </MotionP>
      <div className="mt-6 flex gap-4">
        <Button>查看作品</Button>
        <Button variant="outline">聯絡我</Button>
      </div>
    </section>
  );
}