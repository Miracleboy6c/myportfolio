import React, { useState } from "react";
import { Sparkles, Code, Database, Compass, Wrench, Search, X, ExternalLink, ArrowRight } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import { getTechIcon } from "./TechIcons";

export default function TechStack({ lang, t, onSelectSkill, showToast }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      skill.name.toLowerCase().includes(query) ||
      skill.descEn.toLowerCase().includes(query) ||
      skill.descKh.includes(query) ||
      skill.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (skill) => {
    if (onSelectSkill) {
      onSelectSkill(skill);
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-indigo-500/10 dark:border-indigo-500/20 bg-zinc-50/60 dark:bg-[#070b16]/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
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

          {/* Honest Note with gradient accent */}
          <div className="text-xs text-zinc-500 dark:text-zinc-400 border border-indigo-500/20 dark:border-indigo-500/30 bg-white/80 dark:bg-zinc-900/60 p-3.5 rounded-2xl max-w-sm backdrop-blur-md shadow-xs">
            <span className={isKhmer ? "font-khmer leading-relaxed" : ""}>
              {t.skills.note}
            </span>
          </div>
        </div>

        {/* Controls Bar: Category Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25 border-transparent font-bold scale-105"
                      : "bg-white/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/40 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium"
                  } ${isKhmer ? "font-khmer" : ""}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-indigo-400"}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isKhmer ? "ស្វែងរកបច្ចេកវិទ្យា..." : "Search tech stack..."}
              className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-400 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
              {isKhmer ? "រកមិនឃើញបច្ចេកវិទ្យាដែលត្រូវនឹងការស្វែងរក" : `No technologies matching "${searchQuery}"`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-4 py-1.5 rounded-xl bg-indigo-500 text-white text-xs font-semibold hover:bg-indigo-600 transition-colors shadow-xs"
            >
              {isKhmer ? "កំណត់ឡើងវិញ" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isLearning = skill.isLearning;
              return (
                <div
                  key={skill.name}
                  onClick={() => handleCardClick(skill)}
                  className={`group relative p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0d1222]/80 hover:bg-white dark:hover:bg-[#11172c] hover-card shadow-2xs flex flex-col justify-between cursor-pointer transition-all duration-300 ${skill.borderGlow || ""}`}
                  title="Click to view details & documentation"
                >
                  <div>
                    {/* Top row with icon & badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/60 dark:border-zinc-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                          {getTechIcon(skill.name, "w-5 h-5")}
                        </div>
                        <div>
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {/* Level / Status Badge */}
                      {isLearning ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-lg border border-amber-500/30">
                          <Compass className="w-3 h-3 text-amber-500" />
                          <span>{t.skills.legend.exploring}</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          {skill.level}
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2 ${
                        isKhmer ? "font-khmer leading-relaxed" : ""
                      }`}
                    >
                      {isKhmer ? skill.descKh : skill.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-medium">
                    <span>{isKhmer ? "ពិនិត្យលម្អិត" : "Inspect details"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
