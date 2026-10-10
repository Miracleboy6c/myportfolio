import React, { useState } from "react";
import { ArrowDown, Send, ArrowUpRight, Copy, Check, Terminal, MapPin, Layers, Briefcase } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Hero({ lang, t }) {
  const isKhmer = lang === "kh";
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const developerJsonSnippet = JSON.stringify(
    {
      name: profileInfo.name,
      khmerName: profileInfo.nameKhmer,
      role: "Junior Full-Stack",
      location: "Battambang, Cambodia",
      coreStack: ["React", "Tailwind", "Python", "PHP", "Laravel", "MySQL"],
      exploring: ["Java", "Docker"],
      openToOpportunities: true,
    },
    null,
    2
  );

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(developerJsonSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-200/60 dark:border-zinc-800/60">
      {/* Background Engineer Grid with Vignette Mask */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-70"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-6 shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.hero.status}</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2] mb-6 ${
                isKhmer ? "font-khmer leading-snug" : ""
              }`}
            >
              {isKhmer ? (
                <>
                  សួស្តី! ខ្ញុំបាទឈ្មោះ{" "}
                  <span className="text-zinc-900 dark:text-white underline decoration-zinc-300 dark:decoration-zinc-700 decoration-2 underline-offset-4">
                    {profileInfo.nameKhmer}
                  </span>{" "}
                  — និស្សិតព័ត៌មានវិទ្យា & Web Developer នៅក្រុងបាត់ដំបង។
                </>
              ) : (
                "Crafting modern web applications with precision, speed & clean architecture."
              )}
            </h1>

            {/* Subhead */}
            <p
              className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl ${
                isKhmer ? "font-khmer leading-loose" : ""
              }`}
            >
              {t.hero.subhead}
            </p>

            {/* Actions CTA Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold transition-all shadow-xs"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href={profileInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-sky-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>{t.hero.contactMe}</span>
              </a>

              <a
                href={`tel:${profileInfo.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <span>{profileInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Vercel/Linear Style Minimal Code Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 shadow-xs overflow-hidden backdrop-blur-xs hover-card">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50/90 dark:bg-zinc-900/90 border-b border-zinc-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 pl-2">
                    <Terminal className="w-3 h-3 text-indigo-500" />
                    <span>developer.config.json</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors px-1.5 py-0.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-800"
                  title="Copy JSON config"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 sm:p-5 font-mono text-xs space-y-1.5 leading-relaxed bg-zinc-50/50 dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-300">
                <div><span className="text-zinc-400">{"{"}</span></div>
                <div className="pl-4">
                  <span className="text-zinc-400">"name":</span> <span className="text-emerald-600 dark:text-emerald-400">"{profileInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"khmerName":</span> <span className="text-emerald-600 dark:text-emerald-400">"{profileInfo.nameKhmer}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"role":</span> <span className="text-indigo-600 dark:text-indigo-400">"Junior Full-Stack"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"location":</span> <span className="text-zinc-600 dark:text-zinc-300">"Battambang, Cambodia"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"coreStack":</span> [
                  <span className="text-indigo-500">"React"</span>,{" "}
                  <span className="text-indigo-500">"Tailwind"</span>,{" "}
                  <span className="text-indigo-500">"Python"</span>,{" "}
                  <span className="text-indigo-500">"PHP"</span>,{" "}
                  <span className="text-indigo-500">"Laravel"</span>,{" "}
                  <span className="text-indigo-500">"MySQL"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"exploring":</span> [
                  <span className="text-amber-500">"Java"</span>,{" "}
                  <span className="text-amber-500">"Docker"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"openToOpportunities":</span> <span className="text-emerald-500">true</span>
                </div>
                <div><span className="text-zinc-400">{"}"}</span></div>

                <div className="pt-2 mt-2 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>readyForInterview: available immediately</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-10">
          <div className="p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 hover-card">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-indigo-500" />
              <span>{t.hero.stats.focus}</span>
            </div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {t.hero.stats.focusVal}
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 hover-card">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-sky-500" />
              <span>{t.hero.stats.location}</span>
            </div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {isKhmer ? "ក្រុងបាត់ដំបង កម្ពុជា" : profileInfo.locationEn}
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 hover-card">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-3 h-3 text-emerald-500" />
              <span>{t.hero.stats.status}</span>
            </div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {t.hero.stats.statusVal}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
