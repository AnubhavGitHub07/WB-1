import { Metadata } from "next";
import { companyConfig } from "@/config/company";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "木心の工房へのお問い合わせ。",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <header className="mb-24">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">工房へのお問い合わせ</h1>
          <p className="text-muted-foreground text-lg font-light">
            コレクション、オーダーメイドのご依頼、インテリアコラボレーションに関するお問い合わせを歓迎いたします。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Details */}
          <div className="space-y-16">
            <div>
              <h2 className="font-serif text-2xl mb-6">アトリエ＆ショールーム</h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                {companyConfig.address}
              </p>
              <p className="text-muted-foreground font-light mt-4">
                {companyConfig.businessHours}
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl mb-6">直接のお問い合わせ</h2>
              <div className="space-y-4">
                <a href={`mailto:${companyConfig.email}`} className="block text-muted-foreground font-light hover:text-foreground transition-colors">
                  {companyConfig.email}
                </a>
                <a href={`tel:${companyConfig.phone}`} className="block text-muted-foreground font-light hover:text-foreground transition-colors">
                  {companyConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-10 md:p-12">
            <form className="space-y-8" action="#">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm uppercase tracking-widest text-muted-foreground">お名前</label>
                <Input id="name" placeholder="お名前を入力してください" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-1 focus-visible:ring-ring" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-widest text-muted-foreground">メールアドレス</label>
                <Input id="email" type="email" placeholder="メールアドレスを入力してください" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-1 focus-visible:ring-ring" />
              </div>
              <div className="space-y-2">
                <label htmlFor="inquiry" className="text-sm uppercase tracking-widest text-muted-foreground">お問い合わせの種類</label>
                <Input id="inquiry" placeholder="例：コレクションについて、オーダーメイドのご依頼" className="bg-transparent border-border rounded-none h-12 focus-visible:ring-1 focus-visible:ring-ring" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-muted-foreground">メッセージ</label>
                <Textarea id="message" placeholder="ご用件をご記入ください" className="bg-transparent border-border rounded-none min-h-[150px] resize-none focus-visible:ring-1 focus-visible:ring-ring" />
              </div>
              <Button type="submit" className="w-full h-14 uppercase tracking-widest rounded-none">
                送信する
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
