import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "木心の利用規約。",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="font-serif text-4xl mb-12">利用規約</h1>
        <div className="prose prose-neutral dark:prose-invert prose-headings:font-serif prose-headings:font-normal max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-8">
            この利用規約（以下、「本規約」）は、木心（以下、「当社」）が提供するウェブサイトおよびサービスの利用条件を定めるものです。本ウェブサイトをご利用になる皆様（以下、「利用者」）は、本規約に同意したものとみなされます。※本サイトは架空のデモンストレーションサイトです。
          </p>

          <h2 className="text-2xl mt-12 mb-6">1. 利用条件</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            利用者は、本規約および適用されるすべての法令を遵守して本ウェブサイトを利用するものとします。当社は、必要と判断した場合には、利用者に事前に通知することなく本規約を変更することができます。
          </p>

          <h2 className="text-2xl mt-12 mb-6">2. 禁止事項</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本ウェブサイトの利用に際し、以下の行為を禁止します。
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
            <li>他の利用者に成りすます行為</li>
            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">3. 知的財産権</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本ウェブサイトに掲載されているすべてのコンテンツ（文章、画像、デザイン、ロゴ等）に関する知的財産権は、当社または正当な権利を有する第三者に帰属します。無断での複製、転用、改変を禁じます。
          </p>

          <h2 className="text-2xl mt-12 mb-6">4. 免責事項</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、本ウェブサイトに掲載された情報について細心の注意を払っておりますが、その正確性、完全性、有用性について保証するものではありません。本ウェブサイトの利用により生じた損害について、当社は一切の責任を負いません。
          </p>

          <h2 className="text-2xl mt-12 mb-6">5. コンテンツ利用</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            利用者は、個人的かつ非営利の目的に限り、本ウェブサイトのコンテンツをダウンロードまたは印刷することができます。商業目的での利用には当社の事前の書面による許可が必要です。
          </p>

          <h2 className="text-2xl mt-12 mb-6">6. 外部リンク</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本ウェブサイトからリンクされている第三者のウェブサイトの内容について、当社は責任を負いません。リンク先のウェブサイトの利用は、利用者の自己責任において行われるものとします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">7. サービス変更</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、利用者に通知することなく、本ウェブサイトの内容を変更、またはサービスの提供を中止することができます。これによって生じた損害について、当社は一切の責任を負いません。
          </p>

          <h2 className="text-2xl mt-12 mb-6">8. 責任範囲</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社が責任を負う場合であっても、当社の故意または重過失による場合を除き、通常生じうる損害の範囲内かつ有料サービスにおいては代金額（継続的サービスの場合は1ヶ月分相当額）を上限とします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">9. 準拠法</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本規約の解釈にあたっては、日本法を準拠法とします。本ウェブサイトに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">10. お問い合わせ</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本規約に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
          </p>

          <p className="text-muted-foreground text-sm mt-12 pt-8 border-t border-border">
            最終更新日: 2026年6月30日
          </p>
        </div>
      </div>
    </div>
  );
}
