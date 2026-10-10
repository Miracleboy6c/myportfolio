import React from "react";
import { ArrowUp, MapPin } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Footer({ lang, t }) {
  const isKhmer = lang === "kh";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
            {lang === "kh" ? profileInfo.initialsKh : profileInfo.initialsEn}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <p
            className={`text-xs text-zinc-500 dark:text-zinc-400 ${
              isKhmer ? "font-khmer" : ""
            }`}
          >
            © {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>{isKhmer ? profileInfo.locationKh : profileInfo.locationEn}</span>
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <span className={isKhmer ? "font-khmer" : ""}>{t.footer.backToTop}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
