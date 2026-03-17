"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Globe, Smartphone, Clock, RefreshCw } from "lucide-react";

export function Trust() {
  const stats = [
    { value: "17,500+", label: "Zarządzanych SKU" },
    { value: "16", label: "Zintegrowanych modułów" },
    { value: "6", label: "AI obserwatorów 24/7" },
    { value: "105+", label: "API endpoints" },
    { value: "236k+", label: "Linii kodu" },
    { value: "9", label: "Języków produktowych" },
    { value: "0s", label: "Przełączania systemów" },
  ];

  const features = [
    { icon: ShieldCheck, text: "Dane w Polsce (Hetzner DE)" },
    { icon: Globe, text: "Polski interface, KSeF, KŚT, JPK" },
    { icon: Smartphone, text: "PWA: działa na telefonie, tablecie, PDA" },
    { icon: Clock, text: "Wdrożenie od 2 tygodni" },
    { icon: RefreshCw, text: "Migracja z Comarch / SAP / HubSpot" },
    { icon: Check, text: "AI: LangGraph + Claude Sonnet 4.6" },
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
              <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
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
              <span className="text-sm font-medium text-gray-300">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
