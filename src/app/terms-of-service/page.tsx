import { Metadata } from "next";
import { legalConfig } from "@/config/legal";

export const metadata: Metadata = {
  title: "利用規約",
  description: "木心の利用規約。",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="font-serif text-4xl mb-12">利用規約</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-muted-foreground leading-relaxed">{legalConfig.termsOfService}</p>
        </div>
      </div>
    </div>
  );
}
