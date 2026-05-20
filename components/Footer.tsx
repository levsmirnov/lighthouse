import LighthouseLogo from "./LighthouseLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white px-6 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <LighthouseLogo variant="dark" iconHeight={30} />
          <span className="text-slate-500 text-sm">
            © 2026 Lighthouse Digi Lab. All rights reserved.
          </span>
        </div>
        <p className="text-slate-400 text-sm">Built with ❤️ in Helsinki</p>
      </div>
    </footer>
  );
}
