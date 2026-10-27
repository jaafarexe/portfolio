import React from 'react';
import { Github, ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              Jaafar Maarouf — Portfolio
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Building useful apps, games and tools that make everyday life easier.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#projects" className="hover:text-slate-200 transition-colors">
              All 31 Projects
            </a>
            <a href="#github-projects" className="hover:text-slate-200 transition-colors">
              GitHub Highlights
            </a>
            <a href="#coming-next" className="hover:text-slate-200 transition-colors">
              Coming Next
            </a>
            <a href="#about" className="hover:text-slate-200 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jaafarexe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@jaafarexe</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Jaafar Maarouf. All rights reserved.
          </div>
          <div>
            Clean, modern, and responsive showcase.
          </div>
        </div>
      </div>
    </footer>
  );
};
