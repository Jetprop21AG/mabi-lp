"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const nextLocale = locale === "pl" ? "en" : "pl";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-400 hover:text-white"
    >
      <Globe size={16} />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
