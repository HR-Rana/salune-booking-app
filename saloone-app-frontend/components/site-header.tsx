"use client";

import { useState, type FormEvent } from "react";
import { navLinks } from "@/lib/data";
import { LogoMark, SearchIcon } from "./icons";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08040f]/85 backdrop-blur-xl">
      <div className="container-page flex h-[74px] items-center gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="h-9 w-9 text-gold" />
          <span className="font-display text-[26px] font-semibold tracking-tight text-gold-soft">
            SalonBook
          </span>
        </a>

        <nav className="ml-8 hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-6 text-[13px] font-medium transition-colors ${
                index === 0
                  ? "text-white"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {link.label}
              {index === 0 && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>

        <form
          onSubmit={handleSearch}
          className="ml-auto hidden h-10 w-[220px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 transition focus-within:border-gold/50 md:flex"
        >
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services..."
            aria-label="Search salon services"
            className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/40"
          />
          <button
            type="submit"
            aria-label="Search"
            className="text-white/70 transition hover:text-gold"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a
            href="/signin"
            className="hidden rounded-full border border-gold/60 px-5 py-2 text-xs font-medium text-gold transition hover:bg-gold hover:text-[#140a02] sm:block"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="hidden rounded-full bg-gold px-5 py-2 text-xs font-semibold text-[#241705] transition hover:bg-gold-soft sm:block"
          >
            Sign Up
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0614] lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <form
              onSubmit={handleSearch}
              className="mb-2 flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4"
            >
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services..."
                aria-label="Search salon services"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" aria-label="Search" className="text-gold">
                <SearchIcon className="h-4 w-4" />
              </button>
            </form>

            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition ${
                  index === 0
                    ? "bg-white/[0.06] text-gold"
                    : "text-white/75 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex gap-3">
              <a
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full border border-gold/60 py-2.5 text-center text-xs font-medium text-gold"
              >
                Sign In
              </a>
              <a
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-gold py-2.5 text-center text-xs font-semibold text-[#241705]"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
