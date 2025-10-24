import React from 'react';
import ProjectCard from './ProjectCard';

const items = [
  {
    title: 'Interactive 3D Landing',
    description: 'A modern landing page with Spline/Three.js interactions and smooth animations.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    image: '',
  },
  {
    title: 'Design System',
    description: 'A scalable UI kit with tokens, components, and theming.',
    tags: ['Design Tokens', 'Tailwind', 'Storybook'],
    link: '#',
    image: '',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Websocket‑powered analytics with responsive charts and filters.',
    tags: ['Vite', 'TypeScript', 'WebSocket'],
    link: '#',
    image: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 text-slate-300">A selection of things I’ve built recently.</p>
        </div>
        <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">Work with me →</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
