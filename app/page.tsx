'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 text-center px-4">
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
        <div className="mt-6 space-x-4">
          <Button>查看作品</Button>
          <Button variant="outline">聯絡我</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">關於我</h2>
        <p className="text-gray-600 leading-relaxed">
          具備多年品牌設計經驗，喜歡將故事轉化為視覺。我致力於創造具美感又有溝通力的作品，協助品牌建立一致的視覺風格。
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">作品展示</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-200 rounded mb-2" />
                <p className="text-sm text-gray-500">作品名稱 {i + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">聯絡我</h2>
        <form className="space-y-4">
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
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button className="w-full"><Mail className="w-4 h-4 mr-2" />送出</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} 小設設計. All rights reserved.
      </footer>
    </div>
  )
}