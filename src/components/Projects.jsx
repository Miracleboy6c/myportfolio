import React from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { profileInfo } from "../data/portfolioData";
import { getTechIcon } from "./TechIcons";

const projectCategories = {
  "academic-portal": "Full-Stack Web App",
  "artisans-marketplace": "E-Commerce / Showcase",
  "fintrack-mini": "Fintech Dashboard",
};

export default function Projects({ lang, t }) {
  const isKhmer = lang === "kh";

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 flex items-center gap-1.5">
            <span>// 03.</span>
            <span>{t.projects.sectionTitle}</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 ${
              isKhmer ? "font-khmer" : ""
            }`}
          >
            {t.projects.sectionSubtitle}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, idx) => {
            const category = projectCategories[project.id] || "Web Project";

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 p-6 sm:p-7 hover:border-zinc-300 dark:hover:border-zinc-700 hover-card shadow-2xs"
              >
                <div>
                  {/* Header Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800/60">
                    <span className="font-mono text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                      0{idx + 1} // {category}
                    </span>
                    <span className="text-[11px] font-medium font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/50">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${
                      isKhmer ? "font-khmer" : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-4 ${
                      isKhmer ? "font-khmer" : ""
                    }`}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5 ${
                      isKhmer ? "font-khmer leading-loose" : ""
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <span className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5">•</span>
                        <span className={isKhmer ? "font-khmer leading-relaxed" : ""}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/50"
                      >
                        {getTechIcon(tech, "w-3 h-3")}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      <span>{t.projects.viewCode}</span>
                    </a>

                    <a
                      href={profileInfo.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <span>{isKhmer ? "សាកសួរគម្រោង" : "Inquire Project"}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
