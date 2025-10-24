import React from 'react';

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind',
    'Three.js / Spline',
    'Framer Motion',
    'Node.js',
    'Accessibility',
    'Testing',
  ];

  return (
    <section id="about" className="relative py-20 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_250px_at_10%_20%,rgba(236,72,153,0.15),transparent),radial-gradient(500px_250px_at_90%_80%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I am a frontend engineer focused on creating delightful, performant, and accessible web experiences. I enjoy working across the stack, but my heart lives in design systems, motion, and 3D on the web. I collaborate closely with designers and product teams to ship features that feel polished and purposeful.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            When I am not coding, you can find me experimenting with Spline scenes, prototyping in Figma, or exploring new visual interaction patterns.
          </p>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div>
                <p className="text-white/50">Experience</p>
                <p className="mt-1">5+ years in frontend</p>
              </div>
              <div>
                <p className="text-white/50">Focus</p>
                <p className="mt-1">Design systems & Motion</p>
              </div>
              <div>
                <p className="text-white/50">Location</p>
                <p className="mt-1">Remote-friendly</p>
              </div>
              <div>
                <p className="text-white/50">Availability</p>
                <p className="mt-1">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
