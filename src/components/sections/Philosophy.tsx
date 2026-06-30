"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contentConfig } from "@/config/content";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".philosophy-reveal",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".philosophy-reveal",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="lg:col-span-5 lg:col-start-2">
            <h2 className="philosophy-reveal font-serif text-4xl md:text-5xl mb-8">
              私たちの哲学
            </h2>
            <p className="philosophy-reveal text-muted-foreground leading-relaxed text-lg mb-8">
              {contentConfig.philosophy}
            </p>
            <a
              href="/about"
              className="philosophy-reveal inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            >
              私たちの物語を読む
            </a>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 philosophy-reveal">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1200"
                alt="Craftsmanship Process"
                fill
                className="object-cover grayscale-[20%]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
