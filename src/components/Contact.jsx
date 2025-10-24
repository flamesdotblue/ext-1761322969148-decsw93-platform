import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Let’s build something</h2>
        <p className="mt-2 text-slate-300">Got an idea or an opportunity? Drop a message and I’ll get back to you.</p>

        <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-300">Name</label>
            <input className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-300">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="jane@email.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Tell me about your project..." />
          </div>
          <div className="sm:col-span-2">
            <button type="button" className="w-full rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow ring-1 ring-cyan-300/50 hover:bg-cyan-300">
              Send message
            </button>
            <p className="mt-2 text-center text-xs text-slate-400">This is a demo form. Wire it up to your backend or email service.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
