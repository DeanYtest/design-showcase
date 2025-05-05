import { Card, CardContent } from '@/components/ui/card';

export default function WorkSection() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">作品展示</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="h-40 bg-gray-200 flex items-center justify-center">
              作品名稱 {i + 1}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}