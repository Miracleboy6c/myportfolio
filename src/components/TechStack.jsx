import React, { useState } from "react";
import { Sparkles, Code, Database, Compass, Wrench } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import { getTechIcon } from "./TechIcons";

export default function TechStack({ lang, t }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const isKhmer = lang === "kh";

  const counts = {
    all: skillsData.length,
    frontend: skillsData.filter((s) => s.category === "frontend").length,
    backend: skillsData.filter((s) => s.category === "backend").length,
    exploring: skillsData.filter((s) => s.category === "exploring").length,
    tools: skillsData.filter((s) => s.category === "tools").length,
  };

  const categories = [
    { id: "all", label: t.skills.categories.all, icon: Sparkles, count: counts.all },
    { id: "frontend", label: t.skills.categories.frontend, icon: Code, count: counts.frontend },
    { id: "backend", label: t.skills.categories.backend, icon: Database, count: counts.backend },
    { id: "exploring", label: t.skills.categories.exploring, icon: Compass, count: counts.exploring },
    { id: "tools", label: t.skills.categories.tools, icon: Wrench, count: counts.tools },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 flex items-center gap-1.5">
              <span>// 02.</span>
              <span>{t.skills.sectionTitle}</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 ${
                isKhmer ? "font-khmer" : ""
              }`}
            >
              {t.skills.sectionSubtitle}
            </h2>
          </div>

          {/* Honest Note */}
          <div className="text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 p-3 rounded-xl max-w-sm backdrop-blur-xs">
            <span className={isKhmer ? "font-khmer leading-relaxed" : ""}>
              {t.skills.note}
            </span>
          </div>
        </div>

        {/* Category Filter Tabs with Count Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all duration-150 border ${
                  isActive
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs border-transparent font-semibold"
                    : "bg-white/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium"
                } ${isKhmer ? "font-khmer" : ""}`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white dark:text-zinc-900" : "text-zinc-400"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive
                      ? "bg-white/20 dark:bg-black/20 text-white dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => {
            const isLearning = skill.isLearning;
            return (
              <div
                key={skill.name}
                className="group relative p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover-card shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/60 dark:border-zinc-700/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        {getTechIcon(skill.name, "w-4 h-4 sm:w-5 sm:h-5")}
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 block tracking-tight">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Level / Status Badge */}
                    {isLearning ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <Compass className="w-3 h-3 text-amber-500" />
                        <span>{t.skills.legend.exploring}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60">
                        {skill.level}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2.5 ${
                      isKhmer ? "font-khmer leading-relaxed" : ""
                    }`}
                  >
                    {isKhmer ? skill.descKh : skill.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
