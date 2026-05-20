"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/Logo Trans.png"
            alt="Lighthouse Digi Lab"
            className="h-10 w-auto"
          />
          <div className="leading-none">
            <div className="font-bold text-lg leading-tight text-slate-950">Lighthouse</div>
            <div className="font-bold text-lg leading-tight text-blue-600">Digi Lab</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
            About
          </a>
          <a href="#work" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
            Our Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-5">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
          <a href="#work" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Our Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </div>
      )}
    </header>
  );
}
