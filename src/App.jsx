import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./data/translations";

export default function App() {
  // Language state with localStorage persistence
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "kh" || saved === "en" ? saved : "en";
  });

  // Dark mode state with system preference & localStorage persistence
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) return saved === "dark";
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Synchronize dark mode with DOM root and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      document.body.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [isDark]);

  // Update HTML lang attribute and document title when lang changes
  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    const htmlLang = lang === "kh" ? "km" : "en";
    document.documentElement.lang = htmlLang;

    if (lang === "kh") {
      document.body.classList.add("font-khmer");
    } else {
      document.body.classList.remove("font-khmer");
    }

    document.title = translations[lang]?.meta?.title || "Chim Sithy — Developer Portfolio";
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`relative min-h-screen flex flex-col transition-colors duration-200 ${lang === "kh" ? "font-khmer" : ""}`}>
      {/* Subtle Ambient Top Light (Linear/Vercel Spotlight) */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),transparent)] pointer-events-none"></div>

      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <main className="flex-1">
        <Hero lang={lang} t={t} />
        <About lang={lang} t={t} />
        <TechStack lang={lang} t={t} />
        <Projects lang={lang} t={t} />
        <Contact lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
