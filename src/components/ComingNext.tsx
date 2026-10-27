import React from 'react';
import { Sparkles, Terminal, Wrench, ShieldCheck, ArrowUpRight, Github } from 'lucide-react';

export const ComingNext: React.FC = () => {
  const upcomingCategories = [
    {
      title: 'Developer & Workflow Utilities',
      description: 'Zero-latency JSON diffing, regex debugger, JWT inspect, curl-to-code converter, and environment sync helpers.',
      count: '12 tools'
    },
    {
      title: 'Everyday Practical Calculations',
      description: 'Freelance contract & rate estimator, compounding yield visualizer, and local time overlap coordinator.',
      count: '9 tools'
    },
    {
      title: 'Media & File Manipulators',
      description: 'Hermetic client-side image minifier, SVG optimizer, color palette extractor, and document format cleaners.',
      count: '9 tools'
    },
    {
      title: 'Personal Organization & Focus',
      description: 'Local-first clipboard vault, fast markdown snippet scratchpad, and daily micro-journaling CLI companion.',
      count: '8 tools'
    }
  ];

  return (
    <section id="coming-next" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl">
            {/* Section kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-4 tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Roadmap & Philosophy</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Coming Next
            </h2>

            {/* The exact prompt statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 mb-8">
              <p className="text-lg sm:text-xl font-semibold text-indigo-200 leading-snug">
                38 more genuinely useful tools are being built (no filler games).
              </p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Every upcoming project is deliberately scoped to eliminate real daily friction, automate repetitive tasks, and provide fast, privacy-respecting client utilities that work offline.
              </p>
            </div>

            {/* Upcoming Roadmap Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {upcomingCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-medium text-indigo-400 tabular-nums">
                      {item.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom action banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Active development in progress · Total targeted catalog: 69 utilities</span>
              </div>

              <a
                href="https://github.com/jaafarexe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-lg border border-slate-700 transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>Follow on GitHub for Releases</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
