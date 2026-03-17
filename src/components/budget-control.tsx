"use client";

import { CheckCircle2, FileX } from "lucide-react";
import { useTranslations } from "next-intl";

export function BudgetControl() {
  const t = useTranslations("BudgetControl");

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-medium">
                {t("badge")}
             </div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6">
               {t("title1")} <span className="text-green-500">{t("title2")}</span> {t("title3")}
             </h2>
             <p className="text-xl text-gray-400 mb-8 leading-relaxed">{t("subtitle")}</p>
             
             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-bold text-white">{t("feature1Title")}</h4>
                   <p className="text-sm text-gray-400">{t("feature1Desc")}</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-bold text-white">{t("feature2Title")}</h4>
                   <p className="text-sm text-gray-400">{t("feature2Desc")}</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-bold text-white">{t("feature3Title")}</h4>
                   <p className="text-sm text-gray-400">{t("feature3Desc")}</p>
                 </div>
               </li>
             </ul>
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transform rotate-6">
                   <FileX size={16} /> {t("withoutMabi")}
                </div>

                <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                      <div>
                         <h4 className="text-white font-medium">{t("request")}</h4>
                         <p className="text-xs text-gray-400">{t("requestExample")}</p>
                      </div>
                   </div>

                   <div className="flex justify-center">
                      <div className="h-8 w-px bg-white/10"></div>
                   </div>

                   <div className="flex items-center gap-4 p-4 bg-green-900/10 rounded-xl border border-green-500/20">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">AI</div>
                      <div>
                         <h4 className="text-green-400 font-medium">{t("budgetIt")}</h4>
                         <p className="text-xs text-green-500/60">{t("budgetRemaining")}</p>
                      </div>
                   </div>

                   <div className="flex justify-center">
                      <div className="h-8 w-px bg-white/10"></div>
                   </div>

                   <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">2</div>
                      <div>
                         <h4 className="text-white font-medium">{t("managerApproval")}</h4>
                         <div className="flex gap-2 mt-2">
                            <button className="px-3 py-1 bg-green-600 rounded text-xs text-white font-bold">{t("approve")}</button>
                            <button className="px-3 py-1 bg-red-600/50 rounded text-xs text-white/50">{t("reject")}</button>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
