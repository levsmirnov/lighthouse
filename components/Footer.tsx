export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white px-6 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-lg font-bold">
            <span className="text-white">Lighthouse </span>
            <span className="text-blue-400">Digi Lab</span>
          </span>
          <span className="text-slate-500 text-sm">
            © 2026 Lighthouse Digi Lab. All rights reserved.
          </span>
        </div>
        <p className="text-slate-400 text-sm">Built with ❤️ in Helsinki</p>
      </div>
    </footer>
  );
}
