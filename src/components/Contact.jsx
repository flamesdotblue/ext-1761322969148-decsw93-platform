import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_250px_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something great</h2>
          <p className="mt-3 text-white/70 max-w-xl">
            I’m available for freelance work, contract roles, and full-time opportunities. Email me or say hi on socials.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
