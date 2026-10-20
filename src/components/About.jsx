import React from "react";
import { ShieldCheck, HeartHandshake, Rocket, ArrowUpRight, GraduationCap, Code2, Server, FileText, Check, Copy } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function About({ lang, t, onOpenResume, showToast }) {
  const isKhmer = lang === "kh";
  const valueIcons = [ShieldCheck, HeartHandshake, Rocket];
  const valueColors = [
    {
      border: "hover:border-indigo-500/50 hover:shadow-indigo-500/20",
      bg: "from-indigo-500/15 to-purple-500/10",
      iconColor: "text-indigo-500",
    },
    {
      border: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
      bg: "from-cyan-500/15 to-blue-500/10",
      iconColor: "text-cyan-500",
    },
    {
      border: "hover:border-pink-500/50 hover:shadow-pink-500/20",
      bg: "from-pink-500/15 to-rose-500/10",
      iconColor: "text-pink-500",
    },
  ];

  const handleCopyFact = (label, value) => {
    navigator.clipboard.writeText(value);
    if (showToast) {
      showToast({
        title: isKhmer ? "បានចម្លង" : "Copied to Clipboard",
        message: `${label}: ${value}`,
        type: "success",
      });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 border-b border-indigo-500/10 dark:border-indigo-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
            <span>// 01.</span>
            <span>{t.about.sectionTitle}</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 ${
              isKhmer ? "font-khmer" : ""
            }`}
          >
            {t.about.sectionSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Narrative & Values */}
          <div className="lg:col-span-7 space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className={isKhmer ? "font-khmer leading-loose" : ""}>{t.about.p1}</p>
            <p className={isKhmer ? "font-khmer leading-loose" : ""}>{t.about.p2}</p>
            <p className={isKhmer ? "font-khmer leading-loose" : ""}>{t.about.p3}</p>

            {/* 3 Core Values Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.about.values.map((v, i) => {
                const IconComponent = valueIcons[i] || ShieldCheck;
                const style = valueColors[i] || valueColors[0];
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 hover-card shadow-xs transition-all ${style.border}`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${style.bg} flex items-center justify-center mb-3 shadow-2xs`}>
                      <IconComponent className={`w-4 h-4 ${style.iconColor}`} />
                    </div>
                    <h4
                      className={`font-bold text-xs text-zinc-900 dark:text-zinc-100 mb-1 ${
                        isKhmer ? "font-khmer" : ""
                      }`}
                    >
                      {v.title}
                    </h4>
                    <p
                      className={`text-xs text-zinc-500 dark:text-zinc-400 leading-normal ${
                        isKhmer ? "font-khmer" : ""
                      }`}
                    >
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action buttons under About */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isKhmer ? "ពិនិត្យប្រវត្តិរូបសង្ខេប (CV)" : "Read Full Resume"}</span>
              </button>

              <a
                href={profileInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-indigo-500/30 dark:border-indigo-400/30 bg-white/80 dark:bg-zinc-900/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all hover:scale-105 shadow-xs"
              >
                <span>{isKhmer ? "ជជែកតាម Telegram" : "Chat on Telegram"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Highlights Table & Milestones */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-indigo-500/20 dark:border-indigo-500/30 bg-white/80 dark:bg-[#0c101d]/80 p-5 sm:p-6 shadow-sm hover-card backdrop-blur-md">
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-5 flex items-center justify-between">
                <span>{t.about.quickFactsTitle}</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30 font-mono">
                  Verified Data
                </span>
              </h3>

              <dl className="space-y-3.5">
                {t.about.facts.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCopyFact(item.label, item.value)}
                    className="group cursor-pointer pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-0 last:pb-0 transition-colors hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 p-1.5 rounded-xl -mx-1.5"
                    title="Click to copy"
                  >
                    <dt className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5 flex items-center justify-between">
                      <span>{item.label}</span>
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" />
                    </dt>
                    <dd className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {isKhmer ? "ទំនាក់ទំនងតាម Telegram:" : "Reach out on Telegram:"}
                </span>
                <a
                  href={profileInfo.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>{profileInfo.telegramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Academic & Engineering Milestones with colorful pill badges */}
            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 text-xs space-y-2.5 shadow-2xs">
              <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 font-bold">
                Engineering Journey
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="p-1 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span>IT Major, Battambang Cambodia</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="p-1 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                </span>
                <span>Frontend: React 19, Tailwind v4, Modern ES6+</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="p-1 rounded-lg bg-rose-500/15 text-rose-600 dark:text-rose-400">
                  <Server className="w-3.5 h-3.5" />
                </span>
                <span>Backend: PHP, Laravel, MySQL, Docker (basics)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
