"use client";
import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";
import FadeIn from "./FadeIn";

const projects: Project[] = [
  {
    slug: "spendy-wendy",
    category: "iOS Finance App",
    name: "Spendy Wendy",
    description:
      "A smart personal and family finance tracker for iPhone. Track income, expenses, and budgets — all in one beautiful, intuitive app.",
    features: [
      "Multi-wallet support",
      "Budget categories & insights",
      "Family sharing ready",
    ],
    mockupSrc: "/images/Simulator Screenshot - iPhone 17 Pro - 2026-05-20 at 13.13.31-portrait.png",
    mockupGradient: "from-blue-400 to-blue-600",
    logoSrc: "/images/Frame 14.png",
    accent: "#2563EB",
  },
  {
    slug: "ritualloop",
    category: "Habit Tracker App",
    name: "RitualLoop",
    description:
      "Build habits. Close the loop. Every day. A minimalist habit tracker with gamification — create daily rituals, track your streaks, and level up your character as you grow.",
    features: [
      "Loop Streak — daily streak counter",
      "Character Level — gamified progress",
      "Weekly Review & quiet reminders",
    ],
    mockupSrc: "/images/iPhone 14 & 15 Pro - 17 copy-portrait.png",
    mockupGradient: "from-violet-400 to-purple-600",
    logoSrc: "/images/remore_the_circle_leave_only_t_Nano_Banana_2_12441.png",
    accent: "#44403c",
  },
  {
    slug: "hushwood",
    category: "Meditation App",
    name: "Hushwood",
    description:
      "Your meditation grows a tree. A minimalist meditation timer that turns your stillness into something alive. Every session you sit and breathe — your tree grows. Keep your practice and watch your grove flourish.",
    features: [
      "Living tree that grows with every session",
      "Personal grove — history as a forest",
      "Gentle breathing cues, silent & distraction-free",
    ],
    mockupSrc: "/images/hushwood-mockup.png",
    mockupGradient: "from-green-400 to-emerald-600",
    logoSrc: "/images/hushwood-icon.png",
    accent: "#335118",
  },
  {
    slug: "plankster",
    category: "iOS Fitness App",
    name: "Plankster",
    description:
      "One exercise. One timer. One goal. A minimalist plank timer for people who take their core seriously. Set your timer, hold your plank, beat your record.",
    features: [
      "Personal best tracker",
      "Full session history",
      "Streak counter — don't break the chain",
    ],
    mockupSrc: "/images/iPhone 14 & 15 Pro - 17 (3)-portrait.png",
    mockupGradient: "from-orange-400 to-red-500",
    logoSrc: "/images/Minimalist_app_icon_logo_for_a_Nano_Banana_2_50314.png",
    accent: "#ea580c",
  },
];

export default function WorkSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-slate-950 mb-4">
            Products We&apos;ve Built
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of digital products crafted with care — from idea to App Store.
          </p>
        </FadeIn>

        {/* Carousel wrapper */}
        <FadeIn delay={150}>
        <div className="relative">
          {/* Desktop left arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full items-center justify-center text-slate-500 transition-colors shadow-sm"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          {/* Desktop right arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full items-center justify-center text-slate-500 transition-colors shadow-sm"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>

          {/* Project card */}
          <ProjectCard project={projects[current]} />

          {/* Mobile nav arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full flex items-center justify-center text-slate-500 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full flex items-center justify-center text-slate-500 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current
                  ? "bg-blue-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
