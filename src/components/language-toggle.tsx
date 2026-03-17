"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  const toggleLang = () => {
    setLang(lang === "pl" ? "en" : "pl");
    // In a real app, this would change the locale
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-400 hover:text-white"
    >
      <Globe size={16} />
      <span>{lang === "pl" ? "PL" : "EN"}</span>
    </button>
  );
}
