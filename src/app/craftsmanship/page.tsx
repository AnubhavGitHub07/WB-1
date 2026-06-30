import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "職人技",
  description: "木心の木製家具の背後にある伝統的な技術をご覧ください。",
};

export default function CraftsmanshipPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-24 lg:mb-32 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            見えない細部への <br className="hidden md:block"/> 献身。
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            真のラグジュアリーは主張しません。隠された継ぎ目の精度、見えない表面の滑らかさ、そして天然オイルの香りに見出されます。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden mb-8">
              <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" alt="木材の選定" fill className="object-cover"/>
            </div>
            <h2 className="font-serif text-3xl">1. 選定と休息</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              私たちは厳格な再生プロトコルを持つ森林からのみ調達します。伐採後、木材は数年間休ませます。この自然乾燥プロセスにより、木材が自然に順応し、将来の反りを防ぎます。
            </p>
          </div>

          <div className="space-y-6 md:mt-32">
            <div className="relative aspect-[4/5] overflow-hidden mb-8">
              <Image src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000" alt="伝統的な木組み" fill className="object-cover"/>
            </div>
            <h2 className="font-serif text-3xl">2. 木組み</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              私たちの職人は、金属の釘ではなく、複雑に噛み合う接合部に依存しています。「木組み」として知られるこの先祖伝来の技術により、家具はひび割れることなく季節の変化に合わせて伸縮することができます。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden mb-8">
              <Image src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=1000" alt="手作業による仕上げ" fill className="object-cover"/>
            </div>
            <h2 className="font-serif text-3xl">3. 天然仕上げ</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              木を窒息させる合成ラッカーの使用を拒否します。代わりに、桐油や亜麻仁油などの天然オイルを手作業で丁寧に擦り込み、木目が呼吸し、何十年にもわたって優雅な経年変化を楽しめるようにします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
