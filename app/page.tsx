
'use client';

import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <main className="min-h-screen bg-white text-black font-sans px-4 md:px-12">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          嗨，我是小設，一位平面設計師
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-600"
        >
          我專注於品牌識別、社群視覺與包裝設計
        </motion.p>
        <div className="mt-6 flex gap-4">
          <Button>查看作品</Button>
          <Button variant="outline">聯絡我</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">關於我</h2>
        <p>
          擁有多年品牌設計經驗，喜歡將故事轉化為視覺。我致力於創造具美感又有溝通力的作品，協助品牌建立一致的視覺風格。
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-10 text-center">作品展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">作品名稱 {i + 1}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">聯絡我</h2>
        <form className="flex flex-col gap-4 items-center">
          <Input
            placeholder="您的名字"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Textarea
            placeholder="想說的話..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button className="flex gap-2 items-center" type="submit">
            <Mail size={16} />
            送出
          </Button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 小設設計. All rights reserved.
      </footer>
    </main>
  );
}
