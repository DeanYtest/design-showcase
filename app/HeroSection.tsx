import { MotionH1, MotionP } from '@/app/MotionTags';

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
  我專注於品牌識別、社群視覺與包裝設計
</MotionP>
