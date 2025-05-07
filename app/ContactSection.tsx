// app/ContactSection.tsx
'use client'

import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
  hp: string  // honeypot 隱藏欄位
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // honeypot 濾 spam
    if (data.hp) return

    // 送出到後端 API route （請自行實作 /api/contact）
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      alert('已送出，感謝聯絡！')
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-semibold mb-6 text-center">
          Contact me
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {/* honeypot 隱藏欄位 */}
          <input type="text" {...register('hp')} className="hidden" />

          <input
            type="text"
            {...register('name', { required: '請填寫名字' })}
            name="name"
            placeholder="您的名字"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
          />
          {errors.name && (
            <p className="text-red-500 md:col-span-2">
              {errors.name.message}
            </p>
          )}

          <input
            type="email"
            {...register('email', {
              required: '請填寫 Email',
              pattern: { value: /^\S+@\S+$/i, message: '格式不正確' },
            })}
            name="email"
            placeholder="您的Email"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
          />
          {errors.email && (
            <p className="text-red-500 md:col-span-2">
              {errors.email.message}
            </p>
          )}

          <textarea
            {...register('message', { required: '請填寫留言' })}
            id="message"
            name="message"
            rows={4}
            placeholder="想說的話…"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none md:col-span-2"
          />
          {errors.message && (
            <p className="text-red-500 md:col-span-2">
              {errors.message.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition disabled:opacity-50"
          >
            {isSubmitting ? '送出中…' : '送出'}
          </button>
        </form>
      </div>
    </section>
  )
}
