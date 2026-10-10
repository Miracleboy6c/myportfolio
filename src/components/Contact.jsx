import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, Phone, Send } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Contact({ lang, t }) {
  const [copiedType, setCopiedType] = useState(null);
  const isKhmer = lang === "kh";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50/40 dark:bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 flex items-center gap-1.5">
            <span>// 04.</span>
            <span>{t.contact.sectionTitle}</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 ${
              isKhmer ? "font-khmer" : ""
            }`}
          >
            {t.contact.sectionSubtitle}
          </h2>
          <p
            className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl ${
              isKhmer ? "font-khmer leading-loose" : ""
            }`}
          >
            {t.contact.lead}
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {/* Telegram Card */}
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 hover-card shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-sky-500" />
                  <span>Telegram</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {isKhmer ? "ឆ្លើយតបរហ័ស (< ២ ម៉ោង)" : "Fastest Response (< 2 hrs)"}
                </span>
              </div>

              <div className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-1">
                {profileInfo.telegramHandle}
              </div>
              <p
                className={`text-xs text-zinc-500 dark:text-zinc-400 mb-6 ${
                  isKhmer ? "font-khmer" : ""
                }`}
              >
                {t.contact.availability}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
              <a
                href={profileInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold transition-all shadow-xs"
              >
                <span>{t.contact.openTelegram}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(profileInfo.telegramHandle, "telegram")}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-2xs"
                title={t.contact.copyTelegram}
              >
                {copiedType === "telegram" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {t.contact.copied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t.contact.copyTelegram}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 hover-card shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-emerald-500" />
                  <span>{t.contact.phoneLabel}</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200/60 dark:border-zinc-700/50">
                  {isKhmer ? profileInfo.locationKh : profileInfo.locationEn}
                </span>
              </div>

              <div className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-1">
                {profileInfo.phone}
              </div>
              <p
                className={`text-xs text-zinc-500 dark:text-zinc-400 mb-6 ${
                  isKhmer ? "font-khmer" : ""
                }`}
              >
                {isKhmer ? "អាចទាក់ទងបានម៉ោងធ្វើការ (GMT+7)" : "Available during business hours (GMT+7)"}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
              <a
                href={`tel:${profileInfo.phoneRaw}`}
                className="group/btn flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.contact.callPhone}</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(profileInfo.phone, "phone")}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-2xs"
                title={t.contact.copyPhone}
              >
                {copiedType === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {t.contact.copied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t.contact.copyPhone}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
