import React from 'react';
import { Project } from '../data/projects';
import { Github, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isGithubProject = project.isOnGithub && !!project.githubUrl;

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-200 cursor-pointer ${
        isGithubProject
          ? 'bg-slate-900/90 border-2 border-emerald-500/40 hover:border-emerald-500/70 shadow-lg shadow-emerald-950/20 hover:shadow-emerald-900/30'
          : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 shadow-sm hover:shadow-md hover:shadow-black/40'
      } hover:-translate-y-1`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View details for ${project.name}`}
    >
      <div>
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono font-medium text-slate-500 tabular-nums">
            #{String(project.id).padStart(2, '0')}
          </span>

          {/* CLEAR "On GitHub" BADGE ON ONLY THE THREE PROJECTS */}
          {isGithubProject ? (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 rounded-md shadow-xs">
                <Github className="w-3.5 h-3.5" />
                <span>On GitHub</span>
              </span>
            </div>
          ) : (
            <span className="text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
              {project.category}
            </span>
          )}
        </div>

        {/* Project Name */}
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight mb-2.5 leading-snug">
          {project.name}
        </h3>

        {/* Project Exact One-Line Description */}
        <p className="text-sm text-slate-400 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Footer / Action */}
      <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-3 text-xs">
        {isGithubProject ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            <Github className="w-4 h-4 shrink-0" />
            <span>View Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-slate-500 group-hover:text-slate-400 transition-colors flex items-center gap-1">
            <span>Explore details</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
};
