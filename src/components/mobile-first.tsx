"use client";

import { Smartphone, Monitor, ScanLine, MapPin, ShoppingCart, BarChart3, CloudOff, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

export function MobileFirst() {
  const t = useTranslations("MobileFirst");
  const salesFeatures = [t("salesFeature0"), t("salesFeature1"), t("salesFeature2")];
  const warehouseFeatures = [t("warehouseFeature0"), t("warehouseFeature1"), t("warehouseFeature2")];
  const productionFeatures = [t("productionFeature0"), t("productionFeature1"), t("productionFeature2")];

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium">
             {t("badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
             <div className="h-48 bg-gradient-to-br from-blue-900/20 to-transparent flex items-center justify-center relative">
                <Smartphone size={64} className="text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10 flex items-center gap-1">
                   <CloudOff size={12} /> {t("offlineReady")}
                </div>
             </div>
             <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t("salesRep")}</h3>
                <ul className="space-y-3 text-gray-400">
                   <li className="flex gap-3"><ShoppingCart size={18} className="text-blue-500" /> {salesFeatures[0]}</li>
                   <li className="flex gap-3"><MapPin size={18} className="text-blue-500" /> {salesFeatures[1]}</li>
                   <li className="flex gap-3"><BarChart3 size={18} className="text-blue-500" /> {salesFeatures[2]}</li>
                </ul>
             </div>
          </div>

          <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
             <div className="h-48 bg-gradient-to-br from-yellow-900/20 to-transparent flex items-center justify-center relative">
                <ScanLine size={64} className="text-yellow-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10">
                   {t("pdaDevices")}
                </div>
             </div>
             <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t("warehouseWorker")}</h3>
                <ul className="space-y-3 text-gray-400">
                   <li className="flex gap-3"><ScanLine size={18} className="text-yellow-500" /> {warehouseFeatures[0]}</li>
                   <li className="flex gap-3"><BarChart3 size={18} className="text-yellow-500" /> {warehouseFeatures[1]}</li>
                   <li className="flex gap-3"><Smartphone size={18} className="text-yellow-500" /> {warehouseFeatures[2]}</li>
                </ul>
             </div>
          </div>

          <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
             <div className="h-48 bg-gradient-to-br from-red-900/20 to-transparent flex items-center justify-center relative">
                <Monitor size={64} className="text-red-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10">
                   {t("tvDashboard")}
                </div>
             </div>
             <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t("production")}</h3>
                <ul className="space-y-3 text-gray-400">
                   <li className="flex gap-3"><BarChart3 size={18} className="text-red-500" /> {productionFeatures[0]}</li>
                   <li className="flex gap-3"><Wrench size={18} className="text-red-500" /> {productionFeatures[1]}</li>
                   <li className="flex gap-3"><ScanLine size={18} className="text-red-500" /> {productionFeatures[2]}</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
