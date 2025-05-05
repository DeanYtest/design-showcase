'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

// 改用 motion() 包裝 HTML 元素，避免 TS 錯誤
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans px-6 md:px-16 py-12 space-y-24">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-4">
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
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
        <div className="space-x-4 mt-4">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">查看作品</button>
          <button className="border border-black px-6 py-2 rounded hover:bg-gray-100 transition">聯絡我</button>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">關於我</h2>
        <p className="text-gray-700 leading-relaxed">
          擁有多年品牌設計經驗，喜歡將故事轉化為視覺。我致力於創造具美感又有溝通力的作品，協助品牌建立一致的視覺風格。
        </p>
      </section>

      {/* Work Showcase */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">作品展示</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>作品名稱 1</li>
          <li>作品名稱 2</li>
          <li>作品名稱 3</li>
          <li>作品名稱 4</li>
          <li>作品名稱 5</li>
          <li>作品名稱 6</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">聯絡我</h2>
        <form className="flex flex-col md:flex-row md:items-start md:space-x-2 space-y-2 md:space-y-0">
          <input
            type="text"
            placeholder="您的名字"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 w-full md:w-1/4"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-2 w-full md:w-1/3"
          />
          <textarea
            placeholder="想說的話..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border p-2 w-full md:flex-1"
          />
          <button type="submit" className="p-2 bg-black text-white hover:bg-gray-800 transition">
            <Mail className="w-4 h-4 inline-block" /> 送出
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-12">
        © 2025 小設設計. All rights reserved.
      </footer>
    </div>
  );
}
