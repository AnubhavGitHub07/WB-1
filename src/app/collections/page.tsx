import { Metadata } from "next";

export const metadata: Metadata = {
  title: "コレクション",
  description: "木心の職人による日本の木製家具コレクション。",
};

const collections = [
  {
    name: "ラウンジコレクション",
    inspiration: "伝統的な茶室の静けさにインスパイアされています。",
    material: "無垢ウォールナット、木曽檜",
    finish: "天然オイル仕上げ",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "ダイニングコレクション",
    inspiration: "「和」の哲学を中心に、人々を集めるデザイン。",
    material: "ホワイトオーク",
    finish: "マットラッカー仕上げ",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "ワークスペースコレクション",
    inspiration: "深い集中（残心）とマインドフルな作業のために設計されています。",
    material: "アッシュ材",
    finish: "焼杉風仕上げ",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-24 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">コレクション</h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            それぞれのコレクションは、素材の誠実さとプロポーションの探求であり、空間に静けさと落ち着きをもたらすようにデザインされています。
          </p>
        </header>

        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div key={collection.name} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover grayscale-[10%]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">{collection.name}</h2>
                <div className="space-y-4 mb-8 text-muted-foreground font-light">
                  <p><strong className="font-medium text-foreground">インスピレーション:</strong> {collection.inspiration}</p>
                  <p><strong className="font-medium text-foreground">素材:</strong> {collection.material}</p>
                  <p><strong className="font-medium text-foreground">仕上げ:</strong> {collection.finish}</p>
                </div>
                <button className="self-start border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300">
                  お問い合わせ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
