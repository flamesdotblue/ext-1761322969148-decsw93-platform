import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate grid min-h-[80vh] grid-cols-1 items-center gap-8 py-10 sm:py-14 lg:min-h-[88vh] lg:grid-cols-2">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Left copy */}
      <div className="relative z-10 flex flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
          Tech • Interactive • Modern
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I’m <span className="text-cyan-400">Your Name</span>
        </h1>
        <p className="max-w-xl text-slate-300">
          I build playful, modern web experiences with delightful UX and robust engineering. Explore my work below and let’s create something amazing together.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow ring-1 ring-cyan-300/50 hover:bg-cyan-300">View Projects</a>
          <a href="#contact" className="rounded-md px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10 hover:bg-white/10">Get in touch</a>
        </div>
        <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
          <span>Available for freelance</span>
          <span>•</span>
          <span>Based in Anywhere</span>
        </div>
      </div>

      {/* Right 3D scene */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl lg:aspect-square">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
}
