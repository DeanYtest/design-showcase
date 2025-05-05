'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">聯絡我</h2>
      <form className="space-y-4">
        <Input placeholder="您的名字" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Textarea placeholder="想說的話..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <Button type="submit"><Mail className="w-4 h-4 mr-2" />送出</Button>
      </form>
    </section>
  );
}