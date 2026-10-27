import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ComingNext } from './components/ComingNext';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { PROJECTS, Project } from './data/projects';
import { Search, Github, ArrowUpRight, Filter, X, Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      if (selectedCategory === 'On GitHub') {
        if (!project.isOnGithub) return false;
      } else if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesCategory = project.category.toLowerCase().includes(query);
        const matchesTech = project.techStack?.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesCategory || matchesTech;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const githubProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.isOnGithub && p.githubUrl);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={handleScrollToProjects} />

        {/* GitHub Spotlight Banner (Dedicated showcase of the 3 specified open source projects) */}
        <section id="github-projects" className="py-12 border-y border-slate-900 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <Github className="w-4 h-4" />
                  <span>Open Source Highlights</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Available On GitHub
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-xl">
                  Public repositories with complete source code, documentation, and live demonstrations.
                </p>
              </div>

              <a
                href="https://github.com/jaafarexe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
              >
                <span>Browse all repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* 3 GitHub Featured Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {githubProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-emerald-500/40 hover:border-emerald-500 transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-950/20 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-slate-500 tabular-nums">
                      #{String(project.id).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 rounded-md">
                      <Github className="w-3 h-3" />
                      <span>On GitHub</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Section: Responsive Grid listing ALL 31 projects */}
        <section id="projects" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Comprehensive Catalog</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  All 31 Projects
                </h2>
                <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
                  Every project built with clean code and high performance. Each card provides its exact name and functional description.
                </p>
              </div>

              {/* Fast live search input */}
              <div className="w-full lg:w-80">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects by keyword..."
                    aria-label="Search projects"
                    className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category filter segmented control */}
            <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-900/60 rounded-xl border border-slate-800/80 w-fit">
              {['All', 'On GitHub', 'Productivity', 'Games', 'Business & SaaS', 'Utilities', 'Lifestyle'].map(
                (cat) => {
                  const isActive = selectedCategory === cat;
                  const count =
                    cat === 'All'
                      ? PROJECTS.length
                      : cat === 'On GitHub'
                      ? githubProjects.length
                      : PROJECTS.filter((p) => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                          isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* Results counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
              <div>
                Showing <span className="font-semibold text-white font-mono">{filteredProjects.length}</span> of{' '}
                <span className="font-semibold text-white font-mono">{PROJECTS.length}</span> projects
                {selectedCategory !== 'All' && <span> in {selectedCategory}</span>}
                {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
              </div>
              {(searchQuery || selectedCategory !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs text-indigo-400 hover:text-indigo-300 hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={(p) => setActiveProject(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
                <p className="text-slate-400 text-sm mb-3">
                  No projects found matching your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  View All 31 Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Short "Coming next" section */}
        <ComingNext />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
