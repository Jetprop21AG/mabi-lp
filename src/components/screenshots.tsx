"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const tabs = [
  { id: "pim", label: "PIM" },
  { id: "crm", label: "CRM" },
  { id: "mes", label: "MES" },
  { id: "wms", label: "WMS" },
  { id: "b2b", label: "Portal B2B" },
];

export function Screenshots() {
  const [activeTab, setActiveTab] = useState("pim");

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Zobacz MABI w akcji</h2>
          <p className="text-gray-400">Przejrzysty interfejs, który pokochają Twoi pracownicy.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative aspect-[16/9] bg-[#111] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Window Controls */}
            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#111] to-black">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                >
                    <div className="text-6xl mb-4 opacity-20">🖥️</div>
                    <h3 className="text-2xl font-bold text-gray-800">Screenshot: {tabs.find(t => t.id === activeTab)?.label}</h3>
                    <p className="text-gray-800 mt-2 opacity-50">Tutaj pojawi się zrzut ekranu modułu</p>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
