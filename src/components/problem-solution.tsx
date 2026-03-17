"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Dane w Excelu, ERP, emailach i głowach ludzi",
    "Import z Chin to czarna skrzynka",
    "Produkcja nie wie co sprzedaż obiecała",
    "Raporty? Tylko po godzinach w Excelu",
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-8"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-400">Znasz to?</h2>
            <div className="space-y-6">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <p className="text-xl text-gray-400">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                MABI to zmienia.
              </h2>
              <div className="space-y-6">
                <p className="text-2xl text-white font-medium">
                  Jeden system. <span className="text-gray-500">Wszystkie dane.</span>
                </p>
                <p className="text-2xl text-blue-500 font-medium">
                  AI, który je rozumie.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <Check size={20} />
                   </div>
                   <div className="font-medium">Problem rozwiązany</div>
                </div>
                <p className="text-gray-400">
                  Dzięki centralnej bazie danych i agentom AI, informacje są zawsze aktualne i dostępne dla każdego działu w ułamku sekundy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
