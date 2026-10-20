import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight, Clock, FileText, Sparkles } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Navbar({ lang, setLang, t, isDark, setIsDark, onOpenResume, showToast }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [activeSection, setActiveSection] = useState("hero");

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

  // Track scroll position for navbar styling & active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#skills", id: "skills", label: t.nav.skills },
    { href: "#projects", id: "projects", label: t.nav.projects },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    if (showToast) {
      showToast({
        title: newLang === "kh" ? "ភាសាខ្មែរ" : "English Language",
        message: newLang === "kh" ? "បានប្តូរទៅជាភាសាខ្មែរជោគជ័យ" : "Language switched to English successfully.",
        type: "info",
      });
    }
  };

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (showToast) {
      showToast({
        title: nextState ? "Dark Mode" : "Light Mode",
        message: nextState ? "Night mode enabled" : "Daylight mode enabled",
        type: "info",
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-indigo-500/15 dark:border-indigo-500/20 shadow-[0_4px_25px_-5px_rgba(99,102,241,0.15)] py-2.5"
          : "bg-white/60 dark:bg-[#0a0e1a]/60 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3.5"
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
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            T
          </div>

          <div className="flex flex-col text-left">
            <span className="font-bold text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {lang === "kh" ? profileInfo.nameKhmer : profileInfo.name}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="hidden sm:inline">{t.nav.statusBadge}</span>
              </span>
            </span>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
              <span>{lang === "kh" ? profileInfo.majorKh : profileInfo.majorEn}</span>
              {localTime && (
                <>
                  <span>•</span>
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden md:inline-flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-indigo-400" />
                    <span>{localTime} (GMT+7)</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-sm">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/70 dark:hover:bg-zinc-800/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Resume Button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100/70 dark:hover:bg-indigo-900/40 text-xs font-semibold transition-all hover:scale-105 shadow-xs"
            title="View Resume / CV"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            <span>CV</span>
          </button>

          {/* Bilingual Switcher */}
          <div className="flex items-center bg-zinc-100/90 dark:bg-zinc-900/90 p-0.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-xs">
            <button
              type="button"
              onClick={() => toggleLanguage("en")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-all duration-150 ${
                lang === "en"
                  ? "font-bold bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs"
                  : "font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLanguage("kh")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-all duration-150 font-khmer ${
                lang === "kh"
                  ? "font-bold bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs"
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
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:scale-105"
            aria-label={t.nav.themeToggle}
            title={t.nav.themeToggle}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500 transition-transform" />
            )}
          </button>

          {/* Telegram Quick Link */}
          <a
            href={profileInfo.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-semibold transition-all hover:scale-105 shadow-sm shadow-indigo-500/20"
          >
            <span>Telegram</span>
            <ArrowUpRight className="w-3 h-3 opacity-90" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-indigo-500/20 dark:border-indigo-500/30 bg-white/95 dark:bg-[#0a0e1a]/95 backdrop-blur-2xl px-5 py-5 space-y-3 mt-2 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-zinc-700 dark:text-zinc-200 hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-mono text-zinc-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (CV)</span>
            </button>

            <a
              href={profileInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-sm"
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
