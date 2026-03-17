"use client";

import { motion } from "framer-motion";
import { DollarSign, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

export function FinanceSection() {
  const features = [
    "Środki trwałe z KŚT i automatyczną amortyzacją",
    "Budżety per dział z kontrolą na etapie zakupu",
    "Workflow zatwierdzania faktur (kierownik → dyrektor → prezes)",
    "3-way matching: zamówienie ↔ dostawa ↔ faktura",
    "AI klasyfikacja faktur (wie kto wrzuca = wie jak zaksięgować)",
    "KSeF — wysyłka i odbiór e-faktur",
    "Maintenance cost tracking → TCO per maszyna"
  ];

  return (
    <section className="py-32 bg-[#080808] border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
           <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-medium">
                 Finanse 2.0
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Finanse, które rozumieją produkcję.
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                To nie jest kolejna prosta księgowość online. To system finansowy zintegrowany z każdym procesem w firmie.
              </p>

              <div className="grid gap-4">
                 {features.map((feature, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                       <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                       <span className="text-gray-300 font-medium">{feature}</span>
                    </motion.div>
                 ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-500">
                 <span className="flex items-center gap-2"><TrendingUp size={16} /> Bilans i P&L</span>
                 <span className="flex items-center gap-2"><DollarSign size={16} /> Cash Flow</span>
                 <span className="flex items-center gap-2"><ShieldCheck size={16} /> Kontrola budżetowa</span>
              </div>
           </div>

           <div className="lg:w-1/2 relative">
              {/* Visual representation of 3-way matching or workflow */}
              <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl">
                 <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-lg font-bold text-white mb-4 text-center">Automatyczny 3-way matching</h3>
                    
                    <div className="flex justify-between items-center gap-4">
                       <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl text-center flex-1">
                          <div className="text-xs text-blue-400 font-bold mb-1">ZAMÓWIENIE</div>
                          <div className="text-white font-bold">PO-2026/05</div>
                          <div className="text-xs text-gray-400">100 szt x 50 PLN</div>
                       </div>
                       <div className="text-gray-500">=</div>
                       <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-xl text-center flex-1">
                          <div className="text-xs text-yellow-400 font-bold mb-1">DOSTAWA WZ</div>
                          <div className="text-white font-bold">WZ-123/05</div>
                          <div className="text-xs text-gray-400">100 szt (Magazyn A)</div>
                       </div>
                       <div className="text-gray-500">=</div>
                       <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl text-center flex-1">
                          <div className="text-xs text-green-400 font-bold mb-1">FAKTURA</div>
                          <div className="text-white font-bold">FV-999/26</div>
                          <div className="text-xs text-gray-400">5000 PLN + VAT</div>
                       </div>
                    </div>

                    <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                       <CheckCircle2 size={20} />
                       Zgodność 100% → Faktura zaksięgowana
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
