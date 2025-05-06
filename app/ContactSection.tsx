'use client'
export default function ContactSection() {
  return (
    <section id="聯絡我" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-semibold mb-6 text-center">聯絡我</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: 串接 API 或 第三方服務
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="您的名字"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="想說的話…"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none md:col-span-2"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            送出
          </button>
        </form>
      </div>
    </section>
  );
}
