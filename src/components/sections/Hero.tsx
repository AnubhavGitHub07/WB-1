"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyConfig } from "@/config/company";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.fromTo(
        ".hero-text-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.2 }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
      );

      // Parallax Scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Japanese Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-rice-paper">
        <div ref={textRef} className="overflow-hidden">
          <h1 className="hero-text-line font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            木に宿る心。
          </h1>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text-line font-sans text-lg md:text-xl font-light tracking-widest uppercase mb-12">
            空間に宿る温もり
          </p>
        </div>
        <div className="overflow-hidden">
          <a
            href="/collections"
            className="hero-text-line inline-block px-10 py-4 border border-rice-paper/50 hover:bg-rice-paper hover:text-charcoal transition-colors duration-500 uppercase tracking-widest text-sm"
          >
            コレクションを見る
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-rice-paper/70 mb-4 font-light">スクロール</span>
        <div className="w-[1px] h-16 bg-rice-paper/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-rice-paper animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
