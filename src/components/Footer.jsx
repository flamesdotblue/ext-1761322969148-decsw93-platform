import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-cyan-300">Twitter</a>
          <a href="#" className="hover:text-cyan-300">GitHub</a>
          <a href="#" className="hover:text-cyan-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
