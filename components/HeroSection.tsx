import LighthouseIcon from "./LighthouseIcon";

function DigitalBeam() {
  const color = "#2563EB";
  return (
    <svg
      viewBox="0 0 200 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Centre row */}
      <rect x="0"   y="46" width="12" height="12" rx="1" fill={color} opacity="0.85" />
      <rect x="18"  y="45" width="11" height="11" rx="1" fill={color} opacity="0.72" />
      <rect x="35"  y="44" width="10" height="10" rx="1" fill={color} opacity="0.59" />
      <rect x="51"  y="44" width="9"  height="9"  rx="1" fill={color} opacity="0.47" />
      <rect x="66"  y="43" width="8"  height="8"  rx="1" fill={color} opacity="0.36" />
      <rect x="80"  y="43" width="7"  height="7"  rx="1" fill={color} opacity="0.26" />
      <rect x="93"  y="44" width="6"  height="6"  rx="1" fill={color} opacity="0.17" />
      <rect x="105" y="44" width="5"  height="5"  rx="1" fill={color} opacity="0.10" />
      <rect x="116" y="44" width="4"  height="4"  rx="1" fill={color} opacity="0.06" />

      {/* Up 1 */}
      <rect x="3"   y="32" width="11" height="11" rx="1" fill={color} opacity="0.72" />
      <rect x="20"  y="30" width="10" height="10" rx="1" fill={color} opacity="0.59" />
      <rect x="37"  y="28" width="9"  height="9"  rx="1" fill={color} opacity="0.47" />
      <rect x="53"  y="26" width="8"  height="8"  rx="1" fill={color} opacity="0.36" />
      <rect x="68"  y="25" width="7"  height="7"  rx="1" fill={color} opacity="0.26" />
      <rect x="82"  y="24" width="6"  height="6"  rx="1" fill={color} opacity="0.17" />
      <rect x="95"  y="23" width="5"  height="5"  rx="1" fill={color} opacity="0.10" />
      <rect x="107" y="23" width="4"  height="4"  rx="1" fill={color} opacity="0.06" />

      {/* Up 2 */}
      <rect x="8"   y="18" width="10" height="10" rx="1" fill={color} opacity="0.55" />
      <rect x="25"  y="15" width="9"  height="9"  rx="1" fill={color} opacity="0.42" />
      <rect x="41"  y="12" width="8"  height="8"  rx="1" fill={color} opacity="0.31" />
      <rect x="56"  y="10" width="7"  height="7"  rx="1" fill={color} opacity="0.21" />
      <rect x="70"  y="9"  width="6"  height="6"  rx="1" fill={color} opacity="0.13" />
      <rect x="83"  y="8"  width="5"  height="5"  rx="1" fill={color} opacity="0.08" />
      <rect x="95"  y="7"  width="4"  height="4"  rx="1" fill={color} opacity="0.05" />

      {/* Up 3 */}
      <rect x="16"  y="5"  width="9"  height="9"  rx="1" fill={color} opacity="0.35" />
      <rect x="33"  y="1"  width="8"  height="8"  rx="1" fill={color} opacity="0.24" />
      <rect x="49"  y="-1" width="7"  height="7"  rx="1" fill={color} opacity="0.15" />
      <rect x="64"  y="-3" width="6"  height="6"  rx="1" fill={color} opacity="0.08" />

      {/* Down 1 */}
      <rect x="3"   y="61" width="11" height="11" rx="1" fill={color} opacity="0.72" />
      <rect x="20"  y="63" width="10" height="10" rx="1" fill={color} opacity="0.59" />
      <rect x="37"  y="65" width="9"  height="9"  rx="1" fill={color} opacity="0.47" />
      <rect x="53"  y="66" width="8"  height="8"  rx="1" fill={color} opacity="0.36" />
      <rect x="68"  y="67" width="7"  height="7"  rx="1" fill={color} opacity="0.26" />
      <rect x="82"  y="68" width="6"  height="6"  rx="1" fill={color} opacity="0.17" />
      <rect x="95"  y="69" width="5"  height="5"  rx="1" fill={color} opacity="0.10" />
      <rect x="107" y="69" width="4"  height="4"  rx="1" fill={color} opacity="0.06" />

      {/* Down 2 */}
      <rect x="8"   y="76" width="10" height="10" rx="1" fill={color} opacity="0.55" />
      <rect x="25"  y="79" width="9"  height="9"  rx="1" fill={color} opacity="0.42" />
      <rect x="41"  y="82" width="8"  height="8"  rx="1" fill={color} opacity="0.31" />
      <rect x="56"  y="84" width="7"  height="7"  rx="1" fill={color} opacity="0.21" />
      <rect x="70"  y="86" width="6"  height="6"  rx="1" fill={color} opacity="0.13" />
      <rect x="83"  y="87" width="5"  height="5"  rx="1" fill={color} opacity="0.08" />
      <rect x="95"  y="88" width="4"  height="4"  rx="1" fill={color} opacity="0.05" />

      {/* Down 3 */}
      <rect x="16"  y="90" width="9"  height="9"  rx="1" fill={color} opacity="0.35" />
      <rect x="33"  y="93" width="8"  height="8"  rx="1" fill={color} opacity="0.24" />
      <rect x="49"  y="96" width="7"  height="7"  rx="1" fill={color} opacity="0.15" />
      <rect x="64"  y="98" width="6"  height="6"  rx="1" fill={color} opacity="0.08" />

      {/* Far scattered */}
      <rect x="122" y="42" width="3" height="3" rx="0.5" fill={color} opacity="0.05" />
      <rect x="130" y="46" width="2" height="2" rx="0.5" fill={color} opacity="0.04" />
      <rect x="122" y="50" width="3" height="3" rx="0.5" fill={color} opacity="0.05" />
      <rect x="138" y="44" width="2" height="2" rx="0.5" fill={color} opacity="0.03" />
    </svg>
  );
}

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

          {/* Right — brand card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80 lg:h-[420px] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-3xl overflow-hidden shadow-xl flex items-center">

              {/* Grid pattern background */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="herogrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#herogrid)" />
              </svg>

              {/* Lighthouse icon — left anchor */}
              <div className="relative z-10 flex-shrink-0 ml-10">
                <LighthouseIcon
                  className="text-slate-900 drop-shadow-md"
                  accentColor="#2563EB"
                  style={{ width: 64, height: 98 }}
                />
              </div>

              {/* Digital beam — fills the rest of the card */}
              <div className="absolute inset-0 left-[120px] overflow-hidden pointer-events-none">
                <DigitalBeam />
              </div>

              {/* Brand name — bottom of card */}
              <div className="absolute bottom-6 left-10 right-6 z-10">
                <div className="text-slate-950 font-bold text-lg leading-tight">Lighthouse</div>
                <div className="text-blue-600 font-bold text-lg leading-tight">Digi Lab</div>
              </div>

              {/* Accent circles */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-400 opacity-15 rounded-full" />
              <div className="absolute bottom-16 right-8 w-8 h-8 bg-blue-600 opacity-10 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
