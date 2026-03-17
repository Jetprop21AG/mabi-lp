"use client";

import { motion } from "framer-motion";

export function TechStackBanner() {
  const technologies = [
    { name: "Next.js", icon: "▲" },
    { name: "LangGraph", icon: "⚡" },
    { name: "Multi-LLM", icon: "🧠" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Prisma", icon: "◬" },
    { name: "PWA", icon: "📱" },
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Zbudowane na stacku 2026.</h3>
            <p className="text-sm text-gray-500">Nie na frameworku z 2005 roku.</p>
          </div>
          
          <div className="md:w-2/3 w-full overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="flex items-center gap-8 md:gap-12 overflow-x-auto hide-scrollbar pb-2 pt-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="font-mono text-sm tracking-wider uppercase">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
