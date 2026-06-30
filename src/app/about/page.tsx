import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "木心について",
  description: "木心の物語と、日本の職人技への私たちのコミットメント。",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              森を <br /> 敬う。
            </h1>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1200" alt="木心の工房" fill className="object-cover grayscale-[30%]" />
            </div>
          </div>
          
          <div className="space-y-16 pt-8 lg:pt-32">
            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">私たちの原点</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                長野の豊かな森で設立された木心は、組子や伝統的な木組みの精巧な芸術を尊重する小さな工房として始まりました。「木心」という名前は「木の心」を意味し、私たちが生み出すそれぞれの家具が、木という生命の延長線上にあることを思い出させてくれます。
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">工房の文化</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                私たちは組み立てライン（大量生産）を行いません。木材の最初の選定から、手作業でオイルを擦り込む最終仕上げまで、一つひとつの家具を一人の熟練した職人が監督します。これは、現代の要求によって急がせることのできない、ゆっくりとした体系的なプロセスです。
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">サステナビリティ</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                私たちの自然との関係は循環的です。厳格に管理された地元の森林からのみ伐採し、使用する木1本につき2本の木を植林しています。真のラグジュアリーとは、木が成長するのにかかった時間よりも長く残るものを創り出すことだと信じています。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
