import React from "react";
import { ArrowUp, MapPin, Send, Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { profileInfo } from "../data/portfolioData";

export default function Footer({ lang, t, showToast }) {
  const isKhmer = lang === "kh";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (showToast) {
      showToast({
        title: isKhmer ? "ត្រឡប់ទៅលើ" : "Back to Top",
        message: isKhmer ? "បានរំកិលទៅកាន់ផ្នែកខាងលើ" : "Scrolled to top smoothly.",
        type: "info",
      });
    }
  };

  return (
    <footer className="py-12 border-t border-indigo-500/10 dark:border-indigo-500/20 bg-white/60 dark:bg-[#070a14]/60 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              T
            </div>
            <div>
              <div className="font-bold text-xs text-zinc-900 dark:text-zinc-100">
                {lang === "kh" ? profileInfo.nameKhmer : profileInfo.name}
              </div>
              <div className="text-[11px] text-zinc-400">
                {lang === "kh" ? profileInfo.roleKh : profileInfo.roleEn}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={profileInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="GitHub Profile"
            >
              <SiGithub className="w-4 h-4" />
            </a>

            <a
              href={profileInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors"
              title="Telegram Channel / Direct"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileInfo.email}`}
              className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${profileInfo.phoneRaw}`}
              className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
              title="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p className={isKhmer ? "font-khmer" : ""}>
            © {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>{isKhmer ? profileInfo.locationKh : profileInfo.locationEn}</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/40 font-semibold text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-zinc-800 transition-all hover:scale-105 shadow-2xs"
            >
              <span className={isKhmer ? "font-khmer" : ""}>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
