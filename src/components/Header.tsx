"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";

const nav = [
  { href: "#menu", label: "Menü" },
  { href: "#about", label: "Rólunk" },
  { href: "#hours", label: "Nyitvatartás" },
  { href: "#contact", label: "Kapcsolat" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/henrys-logo.jpg"
              alt="Henry's Burger & Beer logo"
              className="w-11 h-11 rounded-full object-cover border-2 border-white/60 shadow-md"
            />
            <span className="text-3xl sm:text-4xl font-bold tracking-tight leading-none">
              <span
                className={transparent ? "text-white drop-shadow-md italic" : "text-black italic"}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Henry&apos;s
              </span>
            </span>
            <span
              className={`text-xs uppercase tracking-[0.25em] hidden sm:block font-semibold transition-colors ${
                transparent ? "text-white/80" : "text-zinc-500"
              }`}
            >
              Burger &amp; Beer
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white drop-shadow"
                    : "text-zinc-700 hover:text-pink"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+3694367781"
              className="inline-flex items-center gap-2 brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink/20 hover:shadow-pink/40 transition-shadow"
            >
              <Phone className="w-4 h-4" />
              +36 94 367 781
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 transition-colors ${
              transparent ? "text-white" : "text-black"
            }`}
            aria-label="Menü"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-zinc-100">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+3694367781"
                className="mt-2 inline-flex items-center justify-center gap-2 brand-gradient text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                +36 94 367 781
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
