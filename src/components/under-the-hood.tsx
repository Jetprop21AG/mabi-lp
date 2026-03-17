"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield, Cpu, Code2, Network } from "lucide-react";

export function UnderTheHood() {
  const stats = [
    { label: "Linie kodu", value: "236k+", icon: Code2, color: "text-blue-400" },
    { label: "Endpointy API", value: "105+", icon: Network, color: "text-green-400" },
    { label: "Architektura", value: "Multi-tenant", icon: Database, color: "text-purple-400" },
    { label: "Izolacja danych", value: "W pełni", icon: Shield, color: "text-red-400" },
  ];

  return (
    <section className="py-32 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm font-medium">
                <Terminal size={14} />
                Dla CTO & IT Directorów
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pod maską.</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                MABI to nie jest kolejny nakładkowy CRM. To potężny, natywny chmurowy silnik (AI-native ERP) stworzony do przetwarzania milionów operacji bez zadyszki.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <stat.icon className={`${stat.color}`} size={24} />
                    <span className="text-2xl font-mono font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terminal Window */}
          <div className="md:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-gray-800 shadow-2xl shadow-blue-900/10 font-mono text-sm"
            >
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-gray-800 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-gray-500 text-xs flex items-center gap-2">
                  <Cpu size={12} /> root@mabi-core ~
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 space-y-3 text-gray-300 h-[300px] overflow-y-auto">
                <div className="flex">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white ml-2">mabi check --status</span>
                </div>
                <div className="text-gray-400">
                  [OK] Database connection established (PostgreSQL/Prisma)<br/>
                  [OK] Multi-tenant schema validated<br/>
                  [OK] Cache layer active (Redis)<br/>
                  [OK] LLM orchestration engine ready (LangGraph)
                </div>
                <br/>
                <div className="flex">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white ml-2">mabi cluster info</span>
                </div>
                <div className="text-gray-400">
                  Active Nodes: 12<br/>
                  API Throughput: 14,200 req/sec<br/>
                  Avg Latency: 42ms<br/>
                  Uptime: 99.998%
                </div>
                <br/>
                <div className="flex">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white ml-2 flex items-center gap-1">
                    tail -f /var/log/mabi/ai.log <span className="w-2 h-4 bg-white animate-pulse inline-block"></span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
