import Link from "next/link";
import FeatureCarousel from "@/components/FeatureCarousel";
import SpendyWendyFAQ from "@/components/SpendyWendyFAQ";
import SpendyWendySupportForm from "@/components/SpendyWendySupportForm";

type ProjectData = {
  name: string;
  category: string;
  description: string;
  gradient: string;
};

const projects: Record<string, ProjectData> = {
  "spendy-wendy": {
    name: "Spendy Wendy",
    category: "iOS Finance App",
    description:
      "Spendy Wendy is a smart personal and family finance tracker designed exclusively for iPhone. It helps you take control of your money with a clean, intuitive interface that makes budgeting feel effortless. Track income and expenses across multiple wallets, set category budgets, and get insights that actually make sense. Whether you're managing your own finances or coordinating with family members, Spendy Wendy keeps everyone on the same page — beautifully.",
    gradient: "from-blue-400 to-blue-600",
  },
  "ritualloop": {
    name: "RitualLoop",
    category: "Habit Tracker App",
    description:
      "RitualLoop is a minimalist habit tracker with gamification built in. Create your daily rituals, mark them done with a single tap, and watch your Loop Streak grow — an unbroken chain of consistent days. Your character levels up as you complete rituals, weekly reviews keep you honest, and quiet reminders arrive exactly when you need them. Build habits. Close the loop. Every day.",
    gradient: "from-violet-400 to-purple-600",
  },
  "focusflow": {
    name: "FocusFlow",
    category: "Productivity App",
    description:
      "FocusFlow is a minimalist productivity app that helps you build better habits and stay focused on what matters most. With intelligent daily planning, FocusFlow schedules your tasks at optimal times based on your energy patterns and preferences. Track habits with a simple streak system, manage your to-do list with smart prioritization, and enter deep focus mode with a built-in Pomodoro timer. FocusFlow is for people who want to do more — without the overwhelm.",
    gradient: "from-indigo-400 to-purple-600",
  },
  "vitalize": {
    name: "Vitalize",
    category: "Health & Wellness App",
    description:
      "Vitalize is your all-in-one wellness companion built for modern life. Log meals and track macros with a comprehensive food database, record workouts across dozens of activity types, and get a full picture of your sleep quality each morning. Vitalize connects the dots between nutrition, movement, and rest to surface insights that help you feel your best every day. It's built for busy people who want to stay healthy without making it a full-time job.",
    gradient: "from-teal-400 to-green-600",
  },
};

export function generateStaticParams() {
  return [
    { slug: "spendy-wendy" },
    { slug: "ritualloop" },
    { slug: "focusflow" },
    { slug: "vitalize" },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 text-lg">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen bg-white">
      <div className={`mx-auto ${slug === "spendy-wendy" ? "max-w-5xl" : "max-w-3xl"}`}>
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-10 group transition-colors"
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
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
          Back to Work
        </Link>

        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl font-bold text-slate-950">{project.name}</h1>
          {slug === "spendy-wendy" && (
            <img
              src="/images/Frame 14.png"
              alt="Spendy Wendy icon"
              className="w-14 h-14 rounded-2xl shadow-md flex-shrink-0"
            />
          )}
        </div>

        {/* Description */}
        <p className="text-lg text-slate-500 leading-relaxed mb-12">
          {project.description}
        </p>

        {/* Feature showcase */}
        {slug === "spendy-wendy" ? (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-950 mb-6">
                Key Features
              </h2>
              <FeatureCarousel />
            </div>
            <SpendyWendyFAQ />
            <SpendyWendySupportForm />
          </>
        ) : (
          <div className="w-full h-72 rounded-3xl flex items-center justify-center mb-12 relative overflow-hidden bg-slate-100">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
            />
            <p className="relative text-slate-500 text-lg font-semibold">
              Screenshots coming soon
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
