"use client";

import { useState, useEffect, useCallback } from "react";

type Slide = {
  featureNumber: string;
  title: string;
  description: string;
  imageSrc: string;
};

const slides: Slide[] = [
  {
    featureNumber: "Feature 01",
    title: "Track Every Transaction",
    description:
      "Log income, expenses and transfers in seconds. See exactly where your money goes with detailed category breakdowns.",
    imageSrc:
      "/images/Simulator Screenshot - iPhone 17 Pro - 2026-05-20 at 13.13.31-left.png",
  },
  {
    featureNumber: "Feature 02",
    title: "Smart Budget Planning",
    description:
      "Set spending limits for each category and get visual progress bars. Stay on top of your finances every day of the month.",
    imageSrc:
      "/images/Simulator Screenshot - iPhone 13 Pro Max - 2026-05-21 at 10.01.29-left.png",
  },
  {
    featureNumber: "Feature 03",
    title: "Multiple Wallets",
    description:
      "Manage all your accounts in one place — cash, bank cards, savings. See your total net worth at a glance.",
    imageSrc:
      "/images/Simulator Screenshot - iPhone 13 Pro Max - 2026-05-21 at 10.00.55-left.png",
  },
  {
    featureNumber: "Feature 04",
    title: "Shared Budgets",
    description:
      "Invite family or partner to share a budget. Everyone sees real-time updates and contributes to the same financial goals.",
    imageSrc:
      "/images/Simulator Screenshot - iPhone 13 Pro Max - 2026-05-21 at 10.00.21-left.png",
  },
  {
    featureNumber: "Feature 05",
    title: "Export & Analyze",
    description:
      "Export your data to CSV and open it in Excel, Numbers or Google Sheets for deeper analysis.",
    imageSrc:
      "/images/Simulator Screenshot - iPhone 13 Pro Max - 2026-05-21 at 10.00.04-left.png",
  },
];

const AUTO_SCROLL_INTERVAL = 4000;

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(next, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="w-full">
      {/* Slide */}
      <div className="bg-[#F8FAFF] rounded-3xl border border-slate-200 overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[420px]">
          {/* LEFT — text content */}
          <div
            className={`flex-1 flex flex-col justify-center p-10 md:p-14 transition-all duration-350 ${
              animating
                ? direction === "next"
                  ? "opacity-0 -translate-x-4"
                  : "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            {/* Logo + feature badge row */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/Frame 14.png"
                alt="Spendy Wendy logo"
                className="w-11 h-11 rounded-xl shadow-sm flex-shrink-0"
              />
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                {slide.featureNumber}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 leading-tight">
              {slide.title}
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-8">
              {slide.description}
            </p>

            {/* App Store button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-semibold rounded-full text-sm transition-colors self-start"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
          </div>

          {/* RIGHT — phone mockup */}
          <div
            className={`flex-1 flex items-end justify-center py-8 px-6 transition-all duration-350 ${
              animating
                ? direction === "next"
                  ? "opacity-0 translate-x-6"
                  : "opacity-0 -translate-x-6"
                : "opacity-100 translate-x-0"
            }`}
          >
            <img
              src={slide.imageSrc}
              alt={slide.title}
              className="max-h-[380px] w-auto object-contain drop-shadow-2xl"
              style={{
                transform: "rotate(6deg) translateY(8px)",
                filter: "drop-shadow(0 24px 48px rgba(59,130,246,0.18))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2.5 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2.5 bg-blue-600"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
