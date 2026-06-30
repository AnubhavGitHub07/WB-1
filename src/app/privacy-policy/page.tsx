import { Metadata } from "next";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "木心のプライバシーポリシー。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="font-serif text-4xl mb-12">プライバシーポリシー</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-muted-foreground leading-relaxed">{legalConfig.privacyPolicy}</p>
        </div>
      </div>
    </div>
  );
}
