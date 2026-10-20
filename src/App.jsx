import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ResumeModal from "./components/ResumeModal";
import ProjectModal from "./components/ProjectModal";
import SkillModal from "./components/SkillModal";
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
    return true; // Default to rich modern dark mode
  });

  // Global Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = useCallback(({ title, message, type = "success" }) => {
    setToast({ title, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  // Modal states
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

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

    document.title = "ChimSithy";
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`relative min-h-screen flex flex-col transition-colors duration-300 ${lang === "kh" ? "font-khmer" : ""}`}>
      {/* Dynamic Animated Ambient Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Orb 1: Indigo / Purple glow at top left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-transparent blur-3xl animate-orb-1"></div>

        {/* Orb 2: Cyan / Sky glow at mid right */}
        <div className="absolute top-1/4 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-bl from-cyan-500/20 via-sky-500/15 to-transparent blur-3xl animate-orb-2"></div>

        {/* Orb 3: Fuchsia / Rose glow at lower left */}
        <div className="absolute top-2/3 -left-20 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-rose-500/15 to-transparent blur-3xl animate-orb-3"></div>

        {/* Orb 4: Emerald / Teal subtle ambient at bottom right */}
        <div className="absolute -bottom-20 right-10 w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tl from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl animate-orb-1"></div>
      </div>

      {/* Main Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setIsResumeOpen(true)}
        showToast={showToast}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          t={t}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />
        <About
          lang={lang}
          t={t}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />
        <TechStack
          lang={lang}
          t={t}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
          showToast={showToast}
        />
        <Projects
          lang={lang}
          t={t}
          onSelectProject={(project) => setSelectedProject(project)}
          showToast={showToast}
        />
        <Contact
          lang={lang}
          t={t}
          showToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        t={t}
        showToast={showToast}
      />

      {/* Interactive Global Toast Notification */}
      <Toast toast={toast} onClose={hideToast} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
        showToast={showToast}
      />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        showToast={showToast}
      />

      {/* Interactive Skill Details Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        lang={lang}
        showToast={showToast}
      />
    </div>
  );
}
