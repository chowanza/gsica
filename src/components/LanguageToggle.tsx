"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      id="language-toggle"
      onClick={toggleLang}
      className="lang-toggle"
      aria-label={`Switch language to ${t.langSwitch}`}
      title={`Switch to ${t.langSwitch}`}
    >
      <span className="lang-flag">{lang === "en" ? "🇻🇪" : "🇺🇸"}</span>
      <span className="lang-text">{t.langSwitch}</span>
    </button>
  );
}
