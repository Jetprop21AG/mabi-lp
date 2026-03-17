"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { CompetitorComparison } from "./competitor-comparison";

export function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "2 990 zł",
      period: "/msc",
      description: "Dla małych firm produkcyjnych i handlowych.",
      features: [
        "PIM (Zarządzanie produktami)",
        "WMS (Magazyn)",
        "Podstawowe raporty",
        "Do 5 użytkowników",
        "Do 5 000 SKU",
        "Wsparcie email",
      ],
      highlight: false,
    },
    {
      name: "BUSINESS",
      price: "7 990 zł",
      period: "/msc",
      description: "Pełna platforma dla rosnących firm.",
      features: [
        "Wszystko co w STARTER",
        "MES (Produkcja)",
        "CRM (Sprzedaż)",
        "Finanse i Budżetowanie",
        "AI Hub (Obserwatorzy)",
        "Do 20 użytkowników",
        "Do 20 000 SKU",
        "Wsparcie priorytetowe",
      ],
      highlight: true,
      badge: "Najczęściej wybierany",
    },
    {
      name: "ENTERPRISE",
      price: "12 990 zł",
      period: "/msc",
      description: "Dla dużych organizacji wymagających skali.",
      features: [
        "Wszystkie 16 modułów",
        "Nieograniczeni użytkownicy",
        "Nieograniczone SKU",
        "Dedykowany opiekun",
        "SLA 99.9%",
        "Dedykowana infrastruktura (opcja)",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prosty cennik.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Za jedną platformę płacisz mniej niż za sam HubSpot CRM.
            A dostajesz PIM + MES + WMS + CRM + Finance + AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-white/10 border-red-500/50 shadow-2xl shadow-red-900/20"
                  : "bg-white/5 border-white/10"
              } flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-4 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Wybierz pakiet
              </button>
            </motion.div>
          ))}
        </div>

        <CompetitorComparison />
      </div>
    </section>
  );
}
