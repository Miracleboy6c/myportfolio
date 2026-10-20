import React, { useState } from "react";
import { X, Printer, Copy, Send, Download, Check, Sparkles, GraduationCap, Briefcase, Code, MapPin, Phone, Mail } from "lucide-react";
import { profileInfo, skillsData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose, lang, showToast }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isKhmer = lang === "kh";

  const handlePrint = () => {
    window.print();
    if (showToast) {
      showToast({
        title: isKhmer ? "កំពុងបើកផ្ទាំង Print" : "Print Dialog Opened",
        message: isKhmer ? "អ្នកអាចរក្សាទុកជា PDF បាន" : "Select 'Save as PDF' to export.",
        type: "info",
      });
    }
  };

  const handleCopySummary = () => {
    const text = `
Chim Sithy (ជឹម សិទ្ធី)
Role: Junior Full-Stack / Web Developer
Major: Information Technology (IT)
Location: Battambang, Cambodia
Phone: ${profileInfo.phone}
Telegram: ${profileInfo.telegramHandle} (${profileInfo.telegramUrl})
GitHub: ${profileInfo.githubUrl}
Email: ${profileInfo.email}

CORE STACK:
React.js, JavaScript (ES6+), Tailwind CSS, PHP, Laravel, MySQL, PostgreSQL, Python

EXPLORING:
Java, Docker
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    if (showToast) {
      showToast({
        title: isKhmer ? "បានចម្លងប្រវត្តិរូប" : "Resume Copied!",
        message: isKhmer ? "បានចម្លងព័ត៌មានសង្ខេបទៅកាន់ Clipboard" : "Resume summary copied to clipboard.",
        type: "success",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in-up">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f1422] rounded-3xl border border-indigo-500/30 dark:border-indigo-400/30 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Banner */}
        <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-base shadow-md">
              T
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>{lang === "kh" ? profileInfo.nameKhmer : profileInfo.name}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-medium">
                  CV / Resume
                </span>
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {lang === "kh" ? profileInfo.majorKh : profileInfo.majorEn} • {profileInfo.locationEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4 text-indigo-500" />
            </button>
            <button
              type="button"
              onClick={handleCopySummary}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors"
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 text-xs">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-indigo-500" />
              <span>{profileInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <Send className="w-3.5 h-3.5 text-sky-500" />
              <span>{profileInfo.telegramHandle}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{profileInfo.locationEn}</span>
            </div>
          </div>

          {/* Education & Background */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>{isKhmer ? "ការអប់រំ និងជំនាញ" : "Education & Profile"}</span>
            </h4>
            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  {isKhmer ? "បរិញ្ញាបត្រផ្នែកព័ត៌មានវិទ្យា (IT)" : "Bachelor of Information Technology (IT)"}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">2023 - Present</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {isKhmer
                  ? "ផ្តោតលើការសរសេរកម្មវិធីគេហទំព័រ (Web Development), Database Systems, OOP និង Software Engineering。"
                  : "Focusing on Full-Stack Web Engineering, Database Design, Algorithm Architecture, and Modern Frameworks."}
              </p>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>{isKhmer ? "បច្ចេកវិទ្យាស្នូល" : "Core Tech Skills"}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((s) => (
                <span
                  key={s.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium border ${
                    s.isLearning
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                      : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>{s.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Academic Projects Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>{isKhmer ? "គម្រោងសំខាន់ៗ" : "Featured Projects"}</span>
            </h4>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                  1. Campus Course & Resource Portal (Laravel + MySQL)
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Authentication, role permissions, assignment grading, clean database schema.
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                  2. Battambang Local Marketplace (React + Tailwind + REST API)
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Instant client-side filter & search, responsive UI, automated Telegram checkout link.
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                  3. FinTrack Expense & Budget Monitor (React + Laravel)
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Personal expense ledger with category charts, monthly analytics, and CSV exports.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/70 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-500">
            {isKhmer ? "ត្រៀមខ្លួនសម្រាប់កម្មសិក្សា និងការងារ" : "Available immediately for opportunities"}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profileInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isKhmer ? "ផ្ញើសារតាម Telegram" : "Contact on Telegram"}</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isKhmer ? "បិទ" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
