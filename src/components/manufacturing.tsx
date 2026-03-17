"use client";

import { motion } from "framer-motion";
import { Hammer, Check } from "lucide-react";

export function Manufacturing() {
  const features = [
    "BOM i receptury produkcyjne",
    "Druk cyfrowy na panelach",
    "Etykiety z kodami kreskowymi",
    "QR Maintenance dla maszyn",
    "WMS z terminalem na hali",
    "Import z Chin — śledzenie kontenerów",
  ];

  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-red-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium">
              <Hammer size={16} />
              <span>Made by Makers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Zbudowane przez producentów. <br/>
              <span className="text-red-500">Dla producentów.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              MABI powstał w fabryce — nie w biurze konsultingowym. Wiemy, czego potrzebujesz, bo sami tego używamy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative w-full">
             <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="relative rounded-2xl bg-black border border-white/10 p-1 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-[1500ms]"></div>
                 
                 <div className="relative z-10 text-center p-8 bg-black/80 backdrop-blur rounded-xl border border-white/10 shadow-2xl">
                     <div className="text-5xl mb-4">🏭</div>
                     <p className="text-2xl font-bold text-white mb-2">25 lat</p>
                     <p className="text-gray-400 text-sm">doświadczenia w produkcji</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
