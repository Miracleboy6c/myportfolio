import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, Phone, Send, Mail, Sparkles, MessageSquare, RefreshCw } from "lucide-react";
import { profileInfo } from "../data/portfolioData";

export default function Contact({ lang, t, showToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isKhmer = lang === "kh";

  const handleCopy = (text, type, label) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);

    if (showToast) {
      showToast({
        title: isKhmer ? "បានចម្លងរួចរាល់" : "Copied!",
        message: `${label}: ${text}`,
        type: "success",
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      if (showToast) {
        showToast({
          title: isKhmer ? "សូមបញ្ចូលសារ" : "Missing Message",
          message: isKhmer ? "សូមសរសេរសារមុននឹងផ្ញើ" : "Please enter a message before sending.",
          type: "info",
        });
      }
      return;
    }

    setIsSubmitting(true);

    // Format text and prepare Telegram dispatch
    const text = encodeURIComponent(
      `Hello Sithy! My name is ${formData.name || "A Visitor"}.\nContact: ${formData.contact || "Not provided"}\nMessage: ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`${profileInfo.telegramUrl}?text=${text}`, "_blank");

      if (showToast) {
        showToast({
          title: isKhmer ? "សារត្រូវបានបញ្ជូន" : "Message Ready in Telegram",
          message: isKhmer ? "បានបើក Telegram ដើម្បីបញ្ជូនសាររបស់អ្នក" : "Opened Telegram with your formatted message.",
          type: "success",
        });
      }

      setFormData({ name: "", contact: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50/50 dark:bg-[#070a14]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Telegram Card */}
            <div className="p-6 rounded-3xl border border-sky-500/30 dark:border-sky-500/30 bg-white/80 dark:bg-[#0e1424]/80 hover-card shadow-sm flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                    {isKhmer ? "ឆ្លើយតបរហ័ស (< ២ ម៉ោង)" : "Fastest Response (< 2 hrs)"}
                  </span>
                </div>

                <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-1">
                  {profileInfo.telegramHandle}
                </div>
                <p className={`text-xs text-zinc-500 dark:text-zinc-400 mb-6 ${isKhmer ? "font-khmer" : ""}`}>
                  {t.contact.availability}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-zinc-200/60 dark:border-zinc-800">
                <a
                  href={profileInfo.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-sky-500/20 hover:scale-102"
                >
                  <span>{t.contact.openTelegram}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(profileInfo.telegramHandle, "telegram", "Telegram")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors shadow-2xs"
                  title={t.contact.copyTelegram}
                >
                  {copiedType === "telegram" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
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
            <div className="p-6 rounded-3xl border border-emerald-500/30 dark:border-emerald-500/30 bg-white/80 dark:bg-[#0e1424]/80 hover-card shadow-sm flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.contact.phoneLabel}</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-200/60 dark:border-zinc-700/60">
                    {isKhmer ? profileInfo.locationKh : profileInfo.locationEn}
                  </span>
                </div>

                <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-1">
                  {profileInfo.phone}
                </div>
                <p className={`text-xs text-zinc-500 dark:text-zinc-400 mb-6 ${isKhmer ? "font-khmer" : ""}`}>
                  {isKhmer ? "អាចទាក់ទងបានម៉ោងធ្វើការ (GMT+7)" : "Available during business hours (GMT+7)"}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-zinc-200/60 dark:border-zinc-800">
                <a
                  href={`tel:${profileInfo.phoneRaw}`}
                  className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 hover:scale-102"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.contact.callPhone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(profileInfo.phone, "phone", "Phone")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors shadow-2xs"
                  title={t.contact.copyPhone}
                >
                  {copiedType === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
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

            {/* Email Quick Card */}
            <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 flex items-center justify-between text-xs shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Email Address</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">{profileInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <a
                  href={`mailto:${profileInfo.email}`}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 text-[11px] font-semibold"
                >
                  Email
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(profileInfo.email, "email", "Email")}
                  className="p-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                  title="Copy email"
                >
                  {copiedType === "email" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-3xl border border-indigo-500/25 dark:border-indigo-500/30 bg-white/85 dark:bg-[#0c101d]/85 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  {isKhmer ? "ផ្ញើសាររហ័សទៅកាន់ Telegram" : "Quick Message Dispatch"}
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                    {isKhmer ? "ឈ្មោះរបស់អ្នក" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isKhmer ? "ឧទាហរណ៍៖ សុខា" : "e.g., Alex Johnson"}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                    {isKhmer ? "Telegram ឬ Email" : "Telegram / Email (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={isKhmer ? "@yourtelegram ឬ email@domain.com" : "@handle or email@company.com"}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-1">
                    {isKhmer ? "ខ្លឹមសារសារ *" : "Your Message *"}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isKhmer
                        ? "សួស្តី សិទ្ធី! ខ្ញុំចង់ពិភាក្សាអំពីឱកាសការងារ..."
                        : "Hi Sithy, I have a junior web development project/internship and would like to connect..."
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-indigo-500 transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white text-xs font-bold shadow-md shadow-indigo-500/25 transition-all hover:scale-102 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>{isKhmer ? "កំពុងរៀបចំ..." : "Preparing..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{isKhmer ? "ផ្ញើសារចូល Telegram" : "Send via Telegram"}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ name: "", contact: "", message: "" })}
                    className="px-3.5 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    title="Clear"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
