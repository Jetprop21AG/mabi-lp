"use client";

import Image from "next/image";

const sections = [
  {
    id: "cover",
    bg: "bg-gradient-to-br from-white via-white to-blue-50",
    content: (
      <div className="text-center max-w-2xl mx-auto">
        <Image
          src="/images/logo-salag.png"
          alt="SALAG Group"
          width={200}
          height={60}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          SALAG GROUP
        </h1>
        <p className="text-lg text-gray-600 italic mb-2">
          Pioneering Home Finishing Through Technology & Vertical Integration
        </p>
        <p className="text-sm text-gray-500">
          Investment Opportunity | March 2026 | Confidential
        </p>
      </div>
    ),
  },
  {
    id: "opportunity",
    bg: "bg-white",
    content: (
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          10–20 mln PLN for 10–20% equity
        </h2>
        <ul className="text-gray-600 text-left space-y-3">
          <li>• Leading Polish manufacturer of finishing materials (since 1997)</li>
          <li>• Own production + AI technology + e-commerce</li>
          <li>• Ready to scale with a real estate partner</li>
        </ul>
      </div>
    ),
  },
  {
    id: "problem",
    bg: "bg-slate-50",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Home finishing is broken
        </h2>
        <p className="text-gray-600 mb-4">
          Buy an apartment → get bare walls. You must source: flooring, skirting, panels, moldings. 3+ hours in DIY stores, no expert advice. 57% of clients abandon purchase due to lack of guidance.
        </p>
        <p className="text-lg font-semibold text-blue-700">
          Solution: YUTRA × Capital Park — container showrooms at your developments. AI visualization. Complete packages (Basic/Premium/Luxury). Sales density 105K PLN/m²/year vs 10K for traditional retail.
        </p>
      </div>
    ),
  },
  {
    id: "solution",
    bg: "bg-white",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          YUTRA Container — Showroom + Store
        </h2>
        <p className="text-gray-600 mb-4">
          One container = 20–30 m². Full display: floors, skirting, panels, moldings. AI assistant 24/7. Live room visualization. Next-day delivery.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>CAPEX per container</strong><br />~200K PLN
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>Revenue per container</strong><br />2.1–3.1M PLN/year
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>Breakeven</strong><br />3–4 months
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>Relocatable</strong><br />Yes — portable based on results
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "who",
    bg: "bg-slate-50",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          SALAG Group — Since 1997
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            ["Revenue", "70–80M PLN/year"],
            ["Employees", "~280"],
            ["Production area", "10,500 m²"],
            ["Patents", "32 in 48 countries"],
            ["Idle capacity", "40–60%"],
          ].map(([k, v]) => (
            <div key={k} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase">{k}</div>
              <div className="font-semibold">{v}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center">
          Brands: <strong>YUTRA</strong> (SPC flooring, wall panels, yutra.art) · <strong>SALAG</strong> (polymer & aluminium profiles) · <strong>Bergdeck</strong> (WPC decking) · <strong>Studio A</strong> (moldings)
        </p>
      </div>
    ),
  },
  {
    id: "tech",
    bg: "bg-white",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Technology — Our Competitive Edge
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li><strong>Own production + digital print</strong> — SPC/WPC extrusion, yutra.art AI patterns, 48h JIT</li>
          <li><strong>MABI</strong> — AI-native ERP, 8 specialized agents</li>
          <li><strong>E-commerce</strong> — yutra.pl: 10K+ products, 9 languages, +984% YoY</li>
          <li><strong>YUTRA PRO</strong> — commission platform for architects & installers</li>
        </ul>
      </div>
    ),
  },
  {
    id: "market",
    bg: "bg-slate-50",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          €15 Billion European Market
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[
            ["Poland", "€2.2 bn"],
            ["CEE", "€3.05 bn"],
            ["DACH", "€9.8 bn"],
          ].map(([k, v]) => (
            <div key={k} className="bg-white p-4 rounded-lg">
              <strong>{k}</strong> {v}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          SPC: 30% CAGR · WPC: 25% CAGR · Wall panels: 18% CAGR. Container showrooms: blue ocean.
        </p>
      </div>
    ),
  },
  {
    id: "financials",
    bg: "bg-white",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Financial Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Year</th>
                <th className="text-right py-2">Revenue</th>
                <th className="text-right py-2">EBITDA</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b"><td>2021</td><td className="text-right">88.8M PLN</td><td className="text-right">16.0M PLN</td></tr>
              <tr className="border-b"><td>2023</td><td className="text-right">75.3M PLN</td><td className="text-right">~10M PLN</td></tr>
              <tr className="border-b"><td>2025</td><td className="text-right">69.6M PLN</td><td className="text-right">—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Replacement value of assets: ~150M PLN. 32 patents, 28-year brand, MABI platform potential.
        </p>
      </div>
    ),
  },
  {
    id: "proposal",
    bg: "bg-slate-50",
    content: (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Investment Proposal
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Variant A</h3>
            <p>10M PLN → 10% equity</p>
            <p className="text-sm text-gray-500">Pre-money: 100M PLN · 1 seat on Board</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Variant B</h3>
            <p>20M PLN → 20% equity</p>
            <p className="text-sm text-gray-500">Pre-money: 100M PLN · 2 seats on Board</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cta",
    bg: "bg-gradient-to-br from-gray-900 to-slate-800",
    content: (
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          &ldquo;Capital Park buduje przestrzenie. SALAG je wykańcza.&rdquo;
        </h2>
        <p className="text-gray-300 mb-6">
          Zapraszamy Capital Park do partnerstwa strategicznego — pilotaż showroomów przy osiedlach w 2026.
        </p>
        <p className="text-sm text-gray-400">
          Adam Galas · CEO, SALAG Group · adam@salag.com
        </p>
      </div>
    ),
  },
];

export function SalagCapitalParkPage() {
  return (
    <main className="pt-20">
      {sections.map((s) => (
        <section
          key={s.id}
          className={`min-h-screen flex items-center justify-center py-16 px-6 ${s.bg}`}
        >
          {s.content}
        </section>
      ))}
    </main>
  );
}
