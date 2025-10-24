import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Card = ({ title, description, tags = [], demo = '#', repo = '#' }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/20 transition overflow-hidden">
    <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(200px_150px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(200px_150px_at_110%_120%,rgba(167,139,250,0.25),transparent)]" />
    <div className="relative z-10">
      <div className="h-32 w-full rounded-xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-indigo-400/20 border border-white/10 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[11px] rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a
          href={demo}
          className="inline-flex items-center gap-2 text-sm text-white hover:text-white/90"
          target="_blank" rel="noreferrer"
        >
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
        <a
          href={repo}
          className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          target="_blank" rel="noreferrer"
        >
          <Github className="h-4 w-4" /> Source
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Landing',
      description: 'A playful landing page integrating Spline and React with smooth interactions.',
      tags: ['React', 'Spline', 'Framer Motion'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'Realtime Dashboard',
      description: 'Analytics dashboard with responsive charts and dark mode support.',
      tags: ['Vite', 'Tailwind', 'Recharts'],
      demo: '#',
      repo: '#',
    },
    {
      title: 'Design System Kit',
      description: 'Reusable UI components with accessibility-first patterns.',
      tags: ['TypeScript', 'Radix UI', 'Storybook'],
      demo: '#',
      repo: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A selection of work exploring motion, 3D, and clean, accessible UI.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white">Get in touch</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
