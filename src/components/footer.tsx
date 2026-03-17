"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
              MABI
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              {t("tagline")}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t("product")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#features" className="hover:text-white transition-colors">{t("features")}</Link></li>
              <li><Link href="/cennik" className="hover:text-white transition-colors">{t("pricing")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("changelog")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("docs")}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t("company")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">{t("contact")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("blog")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("careers")}</Link></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold mb-6">{t("legal")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{t("terms")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("privacy")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("gdpr")}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t("copyright")}</p>
          <p>{t("designed")}</p>
        </div>
      </div>
    </footer>
  );
}
