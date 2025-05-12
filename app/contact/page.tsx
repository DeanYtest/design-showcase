// app/contact/page.tsx
import ContactSection from '../ContactSection';
import FooterDark from '../FooterDark';

export const metadata = {
  title: 'Contact',
  description: '小設｜聯絡我',
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-16 bg-black text-white">
        {/* 聯絡表單 */}
        <ContactSection />
      </main>
      {/* 黑底白字 Footer */}
      <FooterDark />
    </>
  );
}
