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

        {/* Center Brain/Hub Visual */}
        <div className="mt-20 flex justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
                 <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping opacity-20"></div>
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                    <span className="text-3xl">🧠</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
