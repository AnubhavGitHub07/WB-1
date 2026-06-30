"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1000",
    alt: "ミニマリストなラウンジチェア",
    aspect: "aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=1000",
    alt: "木製ダイニングテーブル",
    aspect: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1000",
    alt: "日本のインテリアの細部",
    aspect: "aspect-[4/3]"
  }
];

export default function HomeGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".gallery-item");
      
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={galleryRef} className="py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl mb-16 text-center">インテリアのインスピレーション</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-item w-full overflow-hidden ${img.aspect} ${
                index === 1 ? "md:translate-y-24" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
