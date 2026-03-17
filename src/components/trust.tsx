"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, ShieldCheck, Globe, Smartphone, Clock, RefreshCw } from "lucide-react";

export function Trust() {
  const t = useTranslations("Trust");
  const stats = [
    { value: "17,500+", labelKey: "sku" },
    { value: "16", labelKey: "modules" },
    { value: "6", labelKey: "aiWatchers" },
    { value: "105+", labelKey: "apiEndpoints" },
    { value: "236k+", labelKey: "codeLines" },
    { value: "9", labelKey: "languages" },
    { value: "0s", labelKey: "noSwitch" },
  ];

  const features = [
    { icon: ShieldCheck, textKey: "feature0" },
    { icon: Globe, textKey: "feature1" },
    { icon: Smartphone, textKey: "feature2" },
    { icon: Clock, textKey: "feature3" },
    { icon: RefreshCw, textKey: "feature4" },
    { icon: Check, textKey: "feature5" },
  ];

  return (
    <section className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="text-green-500" size={18} />
              <span className="text-sm font-medium text-gray-300">{t(feature.textKey)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
