import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">旅の始まり</h2>
        <p className="text-primary-foreground/80 font-light text-lg mb-12 leading-relaxed">
          あなた自身の空間で、木心の職人技の温もりをご体験ください。コンサルテーションの予約や、山のアトリエへの訪問をお待ちしております。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground border border-primary-foreground transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            お問い合わせ
          </Link>
          <Link
            href="/collections"
            className="px-8 py-4 border border-primary-foreground/30 hover:border-primary-foreground transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            コレクションを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
