import React from 'react';

export default function TailwindSection() {
  return (
    <div className="w-full bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
      <div className="flex-grow space-y-6">
        <span className="inline-block bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-indigo-500/20">
          Tailwind v4 View
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          Atomic Utility <span className="text-indigo-400">Workspace</span>
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          This specific grid section is styled live using native utility classes built inside your existing Router layout.
        </p>
      </div>
      <div className="w-32 h-32 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
        <span className="text-white text-4xl font-bold">⚡</span>
      </div>
    </div>
  );
}
