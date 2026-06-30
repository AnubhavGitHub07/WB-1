import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ジャーナル",
  description: "日本のインテリアデザイン、職人技、ミニマルな暮らしに関する記録。",
};

const articles = [
  {
    title: "現代のインテリアにおける侘び寂びの哲学",
    category: "デザイン",
    excerpt: "大量生産された完璧さへのカウンタームーブメントとして、不完全さや自然の移ろいの美しさを受け入れる。",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "無垢材の手入れ：一生の付き合い",
    category: "家具の手入れ",
    excerpt: "真のラグジュアリーにメンテナンスが必要な理由と、優雅な経年変化を楽しむための木心家具へのオイル塗装について。",
    image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "木曽の工房での一日",
    category: "職人技",
    excerpt: "一つの道具を極めるために生涯を捧げる職人たちとの出会い。そして、なぜ「忍耐」が最も価値のある素材なのか。",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function JournalPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-24">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">ジャーナル</h1>
          <p className="text-muted-foreground text-lg font-light max-w-2xl">
            デザイン、木材、そして静かな熟練の探求に関する考察。
          </p>
        </header>

        <div className="space-y-32">
          {articles.map((article, index) => (
            <article key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  {article.category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-snug hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <Link href="#" className="border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300 self-start">
                  記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
