import React, { useState } from "react";
import { ArrowDown, Send, ArrowUpRight, Copy, Check, Terminal, MapPin, Layers, Briefcase, FileText, Sparkles, Play, Code2 } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Hero({ lang, t, onOpenResume, showToast }) {
  const isKhmer = lang === "kh";
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeTab, setActiveTab] = useState("json");
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalLog, setTerminalLog] = useState("");

  const snippets = {
    json: JSON.stringify(
      {
        name: profileInfo.name,
        khmerName: profileInfo.nameKhmer,
        role: "Junior Full-Stack",
        location: "Battambang, Cambodia",
        coreStack: ["React.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
        exploring: ["Java", "Docker"],
        openToOpportunities: true,
      },
      null,
      2
    ),
    stack: `// tech-stack.ts
export const sithyStack = {
  frontend: ["React 19", "Tailwind v4", "JavaScript ES6+", "HTML5/CSS3"],
  backend: ["PHP 8.2+", "Laravel 11", "MySQL", "PostgreSQL"],
  tooling: ["Vite", "Git", "GitHub", "Postman", "Docker"],
  learningGoals: ["Java OOP Core", "Microservices Architecture"],
  status: "Available for Hire 🚀"
};`,
    curl: `#!/bin/bash
# Query Sithy's Live Developer Profile
curl -X GET https://chimsithy.dev/api/profile \\
  -H "Authorization: Bearer dev_token_2026" \\
  -H "Accept: application/json"

# Response: HTTP 200 OK
# Status: Ready for Interview (Battambang / Remote / Phnom Penh)`,
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
    if (showToast) {
      showToast({
        title: isKhmer ? "បានចម្លងកូដ" : "Code Copied!",
        message: isKhmer ? `បានចម្លងកូដពីផ្ទាំង ${activeTab}` : `Copied ${activeTab} snippet to clipboard.`,
        type: "success",
      });
    }
  };

  const handleRunCode = () => {
    setTerminalRunning(true);
    setTerminalLog("Compiling & executing script...");
    setTimeout(() => {
      setTerminalLog("✓ Execution success: 0 errors. Available immediately!");
      setTerminalRunning(false);
      if (showToast) {
        showToast({
          title: "Execution Output",
          message: "All test cases passed. Status: 100% Ready!",
          type: "success",
        });
      }
    }, 900);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-indigo-500/10 dark:border-indigo-500/20 overflow-hidden">
      {/* Background Engineer Grid */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-70"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-400/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.status}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-0.5" />
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.2] mb-6 ${
                isKhmer ? "font-khmer leading-snug" : ""
              }`}
            >
              {isKhmer ? (
                <>
                  សួស្តី! ខ្ញុំបាទឈ្មោះ{" "}
                  <span className="gradient-text-primary">
                    {profileInfo.nameKhmer}
                  </span>{" "}
                  — និស្សិតព័ត៌មានវិទ្យា & Web Developer នៅក្រុងបាត់ដំបង។
                </>
              ) : (
                <>
                  Crafting{" "}
                  <span className="gradient-text-primary">
                    modern web applications
                  </span>{" "}
                  with precision, speed & clean architecture.
                </>
              )}
            </h1>

            {/* Subhead */}
            <p
              className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-xl ${
                isKhmer ? "font-khmer leading-loose" : ""
              }`}
            >
              {t.hero.subhead}
            </p>

            {/* Actions CTA Bar with colorful glowing buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1" />
              </button>

              <a
                href={profileInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-500/30 dark:border-indigo-400/30 bg-white/80 dark:bg-zinc-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold transition-all hover:scale-105 shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-sky-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>{t.hero.contactMe}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-all hover:scale-105 shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-purple-500" />
                <span>{isKhmer ? "មើលប្រវត្តិរូប (CV)" : "View CV"}</span>
              </button>

              <a
                href={`tel:${profileInfo.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Call direct"
              >
                <span>{profileInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Colorful Code Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-indigo-500/30 dark:border-indigo-400/30 bg-white/90 dark:bg-[#0c101d]/90 shadow-[0_10px_35px_-5px_rgba(99,102,241,0.2)] overflow-hidden backdrop-blur-md hover-card">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-indigo-500/20 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setTerminalLog("Terminal reset.")}
                      className="w-2.5 h-2.5 rounded-full bg-rose-500 hover:scale-125 transition-transform"
                      title="Reset terminal"
                    />
                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className="w-2.5 h-2.5 rounded-full bg-amber-400 hover:scale-125 transition-transform"
                      title="Switch to stack"
                    />
                    <button
                      type="button"
                      onClick={handleRunCode}
                      className="w-2.5 h-2.5 rounded-full bg-emerald-500 hover:scale-125 transition-transform"
                      title="Execute code"
                    />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 ml-2 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab("json")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "json"
                          ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      config.json
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "stack"
                          ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      stack.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("curl")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "curl"
                          ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      curl.sh
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleRunCode}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 px-1.5 py-0.5 rounded transition-colors"
                    title="Run code"
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Run</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySnippet}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors px-1.5 py-0.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-800"
                    title="Copy snippet"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-1.5 leading-relaxed bg-zinc-50/70 dark:bg-[#070a14] text-zinc-800 dark:text-zinc-200 min-h-[220px] overflow-x-auto">
                {activeTab === "json" && (
                  <div>
                    <div><span className="text-indigo-400">{"{"}</span></div>
                    <div className="pl-4">
                      <span className="text-purple-400">"name":</span> <span className="text-emerald-500 dark:text-emerald-400">"{profileInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"khmerName":</span> <span className="text-emerald-500 dark:text-emerald-400">"{profileInfo.nameKhmer}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"role":</span> <span className="text-cyan-600 dark:text-cyan-400">"Junior Full-Stack"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"location":</span> <span className="text-amber-600 dark:text-amber-300">"Battambang, Cambodia"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"coreStack":</span> [
                      <span className="text-sky-500">"React"</span>,{" "}
                      <span className="text-cyan-500">"Tailwind"</span>,{" "}
                      <span className="text-indigo-500">"PHP"</span>,{" "}
                      <span className="text-rose-500">"Laravel"</span>,{" "}
                      <span className="text-blue-500">"MySQL"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"exploring":</span> [
                      <span className="text-amber-500">"Java"</span>,{" "}
                      <span className="text-sky-400">"Docker"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"openToOpportunities":</span> <span className="text-emerald-500 font-bold">true</span>
                    </div>
                    <div><span className="text-indigo-400">{"}"}</span></div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <pre className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    {snippets.stack}
                  </pre>
                )}

                {activeTab === "curl" && (
                  <pre className="whitespace-pre-wrap text-emerald-600 dark:text-emerald-400 text-[11px] leading-relaxed">
                    {snippets.curl}
                  </pre>
                )}

                {/* Simulated runtime execution footer */}
                <div className="pt-2 mt-2 border-t border-zinc-200/50 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {terminalLog || "readyForInterview: available immediately"}
                    </span>
                  </div>
                  {terminalRunning && (
                    <span className="text-indigo-500 animate-spin font-bold">⏳</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip - Clickable and colorful hover glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10 border-t border-indigo-500/10 dark:border-indigo-500/20 mt-10">
          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="text-left p-4 rounded-2xl border border-indigo-500/20 dark:border-indigo-500/30 bg-white/70 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 hover-card shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.25)] transition-all group"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-125 transition-transform" />
                <span>{t.hero.stats.focus}</span>
              </span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {t.hero.stats.focusVal}
            </div>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-left p-4 rounded-2xl border border-sky-500/20 dark:border-sky-500/30 bg-white/70 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 hover-card shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)] transition-all group"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500 group-hover:scale-125 transition-transform" />
                <span>{t.hero.stats.location}</span>
              </span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {isKhmer ? "ក្រុងបាត់ដំបង កម្ពុជា" : profileInfo.locationEn}
            </div>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-left p-4 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/30 bg-white/70 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 hover-card shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.25)] transition-all group"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-125 transition-transform" />
                <span>{t.hero.stats.status}</span>
              </span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {t.hero.stats.statusVal}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
