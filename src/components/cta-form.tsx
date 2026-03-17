"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function CtaForm() {
  const t = useTranslations("CtaForm");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert(t("errorAlert"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
           
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-400 mb-12">{t("subtitle")}</p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
            >
              <h3 className="text-xl font-bold mb-2">{t("thanksTitle")}</h3>
              <p>{t("thanksMessage")}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <input
                name="name"
                type="text"
                placeholder={t("namePlaceholder")}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-500"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                    name="company"
                    type="text"
                    placeholder={t("companyPlaceholder")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-500"
                />
                 <input
                    name="phone"
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors text-white placeholder-gray-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-900/20 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>{t("submit")} <ArrowRight /></>}
              </button>
            </form>
          )}
          
          <div className="mt-12 pt-8 border-t border-white/10 text-gray-500 text-sm">
             {t("orWrite")} <a href="mailto:kontakt@mabi.pl" className="text-white hover:underline">kontakt@mabi.pl</a> | +48 XXX XXX XXX
          </div>
        </div>
      </div>
    </section>
  );
}
