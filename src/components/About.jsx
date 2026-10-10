import React from "react";
import { ShieldCheck, HeartHandshake, Rocket, ArrowUpRight, GraduationCap, Code2, Server } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function About({ lang, t }) {
  const isKhmer = lang === "kh";
  const valueIcons = [ShieldCheck, HeartHandshake, Rocket];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 flex items-center gap-1.5">
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
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover-card"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4 text-indigo-500" />
                    </div>
                    <h4
                      className={`font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1 ${
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
          </div>

          {/* Right: Highlights Table & Human Journey */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 shadow-2xs hover-card">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-5 flex items-center justify-between">
                <span>{t.about.quickFactsTitle}</span>
                <span className="text-[10px] text-emerald-500 font-mono">Verified Info</span>
              </h3>

              <dl className="space-y-3.5">
                {t.about.facts.map((item, idx) => (
                  <div
                    key={idx}
                    className="pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-0 last:pb-0"
                  >
                    <dt className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </dt>
                    <dd className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">
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
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>{profileInfo.telegramHandle}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Academic & Engineering Milestones */}
            <div className="p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-900/30 text-xs space-y-2">
              <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Engineering Journey
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>IT Major, Battambang Cambodia</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <Code2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>Frontend: React 19, Tailwind v4, Modern ES6+</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <Server className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Backend: PHP, Laravel, MySQL, Docker (basics)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
