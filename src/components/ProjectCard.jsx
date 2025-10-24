import React from 'react';

export default function ProjectCard({ title, description, tags = [], link = '#', image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="opacity-60"><path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
