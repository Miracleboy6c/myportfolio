import React, { useState } from "react";
import { ArrowUpRight, FolderGit2, Eye, ExternalLink, Sparkles, Send, Copy, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { profileInfo } from "../data/portfolioData";
import { getTechIcon } from "./TechIcons";

const projectCategories = {
  "academic-portal": "Full-Stack Web App",
  "artisans-marketplace": "E-Commerce / Showcase",
  "fintrack-mini": "Fintech Dashboard",
};

const projectGradients = [
  "from-indigo-600/10 via-purple-600/5 to-pink-600/10 border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/20",
  "from-cyan-600/10 via-sky-600/5 to-blue-600/10 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20",
  "from-emerald-600/10 via-teal-600/5 to-cyan-600/10 border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/20",
];

export default function Projects({ lang, t, onSelectProject, showToast }) {
  const isKhmer = lang === "kh";
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: isKhmer ? "គម្រោងទាំងអស់" : "All Projects" },
    { id: "Full-Stack", label: "Full-Stack" },
    { id: "Frontend", label: "Frontend" },
  ];

  const filteredProjects = t.projects.items.filter((p) => {
    if (filter === "all") return true;
    return p.role.toLowerCase().includes(filter.toLowerCase());
  });

  const handleInquire = (project) => {
    const text = encodeURIComponent(
      `Hello Sithy, I am interested in your project "${project.title}" from your portfolio!`
    );
    window.open(`${profileInfo.telegramUrl}?text=${text}`, "_blank");
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-indigo-500/10 dark:border-indigo-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
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

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200/60 dark:border-zinc-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const category = projectCategories[project.id] || "Web Project";
            const gradientStyle = projectGradients[idx % projectGradients.length];

            return (
              <div
                key={project.id}
                className={`group flex flex-col justify-between rounded-3xl border bg-gradient-to-b ${gradientStyle} bg-white/70 dark:bg-[#0c101d]/80 p-6 sm:p-7 hover-card shadow-sm transition-all duration-300 backdrop-blur-md`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200/60 dark:border-zinc-800/60">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      0{idx + 1} // {category}
                    </span>
                    <span className="text-[11px] font-semibold font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
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

                  {/* Highlights Bullet List with colorful dots */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                        <span className={isKhmer ? "font-khmer leading-relaxed" : ""}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Stack Badges with colorful icons */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 rounded-lg bg-zinc-100/90 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 font-medium"
                      >
                        {getTechIcon(tech, "w-3 h-3")}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-xs hover:scale-105 transition-all"
                      title="View full project modal"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isKhmer ? "មើលលម្អិត" : "Details"}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        title={t.projects.viewCode}
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleInquire(project)}
                        className="p-2 rounded-xl text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors"
                        title="Inquire on Telegram"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
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
