"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Clock, DollarSign, Database, Server } from "lucide-react";

export function CompetitorComparison() {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego MABI, a nie...?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Zbudowaliśmy system, który rozwiązuje problemy największych graczy na rynku, unikając ich błędów architektonicznych.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1: SAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <XCircle className="text-red-500" size={24} />
            Dlaczego nie SAP?
          </h4>
          <p className="text-gray-400 text-sm mb-8">
            Systemy korporacyjne wiążą się z gigantycznym ryzykiem budżetowym i czasowym.
          </p>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400 flex items-center gap-1"><Clock size={14}/> Czas wdrożenia</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-red-400">SAP B1</span>
                    <span className="text-gray-500">6-12 miesięcy</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-red-500/50 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-blue-400 font-bold">MABI</span>
                    <span className="text-blue-400">2-4 tygodnie</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start text-gray-300">
                  <XCircle size={16} className="text-red-500/70 shrink-0 mt-0.5" />
                  <span>Nieprzewidywalne koszty (TCO)</span>
                </li>
                <li className="flex gap-2 items-start text-gray-300">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>MABI: Stała, jasna subskrypcja</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Comarch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50"></div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <XCircle className="text-orange-500" size={24} />
            Dlaczego nie Comarch?
          </h4>
          <p className="text-gray-400 text-sm mb-8">
            Dług technologiczny, "grube klienty" instalowane na Windows i przestarzały UX.
          </p>
          
          <div className="space-y-6">
             <div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-400 flex items-center gap-1"><Server size={14}/> Architektura</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-lg p-3 text-center border border-orange-500/20">
                    <div className="text-xs text-gray-500 mb-1">Comarch XL</div>
                    <div className="text-sm font-bold text-orange-400">Fat Client</div>
                    <div className="text-[10px] text-gray-500 mt-1">Tylko Windows</div>
                 </div>
                 <div className="bg-blue-900/20 rounded-lg p-3 text-center border border-blue-500/30">
                    <div className="text-xs text-blue-300/70 mb-1">MABI</div>
                    <div className="text-sm font-bold text-blue-400">Cloud-Native</div>
                    <div className="text-[10px] text-blue-300/70 mt-1">Przeglądarka / PWA</div>
                 </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start text-gray-300">
                  <XCircle size={16} className="text-orange-500/70 shrink-0 mt-0.5" />
                  <span>Drogie i czasochłonne aktualizacje</span>
                </li>
                <li className="flex gap-2 items-start text-gray-300">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>MABI: Ciągłe, darmowe updaty (SaaS)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Card 3: 5 osobnych narzędzi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/50"></div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <XCircle className="text-yellow-500" size={24} />
            Dlaczego nie "składak"?
          </h4>
          <p className="text-gray-400 text-sm mb-8">
            HubSpot + Akeneo + BaseLinker + Subiekt. Brzmi znajomo? To przepis na silosy.
          </p>

          <div className="space-y-6">
             <div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-400 flex items-center gap-1"><Database size={14}/> Przepływ danych</span>
              </div>
              <div className="relative h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between px-4 mb-4">
                 <div className="w-10 h-10 rounded bg-yellow-500/20 flex items-center justify-center text-xs">CRM</div>
                 <div className="flex-1 flex flex-col items-center justify-center px-2">
                    <div className="w-full h-px border-t border-dashed border-red-500 relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] px-1 text-[10px] text-red-400">Błędy API</span>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded bg-yellow-500/20 flex items-center justify-center text-xs">PIM</div>
              </div>
              
              <div className="relative h-12 bg-blue-900/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
                 <span className="text-sm font-bold text-blue-400">MABI: Jedna, wspólna baza (Single Source of Truth)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start text-gray-300">
                  <XCircle size={16} className="text-yellow-500/70 shrink-0 mt-0.5" />
                  <span>Rozproszona odpowiedzialność i koszty integracji</span>
                </li>
                <li className="flex gap-2 items-start text-gray-300">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>MABI: Jeden system, jeden ekosystem</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
