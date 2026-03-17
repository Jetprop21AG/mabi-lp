"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, X, Quote, ChevronRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface SolutionItem {
  title: string;
  description: string;
}

interface ComparisonRow {
  label: string;
  values: string[]; // [MABI, Competitor1, Competitor2, Competitor3]
}

interface ModulePageProps {
  title: string;
  hero: {
    title: string;
    description: string;
  };
  problem: {
    items: string[];
  };
  solution: {
    items: SolutionItem[];
  };
  features: {
    items: string[];
  };
  comparison?: {
    headers: string[]; // ["Funkcja", "MABI ...", "Competitor1", ...]
    rows: ComparisonRow[];
    footnote?: string;
  };
  caseStudy?: {
    quote: string;
    author: string;
  };
  cta: {
    title: string;
    buttonLabel: string;
    link: string;
  };
}

const ALL_MODULES = [
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

export function ModulePage({
  title,
  hero,
  problem,
  solution,
  features,
  comparison,
  caseStudy,
  cta,
}: ModulePageProps) {
  // Get next 4 modules for "See Also", excluding current one (deterministic to avoid hydration mismatch)
  const currentModuleIndex = ALL_MODULES.findIndex(m => title.includes(m.title));
  const otherModules = [
    ...ALL_MODULES.slice(currentModuleIndex + 1),
    ...ALL_MODULES.slice(0, currentModuleIndex)
  ].slice(0, 4);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 py-4 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">MABI</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Moduły</span>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{title.split(" — ")[0]}</span>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-600/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium"
            >
              {title}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
               <Link
                href={cta.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-900/20"
              >
                {cta.buttonLabel}
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Dlaczego to jest trudne?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {problem.items.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-1">
                      <X size={16} />
                    </div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Rozwiązanie MABI {title.split(' ')[0]}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.items.map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Kluczowe funkcje</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              {features.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-blue-500" />
                   <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        {comparison && (
        <section className="py-20">
          <div className="container mx-auto px-6 overflow-x-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Porównanie z rynkiem</h2>
            <div className="min-w-[800px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {comparison.headers.map((header, i) => (
                      <th key={i} className={`p-6 text-lg font-bold ${i === 1 ? 'text-blue-400' : 'text-gray-300'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-gray-300">{row.label}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className={`p-6 ${j === 0 ? 'font-bold text-white bg-blue-500/10' : 'text-gray-400'}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {comparison.footnote && (
              <p className="mt-4 text-sm text-gray-500 text-center">{comparison.footnote}</p>
            )}
          </div>
        </section>
        )}

        {/* Case Study Section */}
        {caseStudy && (
        <section className="py-20 bg-gradient-to-br from-blue-900/20 to-black border-y border-white/10">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <Quote size={48} className="mx-auto text-blue-500 mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-gray-200">
              "{caseStudy.quote}"
            </blockquote>
            <cite className="text-lg text-gray-400 not-italic block">
              — {caseStudy.author}
            </cite>
          </div>
        </section>
        )}

        {/* Trust Bar & Stats */}
        <section className="py-12 border-b border-white/10 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">17,500+</h4>
                <p className="text-sm text-gray-500">Zarządzanych SKU</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">3,939</h4>
                <p className="text-sm text-gray-500">Technologii produkcji</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">9</h4>
                <p className="text-sm text-gray-500">Obsługiwanych języków</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">7</h4>
                <p className="text-sm text-gray-500">Zintegrowanych modułów</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Dane w Polsce
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Polski interface
              </span>
               <span className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Migracja z ERP
              </span>
               <span className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Wdrożenie w 2 tyg
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
           <div className="container mx-auto px-6">
             <h2 className="text-4xl md:text-5xl font-bold mb-8">{cta.title}</h2>
             <Link
                href={cta.link}
                className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xl transition-all shadow-lg shadow-red-900/20"
              >
                {cta.buttonLabel}
                <ArrowRight size={24} />
              </Link>
           </div>
        </section>

        {/* See Also / Navigation */}
        <section className="py-20 border-t border-white/10 bg-white/5">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-400">Zobacz też inne moduły</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {otherModules.map((module, i) => (
                         <Link key={i} href={module.link} className="block p-4 rounded-lg bg-black border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all text-center">
                            <span className="font-bold text-lg text-gray-200">{module.title}</span>
                         </Link>
                    ))}
                </div>
                 <div className="text-center mt-12">
                     <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm">
                        ← Wróć na stronę główną
                     </Link>
                 </div>
            </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
