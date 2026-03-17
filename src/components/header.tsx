"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./language-toggle";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false); // For mobile
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const modules = [
    { title: "PIM", link: "/modules/pim" },
    { title: "MES", link: "/modules/mes" },
    { title: "WMS", link: "/modules/wms" },
    { title: "CRM", link: "/modules/crm" },
    { title: "Finance", link: "/modules/finance" },
    { title: "Procurement", link: "/modules/procurement" },
    { title: "AI Hub", link: "/modules/ai-hub" },
    { title: "e-Commerce", link: "/modules/e-commerce" },
    { title: "Field Sales", link: "/modules/field-sales" },
    { title: "QR Maintenance", link: "/modules/qr-maintenance" },
    { title: "B2B Platform", link: "/modules/b2b-platform" },
    { title: "Quality Control", link: "/modules/quality-control" },
    { title: "Projects", link: "/modules/projects" },
    { title: "Import Hub", link: "/modules/import-hub" },
    { title: "DMS", link: "/modules/dms" },
    { title: "KSeF", link: "/modules/ksef" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="text-white">MABI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          
          {/* Modules Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors py-4">
              {t("modules")} <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-[400px] bg-black border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4 grid grid-cols-2 gap-2">
              {modules.map((module, i) => (
                <Link 
                  key={i} 
                  href={module.link as any} 
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {module.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Funkcje
          </Link>
          <Link href="/cennik" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            {t("pricing")}
          </Link>
          <Link href="/demo" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="/kontakt" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Kontakt
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Link
            href="/demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            {t("startFree")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          
          {/* Mobile Modules Dropdown */}
          <div>
            <button 
              onClick={() => setIsModulesOpen(!isModulesOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-gray-300 hover:text-white mb-2"
            >
              {t("modules")} <ChevronDown size={18} className={`transform transition-transform ${isModulesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isModulesOpen && (
              <div className="pl-4 border-l border-white/10 space-y-2 mt-2 mb-4">
                {modules.map((module, i) => (
                  <Link 
                    key={i} 
                    href={module.link as any} 
                    className="block text-base text-gray-400 hover:text-white py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {module.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/#features" 
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Funkcje
          </Link>
          <Link 
            href="/cennik" 
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("pricing")}
          </Link>
          <Link 
            href="/demo" 
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demo
          </Link>
          <Link 
            href="/kontakt" 
            className="text-lg font-medium text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontakt
          </Link>
          <div className="h-px bg-white/10 my-2" />
          <div className="flex justify-between items-center">
            <LanguageToggle />
            <Link
              href="/demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("startFree")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
