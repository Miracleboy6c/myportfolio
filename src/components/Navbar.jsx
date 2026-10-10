import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight, Clock } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Navbar({ lang, setLang, t, isDark, setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Live Battambang time ticker (GMT+7)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Phnom_Penh",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setLocalTime(timeStr);
      } catch {
        setLocalTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 backdrop-blur-md ${
        isScrolled
          ? "bg-white/85 dark:bg-[#09090b]/85 border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs py-3"
          : "bg-white/70 dark:bg-[#09090b]/70 border-b border-zinc-200/60 dark:border-zinc-800/60 py-3.5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="group flex items-center gap-3 select-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-mono font-bold text-xs tracking-tight shadow-xs transition-transform duration-200 group-hover:scale-105">
            {lang === "kh" ? profileInfo.initialsKh : profileInfo.initialsEn}
          </div>

          <div className="flex flex-col text-left">
            <span className="font-semibold text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {lang === "kh" ? profileInfo.nameKhmer : profileInfo.name}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="hidden sm:inline">{t.nav.statusBadge}</span>
              </span>
            </span>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
              <span>{lang === "kh" ? profileInfo.majorKh : profileInfo.majorEn}</span>
              {localTime && (
                <>
                  <span>•</span>
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden md:inline-flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{localTime} (GMT+7)</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-white dark:hover:bg-zinc-800/80 transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Bilingual Segment Switcher */}
          <div className="flex items-center bg-zinc-100/80 dark:bg-zinc-900/80 p-0.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 text-xs">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-md text-xs transition-all duration-150 ${
                lang === "en"
                  ? "font-semibold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs"
                  : "font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("kh")}
              className={`px-2.5 py-1 rounded-md text-xs transition-all duration-150 font-khmer ${
                lang === "kh"
                  ? "font-semibold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs"
                  : "font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
              title="Khmer (ខ្មែរ)"
            >
              ខ្មែរ
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label={t.nav.themeToggle}
            title={t.nav.themeToggle}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
          </button>

          {/* Telegram Quick Link */}
          <a
            href={profileInfo.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold transition-all duration-150 shadow-xs"
          >
            <span>Telegram</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl px-4 py-4 space-y-2 mt-2 shadow-lg animate-fade-in-up">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              {lang === "kh" ? "ទំនាក់ទំនងផ្ទាល់" : "Direct Contact"}
            </span>
            <a
              href={profileInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400"
            >
              <span>{profileInfo.telegramHandle}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
