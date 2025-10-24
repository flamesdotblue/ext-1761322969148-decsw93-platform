import React, { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
          <span>MyPortfolio</span>
        </a>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-100">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-slate-200 transition hover:text-cyan-300">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="rounded-md bg-cyan-400 px-3 py-1.5 text-sm font-semibold text-slate-950 shadow ring-1 ring-cyan-300/50 hover:bg-cyan-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 py-3 sm:hidden">
          <ul className="grid gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
