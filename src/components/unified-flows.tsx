"use client";

import { ArrowRight, Check } from "lucide-react";

export function UnifiedFlows() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Jeden przepływ, nie silosy</h2>
          <p className="text-xl text-gray-400">
            W tradycyjnym ERP musisz wprowadzić te same dane w 5 miejscach. W MABI robisz to raz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Old Way */}
          <div className="bg-red-900/10 p-8 rounded-2xl border border-red-500/10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
              <span className="line-through decoration-red-500/50">Tradycyjne ERP</span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 shrink-0">1</span>
                Kupujesz maszynę
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 shrink-0">2</span>
                Ręcznie wpisujesz fakturę
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 shrink-0">3</span>
                Ręcznie tworzysz środek trwały
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 shrink-0">4</span>
                Ręcznie zakładasz w utrzymaniu ruchu
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 shrink-0">5</span>
                Ręcznie planujesz przeglądy
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
               4 osoby × 3 dni pracy
            </div>
          </div>

          {/* MABI Way */}
          <div className="relative bg-gradient-to-br from-blue-900/20 to-black p-8 rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 p-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                    MABI FLOW
                </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              W MABI
            </h3>
            
            <div className="mb-8">
                <div className="flex items-center gap-4 text-white font-medium mb-4">
                    <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/10">Skanujesz fakturę</div>
                    <ArrowRight className="text-gray-500" size={20} />
                    <div className="px-4 py-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/30">AI wyciąga dane</div>
                </div>
            </div>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                <Check className="text-green-400 shrink-0" size={20} />
                Faktura w finansach (z dekretacją)
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 shrink-0" size={20} />
                Środek trwały (KŚT, amortyzacja)
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 shrink-0" size={20} />
                Maszyna w utrzymaniu ruchu
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 shrink-0" size={20} />
                Harmonogram przeglądów
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 shrink-0" size={20} />
                QR kod na maszynę
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-center text-lg font-bold text-blue-400">
               1 osoba × 5 minut
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
