"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-600/20 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          {t("badge")}
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("title1")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
          >
            {t("title2")}
          </motion.div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10 space-y-4"
        >
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
             {t("subtitle1")}
          </p>
          <p className="text-lg text-gray-500">
             {t("subtitle2")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/demo"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
          >
            {t("startFree")}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
          >
            <Play size={20} className="fill-current" />
            {t("watchDemo")}
          </button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-xl bg-[#1A1A1A] border border-white/10 shadow-2xl shadow-red-900/20 overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            {/* Mockup Header */}
            <div className="h-10 border-b border-white/5 bg-black/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            {/* Mockup Content Placeholder */}
            <div className="p-8 flex items-center justify-center h-full bg-gradient-to-br from-black to-[#111]">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4 border border-red-500/20 animate-pulse">
                    <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-xl font-medium text-gray-300">{t("aiHub")}</h3>
                <p className="text-sm text-gray-500 mt-2">{t("aiHubDesc")}</p>
              </div>
            </div>
            
            {/* Floating Elements (Parallax feel) */}
            <div className="hidden md:block absolute top-20 right-20 w-64 p-4 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">{t("aiBadge")}</div>
                    <div className="text-sm font-medium">{t("budgetAnalysis")}</div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500"></div>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-right">{t("urBudget")}</div>
            </div>

            <div className="hidden md:block absolute bottom-10 left-10 w-64 p-4 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs">⚠️</div>
                    <div className="text-sm font-medium">{t("warning")}</div>
                </div>
                <p className="text-xs text-gray-400">{t("bearingWarning")}</p>
            </div>
          </div>
          
          {/* Stats Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap shadow-xl z-20"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs text-white">AS</div>
              <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs text-white">MK</div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center text-xs text-white">+5</div>
            </div>
            <p className="text-sm text-gray-300">{t("statsPrefix")} <span className="font-bold text-white">{t("statsNumber")}</span> {t("statsSuffix")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
