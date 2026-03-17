"use client";

import { motion } from "framer-motion";
import { Mail, Package, Wrench, Wallet, Truck, Database, ArrowRight } from "lucide-react";

export function AiSection() {
  const watchers = [
    {
      title: "Poczta",
      desc: "Klasyfikuje maile, wyciąga faktury, routuje do działów.",
      icon: Mail,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Magazyn",
      desc: "\"Łożysk zostało na 3 dni. Zamówić?\"",
      icon: Package,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20"
    },
    {
      title: "Utrzymanie",
      desc: "\"Przegląd sprężarki za 3 dni.\"",
      icon: Wrench,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      title: "Budżety",
      desc: "\"Dział UR na 87% budżetu. Uwaga.\"",
      icon: Wallet,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
    {
      title: "Dostawy",
      desc: "\"Zamówienie 3 dni po terminie. Przypomnieć?\"",
      icon: Truck,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "PIM",
      desc: "\"Produkt opublikowany z 35% danych. Uzupełnić?\"",
      icon: Database,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
             </span>
             Mózg systemu MABI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI nie jest dodatkiem.<br/>
            To <span className="text-red-500">mózg</span> MABI.
          </h2>
          <p className="text-xl text-gray-400">
            6 obserwatorów działa 24/7. Jedno miejsce. Zero szukania po modułach.
            AI przynosi Ci to co ważne → Ty decydujesz jednym kliknięciem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchers.map((watcher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-xl border ${watcher.border} ${watcher.bg} hover:bg-opacity-20 transition-all duration-300 group cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${watcher.bg} border ${watcher.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <watcher.icon className={watcher.color} size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${watcher.color}`}>{watcher.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {watcher.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LangGraph & Multi-LLM Section */}
        <div className="mt-32 max-w-5xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                To nie jest kolejny chatbot. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">To zespół agentów (Multi-LLM).</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                MABI wykorzystuje orkiestrację <strong>LangGraph</strong>. Zamiast jednego, ogólnego modelu sztucznej inteligencji, zatrudniamy wyspecjalizowanych agentów współpracujących ze sobą w czasie rzeczywistym.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-blue-400 text-xs">1</span></div>
                  <p className="text-sm text-gray-300">Jeden model analizuje dokumenty finansowe.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-purple-400 text-xs">2</span></div>
                  <p className="text-sm text-gray-300">Drugi optymalizuje trasy dostaw na magazynie.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-red-400 text-xs">3</span></div>
                  <p className="text-sm text-gray-300">LangGraph nadzoruje ich współpracę i podejmuje ostateczną decyzję w ułamku sekundy.</p>
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center">
              <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.4)] z-10">
                  <span className="text-3xl font-bold text-white tracking-tighter">LG</span>
                </div>
                {/* Orbiting nodes */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#111] border border-blue-500/50 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">GPT-4o</div>
                  <div className="absolute bottom-4 right-4 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#111] border border-purple-500/50 rounded-full flex items-center justify-center text-[10px] font-bold text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">Claude</div>
                  <div className="absolute bottom-4 left-4 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#111] border border-red-500/50 rounded-full flex items-center justify-center text-[10px] font-bold text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]">Llama</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
