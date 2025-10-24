import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm md:text-base text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">My Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <nav className="px-4 py-2 flex flex-col">
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <a
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
