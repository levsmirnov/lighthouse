"use client";
import { useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 28;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-36 pb-24 px-6 bg-[#F8FAFF] overflow-hidden"
    >
      {/* Faint background blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 opacity-[0.05] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — text */}
          <div className="flex-1 max-w-xl">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-5">
              Digital Solutions Studio
            </p>
            <h1 className="text-5xl lg:text-[64px] font-bold text-slate-950 leading-tight mb-6">
              We Light the Way Forward
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Lighthouse Digi Lab is a global digital solutions studio crafting mobile apps, web
              platforms, and digital products that people love. We turn ambitious ideas into
              polished, real-world products — from concept to launch and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-8 py-3 btn-gradient text-white font-semibold rounded-full"
              >
                See Our Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right — phone mockup with parallax */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <img
              src="/images/Simulator Screenshot - iPhone 17 Pro - 2026-05-20 at 13.13.31-left copy.png"
              alt="Spendy Wendy app"
              className="w-auto max-h-[570px] object-contain drop-shadow-2xl"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.12s ease-out",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
