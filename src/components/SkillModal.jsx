import React from "react";
import { X, ExternalLink, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { getTechIcon } from "./TechIcons";

const techDocUrls = {
  "React.js": "https://react.dev",
  "JavaScript (ES6+)": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Tailwind CSS": "https://tailwindcss.com",
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "Bootstrap": "https://getbootstrap.com",
  "PHP": "https://www.php.net",
  "Laravel": "https://laravel.com",
  "MySQL": "https://www.mysql.com",
  "PostgreSQL": "https://www.postgresql.org",
  "Python": "https://www.python.org",
  "Java": "https://dev.java",
  "Docker": "https://www.docker.com",
  "Git": "https://git-scm.com",
  "GitHub": "https://github.com",
  "Vite": "https://vite.dev",
  "Postman": "https://www.postman.com",
};

export default function SkillModal({ skill, isOpen, onClose, lang, showToast }) {
  if (!isOpen || !skill) return null;

  const isKhmer = lang === "kh";
  const docUrl = techDocUrls[skill.name] || "https://google.com/search?q=" + encodeURIComponent(skill.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in-up">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0f1422] rounded-3xl border border-indigo-500/30 dark:border-indigo-400/30 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top colored header */}
        <div className="p-6 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-xs">
              {getTechIcon(skill.name, "w-6 h-6")}
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {skill.category}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    skill.isLearning
                      ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                      : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                  }`}
                >
                  {skill.isLearning ? (isKhmer ? "កំពុងស្វែងយល់" : "Exploring") : (isKhmer ? "ជំនាញស្នូល" : "Core Tech")}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-xs sm:text-sm">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isKhmer ? "ការអនុវត្ត និងបទពិសោធន៍" : "Practical Usage"}</span>
            </h4>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {isKhmer ? skill.descKh : skill.descEn}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800 space-y-2">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              {isKhmer ? "កម្រិតជំនាញ និងការប្តេជ្ញា" : "Proficiency & Application"}
            </div>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                {skill.isLearning
                  ? isKhmer
                    ? "កំពុងសិក្សាគ្រឹះ និងអនុវត្តគម្រោងខ្នាតតូច"
                    : "Actively studying fundamentals & building pilot implementations"
                  : isKhmer
                    ? "ជំនាញប្រើប្រាស់ជាប្រចាំក្នុងគម្រោងជាក់ស្តែង"
                    : "Used continuously in active projects and production workflows"}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/70 flex items-center justify-between">
          <a
            href={docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>{isKhmer ? "មើលឯកសារផ្លូវការ" : "Official Documentation"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isKhmer ? "យល់ព្រម" : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
}
