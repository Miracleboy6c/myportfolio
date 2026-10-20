import React, { useState } from "react";
import { X, ExternalLink, Send, Layers, CheckCircle2, Copy, Check, Terminal, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getTechIcon } from "./TechIcons";
import { profileInfo } from "../data/portfolioData";

export default function ProjectModal({ project, isOpen, onClose, lang, showToast }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const isKhmer = lang === "kh";

  const handleCopyDetails = () => {
    const text = `
Project: ${project.title}
Role: ${project.role}
Stack: ${project.stack.join(", ")}
Description: ${project.description}
Highlights: ${project.highlights.join("; ")}
Repository: ${project.github}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    if (showToast) {
      showToast({
        title: isKhmer ? "បានចម្លងព័ត៌មានគម្រោង" : "Project Info Copied!",
        message: isKhmer ? `បានចម្លងព័ត៌មាន ${project.title}` : `Copied ${project.title} summary to clipboard.`,
        type: "success",
      });
    }
  };

  const telegramProjectUrl = `${profileInfo.telegramUrl}?text=${encodeURIComponent(
    `Hello Sithy, I saw your project "${project.title}" on your portfolio and would like to ask about it!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in-up">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f1422] rounded-3xl border border-indigo-500/30 dark:border-indigo-400/30 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Banner Header */}
        <div className="relative h-44 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-950 p-6 flex flex-col justify-between overflow-hidden">
          {/* Ambient Glow Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{project.role}</span>
            </span>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-200/90 font-medium mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-2">
              {isKhmer ? "អំពីគម្រោង" : "Project Overview"}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{isKhmer ? "លក្ខណៈពិសេសចម្បង" : "Key Architectural Highlights"}</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-mono font-bold text-[10px]">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed mt-0.5">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-pink-500" />
              <span>{isKhmer ? "បច្ចេកវិទ្យាដែលបានប្រើ" : "Technologies Deployed"}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 font-medium"
                >
                  {getTechIcon(tech, "w-4 h-4")}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="p-5 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/70 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopyDetails}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500">{isKhmer ? "បានចម្លង" : "Copied"}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{isKhmer ? "ចម្លងព័ត៌មាន" : "Copy Info"}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <SiGithub className="w-3.5 h-3.5" />
              <span>{isKhmer ? "កូដប្រភព" : "GitHub Repo"}</span>
            </a>

            <a
              href={telegramProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isKhmer ? "សាកសួរតាម Telegram" : "Inquire via Telegram"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
