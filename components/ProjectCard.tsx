import Link from "next/link";

export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  mockupSrc?: string;
  mockupGradient: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#F8FAFF] rounded-3xl overflow-hidden border border-slate-200">
      <div className="flex flex-col md:flex-row">
        {/* Mockup */}
        {project.mockupSrc ? (
          <div className="flex-1 flex items-center justify-center py-8 px-6 min-h-64 md:min-h-[400px]">
            <img
              src={project.mockupSrc}
              alt={`${project.name} mockup`}
              className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        ) : (
          <div
            className={`flex-1 flex items-center justify-center p-10 md:p-12 bg-gradient-to-br ${project.mockupGradient} min-h-64 md:min-h-[400px]`}
          >
            <div className="w-36 h-64 border-4 border-white/40 rounded-3xl bg-white/20 backdrop-blur-sm flex flex-col items-center justify-between py-5 px-4 shadow-2xl">
              <div className="w-10 h-1.5 bg-white/60 rounded-full" />
              <div className="w-full space-y-2.5">
                <div className="w-full h-7 bg-white/30 rounded-xl" />
                <div className="flex gap-2">
                  <div className="flex-1 h-10 bg-white/20 rounded-xl" />
                  <div className="flex-1 h-10 bg-white/20 rounded-xl" />
                </div>
                <div className="w-4/5 h-2.5 bg-white/30 rounded-full" />
                <div className="w-3/5 h-2.5 bg-white/20 rounded-full" />
              </div>
              <div className="w-10 h-10 bg-white/30 rounded-full" />
            </div>
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 p-10 md:p-12 flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full self-start">
            {project.category}
          </span>
          <h3 className="text-3xl font-bold text-slate-950 mb-4">{project.name}</h3>
          <p className="text-slate-500 text-base leading-relaxed mb-6">
            {project.description}
          </p>
          <ul className="space-y-3 mb-8">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-slate-700">
                <svg
                  className="flex-shrink-0 text-blue-600"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm transition-colors"
            >
              Download on App Store
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full text-sm transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
