import React from 'react';
import { Github, ArrowRight, Sparkles, Terminal, Code2, Layers } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtle unboxed kicker with dot separator */}
          <div className="flex items-center gap-2 text-xs font-medium text-indigo-400 mb-6 tracking-wide">
            <span className="flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Full-Stack & Systems Developer</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Software Engineer</span>
          </div>

          {/* Large Heading: "Jaafar Maarouf" */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 text-balance">
            Jaafar Maarouf
          </h1>

          {/* One-line tagline: "Building useful apps, games and tools that make everyday life easier." */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
            Building useful apps, games and tools that make everyday life easier.
          </p>

          {/* Prominent link/button to https://github.com/jaafarexe */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              href="https://github.com/jaafarexe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-150 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-150 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Explore 31 Projects</span>
            </button>
          </div>

          {/* Clean unboxed proof metrics */}
          <div className="pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-400">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">31</div>
              <div className="text-xs text-slate-400 mt-1">Live Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">3</div>
              <div className="text-xs text-slate-400 mt-1">Open on GitHub</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400 tabular-nums">38+</div>
              <div className="text-xs text-slate-400 mt-1">Tools Coming Next</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">100%</div>
              <div className="text-xs text-slate-400 mt-1">Mobile & Desktop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
