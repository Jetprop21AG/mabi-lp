"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  Package, Users, Factory, Warehouse, ShoppingCart, Wrench, 
  MessageSquare, FileText, Smartphone, ClipboardCheck, Briefcase, FileInput, Landmark
} from "lucide-react";

export function ModulesGrid() {
  const t = useTranslations("ModulesGrid");
  const modules = [
    { title: "PIM", icon: Package, link: "/modules/pim", category: "Dane" },
    { title: "DMS", icon: FileText, link: "/modules/dms", category: "Dane" },
    { title: "Import Hub", icon: FileInput, link: "/modules/import-hub", category: "Dane" },
    { title: "CRM", icon: Users, link: "/modules/crm", category: "Sprzedaż" },
    { title: "e-Commerce", icon: ShoppingCart, link: "/modules/e-commerce", category: "Sprzedaż" },
    { title: "B2B Platform", icon: Smartphone, link: "/modules/b2b-platform", category: "Sprzedaż" },
    { title: "Field Sales", icon: Briefcase, link: "/modules/field-sales", category: "Sprzedaż" },
    { title: "MES", icon: Factory, link: "/modules/mes", category: "Operacje" },
    { title: "WMS", icon: Warehouse, link: "/modules/wms", category: "Operacje" },
    { title: "QR Maintenance", icon: Wrench, link: "/modules/qr-maintenance", category: "Operacje" },
    { title: "Quality Control", icon: ClipboardCheck, link: "/modules/quality-control", category: "Operacje" },
    { title: "Procurement", icon: ShoppingCart, link: "/modules/procurement", category: "Operacje" },
    { title: "Finance", icon: Landmark, link: "/modules/finance", category: "Finanse" },
    { title: "KSeF", icon: FileText, link: "/modules/ksef", category: "Finanse" },
    { title: "Projects", icon: Briefcase, link: "/modules/projects", category: "Zarządzanie" },
    { title: "AI Hub", icon: MessageSquare, link: "/modules/ai-hub", category: "Zarządzanie" },
  ];

  const categories = ["Dane", "Sprzedaż", "Operacje", "Finanse", "Zarządzanie"] as const;

  return (
    <section id="features" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
        
        {categories.map((category) => (
            <div key={category} className="mb-16">
                <h3 className="text-2xl font-bold text-gray-500 mb-8 border-b border-white/10 pb-2">{t(`categories.${category}`)}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {modules.filter(m => m.category === category).map((module, i) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative h-48 hover:h-auto min-h-[12rem] p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-transparent group-hover:from-red-500/5 transition-all duration-500" />
                      
                      {module.link && (
                        <Link href={module.link} className="absolute inset-0 z-20" aria-label={`${t("goToModule")} ${module.title}`} />
                      )}
                      
                      <div className="relative z-10 pointer-events-none">
                        <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-red-500/30 transition-all duration-300">
                          <module.icon className="text-gray-400 group-hover:text-red-500 transition-colors" size={20} />
                        </div>
                        
                        <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">{module.title}</h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{t(`modules.${module.title}.desc`)}</p>
                      </div>
                      
                      <div className="relative z-10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                          <p className="text-xs text-gray-500 pt-4 border-t border-white/10 leading-relaxed">
                            {t(`modules.${module.title}.details`)}
                          </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
