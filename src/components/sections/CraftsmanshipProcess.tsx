import { contentConfig } from "@/config/content";

const processSteps = [
  {
    title: "調達",
    desc: "木曽谷から持続可能な方法で収穫されます。",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "乾燥",
    desc: "強度と安定性を確保するため、何年にもわたって自然乾燥されます。",
    image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "木組み",
    desc: "伝統的な接合技術を用い、釘を使わずに作られます。",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "仕上げ",
    desc: "木が呼吸できるよう、天然オイルで手磨きされます。",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function CraftsmanshipProcess() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl mb-6 text-foreground">
            {contentConfig.craftsmanship.title}
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            {contentConfig.craftsmanship.description}
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl mb-3 flex items-center">
                <span className="text-muted-foreground text-sm mr-4 tracking-widest">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
