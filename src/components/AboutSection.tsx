import React from 'react';
import { Github, Code2, Cpu, Smartphone, Zap, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: Zap,
      title: 'Fast & Lightweight',
      description: 'Zero bloatware or unnecessary tracking. Built to execute in milliseconds on any hardware.'
    },
    {
      icon: Smartphone,
      title: 'Responsive & Touch-First',
      description: 'Designed from day one to deliver a seamless experience on phones, tablets, and wide desktop displays.'
    },
    {
      icon: Code2,
      title: 'Clean Engineering',
      description: 'Strict TypeScript typing, modular architecture, and modern Web APIs with predictable state.'
    },
    {
      icon: Cpu,
      title: 'Real Everyday Value',
      description: 'Every project targets an actual human requirement, whether it is calculating, tracking, studying, or playing.'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
              About the Developer
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Jaafar Maarouf
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Software engineer dedicated to crafting intuitive digital products. From responsive single-page web applications and interactive canvas games to production-ready dashboards and utility engines, every project is engineered with an emphasis on speed, clarity, and durability.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Interested in open-source collaboration, exploring modern web standards, and delivering tools that respect user focus.
            </p>

            <div className="pt-2">
              <a
                href="https://github.com/jaafarexe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>github.com/jaafarexe</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/70 text-indigo-400 border border-indigo-800/40 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
