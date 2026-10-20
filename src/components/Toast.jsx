import React from "react";
import { CheckCircle2, Sparkles, X, Info } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isInfo = toast.type === "info";

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-fade-in-up">
      <div className="relative overflow-hidden flex items-center gap-3 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-indigo-500/30 dark:border-indigo-400/30 shadow-[0_10px_35px_-5px_rgba(99,102,241,0.35)] dark:shadow-[0_10px_35px_-5px_rgba(99,102,241,0.25)] text-zinc-900 dark:text-zinc-100">
        {/* Glow corner accent */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          ) : isInfo ? (
            <Info className="w-5 h-5 text-sky-500" />
          ) : (
            <Sparkles className="w-5 h-5 text-indigo-500" />
          )}
        </div>

        <div className="flex-1 pr-1">
          <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            {toast.title || "Notification"}
          </div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-snug">
            {toast.message}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
