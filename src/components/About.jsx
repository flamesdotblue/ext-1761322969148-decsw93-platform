import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 text-slate-300">
          I’m a front‑end developer focused on crafting interactive, accessible, and high‑performance web apps. My toolkit includes React, TypeScript, Tailwind, and Three.js/Spline for 3D interactions. I love turning complex problems into elegant, intuitive interfaces.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">React</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">TypeScript</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Tailwind</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Node.js</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Three.js</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Spline</li>
        </ul>
      </div>
    </section>
  );
}
