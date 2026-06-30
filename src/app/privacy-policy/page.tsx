import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "木心のプライバシーポリシー。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="font-serif text-4xl mb-12">プライバシーポリシー</h1>
        <div className="prose prose-neutral dark:prose-invert prose-headings:font-serif prose-headings:font-normal max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-8">
            木心（以下、「当社」）は、お客様の個人情報の保護を最重要課題と位置づけ、以下のプライバシーポリシーを定め、個人情報の適切な取り扱いと保護に努めます。※本サイトは架空のデモンストレーションサイトです。
          </p>

          <h2 className="text-2xl mt-12 mb-6">1. 個人情報の取得</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、適法かつ公正な手段によって個人情報を取得します。ウェブサイトの利用、お問い合わせ、または製品のご購入に際して、氏名、住所、電話番号、メールアドレス等の個人情報をお伺いする場合があります。
          </p>

          <h2 className="text-2xl mt-12 mb-6">2. 利用目的</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            取得した個人情報は、以下の目的のために利用いたします。
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>ご購入いただいた製品の発送およびアフターサービスの提供</li>
            <li>お問い合わせに対する回答</li>
            <li>新製品や展示会等のご案内</li>
            <li>サービスの品質向上のためのアンケート調査</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">3. Cookieについて</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当ウェブサイトでは、利便性の向上および統計データの取得のためにCookieを使用しています。Cookieにより個人を特定することはできません。ブラウザの設定によりCookieを無効にすることも可能です。
          </p>

          <h2 className="text-2xl mt-12 mb-6">4. アクセス解析</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当サイトでは、サービスの向上を目的としてアクセス解析ツールを使用し、利用状況を計測しています。これらにより収集されるデータは匿名化されており、個人を特定するものではありません。
          </p>

          <h2 className="text-2xl mt-12 mb-6">5. 情報管理</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を講じ、厳重に管理いたします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">6. 第三者提供</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、法令に定める場合を除き、事前にお客様の同意を得ることなく、個人情報を第三者に提供いたしません。ただし、配送業務等を委託する場合において、必要最小限の情報を委託先に提供することがあります。
          </p>

          <h2 className="text-2xl mt-12 mb-6">7. セキュリティ</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当ウェブサイトは、お客様の個人情報を保護するためにSSL暗号化通信を導入しています。これにより、送受信されるデータは暗号化され、安全に保護されます。
          </p>

          <h2 className="text-2xl mt-12 mb-6">8. 保管期間</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            当社は、利用目的の達成に必要な範囲内で個人情報を保管し、不要となった場合には、速やかにかつ安全に廃棄または消去いたします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">9. 改訂について</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            本ポリシーは、法令の変更やサービス内容の見直しに伴い、予告なく改訂される場合があります。改訂後のポリシーは、当ウェブサイトに掲載された時点から効力を生じるものとします。
          </p>

          <h2 className="text-2xl mt-12 mb-6">10. お問い合わせ</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
          </p>

          <p className="text-muted-foreground text-sm mt-12 pt-8 border-t border-border">
            最終更新日: 2026年6月30日
          </p>
        </div>
      </div>
    </div>
  );
}
