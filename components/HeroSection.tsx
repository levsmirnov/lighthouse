export default function HeroSection() {
  return (
    <section id="about" className="relative pt-32 pb-24 px-6 bg-[#F8FAFF] overflow-hidden">
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
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
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

          {/* Right — decorative card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80 lg:h-[420px] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-3xl overflow-hidden shadow-xl">
              {/* Grid pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="herogrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#herogrid)" />
              </svg>

              {/* Phone mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-64 border-4 border-blue-400 rounded-3xl bg-white/70 backdrop-blur-sm shadow-2xl flex flex-col items-center justify-between py-5 px-4">
                  <div className="w-12 h-2 bg-blue-300 rounded-full" />
                  <div className="w-full space-y-2.5">
                    <div className="w-full h-8 bg-blue-200 rounded-xl" />
                    <div className="flex gap-2">
                      <div className="flex-1 h-12 bg-blue-100 rounded-xl" />
                      <div className="flex-1 h-12 bg-blue-100 rounded-xl" />
                    </div>
                    <div className="w-4/5 h-2.5 bg-blue-200 rounded-full" />
                    <div className="w-3/5 h-2.5 bg-blue-100 rounded-full" />
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full" />
                </div>
              </div>

              {/* Floating accent circles */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-blue-400 opacity-20 rounded-full" />
              <div className="absolute bottom-10 left-8 w-12 h-12 bg-blue-600 opacity-15 rounded-full" />
              <div className="absolute top-1/2 right-12 w-7 h-7 bg-blue-500 opacity-30 rounded-full" />

              {/* Small UI card decorations */}
              <div className="absolute top-10 left-8 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md border border-blue-100">
                <div className="w-16 h-2 bg-blue-300 rounded-full mb-1.5" />
                <div className="w-10 h-2 bg-blue-100 rounded-full" />
              </div>
              <div className="absolute bottom-12 right-8 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md border border-blue-100">
                <div className="w-12 h-2 bg-blue-300 rounded-full mb-1.5" />
                <div className="w-8 h-2 bg-blue-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
