"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Building2, 
  Store, 
  Factory, 
  Cpu, 
  TrendingUp, 
  MapPin, 
  Box, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  MonitorSmartphone,
  Layers,
  Leaf,
  Users
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function SalagCapitalParkPage() {
  return (
    <main className="pt-20 bg-slate-50 text-gray-900 font-sans">
      
      {/* 1. COVER */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-blue-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-400/10 blur-[120px]"></div>
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <motion.div variants={fadeInUp} className="mb-10 inline-block p-4 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-white/50 backdrop-blur-sm">
            <Image
              src="/images/logo-salag.png"
              alt="SALAG Group"
              width={240}
              height={80}
              className="mx-auto"
              priority
            />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Pioneering Home Finishing <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Through Technology</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light">
            Vertical integration meets AI-driven retail for the modern real estate market.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-slate-500 bg-white/60 py-3 px-6 rounded-full backdrop-blur-md border border-slate-200 w-fit mx-auto">
            <span className="flex items-center gap-2"><Building2 size={16} className="text-blue-600"/> Investment Opportunity</span>
            <span className="hidden sm:block text-slate-300">•</span>
            <span>March 2026</span>
            <span className="hidden sm:block text-slate-300">•</span>
            <span className="flex items-center gap-2 text-amber-600 bg-amber-50 px-2 py-1 rounded-md"><ShieldCheck size={14}/> Confidential</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE OPPORTUNITY */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">The Ask</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900">10–20 mln PLN <span className="font-light text-slate-400">for</span> 10–20% equity</motion.h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Market Leader", desc: "Leading Polish manufacturer of finishing materials since 1997." },
              { icon: Cpu, title: "Tech-Enabled", desc: "Own vertical production combined with AI technology and scalable e-commerce." },
              { icon: TrendingUp, title: "Ready to Scale", desc: "Primed for exponential growth with a strategic real estate partner." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROBLEM & SOLUTION */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 font-medium text-sm mb-6 border border-red-500/20">
                <Box size={14} /> The Problem
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">Home finishing is broken.</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-slate-300 text-lg font-light">
                <p>Buy an apartment → get bare walls.</p>
                <p>You must source everything separately: flooring, skirting, wall panels, moldings.</p>
                <p>This means <strong className="text-white">3+ hours</strong> in DIY stores with zero expert advice.</p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md mt-8">
                  <span className="text-4xl font-bold text-red-400 block mb-2">57%</span>
                  <span className="text-sm text-slate-300 uppercase tracking-wider font-semibold">of clients abandon purchase due to lack of guidance.</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-gradient-to-br from-blue-600 to-indigo-700 p-1 rounded-3xl shadow-2xl shadow-blue-900/50">
              <div className="bg-slate-900/90 backdrop-blur-xl p-8 sm:p-12 rounded-[22px] h-full border border-white/10">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/20">
                  <Store size={14} /> The Solution
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-6 text-white">YUTRA × Capital Park</motion.h2>
                <motion.ul variants={staggerContainer} className="space-y-5 mb-10">
                  {[
                    "Container showrooms directly at your developments",
                    "AI visualization (snap a photo → see the result instantly)",
                    "Complete packages: Basic, Premium, Luxury",
                    "One order, one delivery, one invoice"
                  ].map((text, i) => (
                    <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3 text-slate-200">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-400"><ArrowRight size={14} /></div>
                      <span className="leading-relaxed">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp} className="pt-6 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Sales Density</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">105K <span className="text-lg text-slate-400 font-normal">PLN/m²/yr</span></div>
                  </div>
                  <div className="text-right text-slate-500 text-sm">
                    vs 10K traditional retail
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. YUTRA CONTAINER */}
      <section className="py-24 px-6 bg-slate-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Retail Revolution</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900">YUTRA Container Showrooms</motion.h3>
            <motion.p variants={fadeInUp} className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-light">One relocatable container. 20-30m² of fully immersive digital and physical retail.</motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "CAPEX per unit", value: "~200K PLN", icon: Building2 },
              { label: "Est. Revenue", value: "2.1–3.1M PLN/yr", icon: TrendingUp },
              { label: "Breakeven", value: "3–4 months", icon: BarChart3 },
              { label: "Relocatable", value: "Yes, 100% portable", icon: MapPin },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon size={20} />
                </div>
                <div className="text-slate-500 text-sm font-medium mb-2">{stat.label}</div>
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. WHO WE ARE */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">SALAG Group</motion.h3>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-light">Manufacturing excellence since 1997. Based in Suwałki, Poland.</motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {[
              { k: "Revenue", v: "70–80M PLN" },
              { k: "Employees", v: "~280" },
              { k: "Production Area", v: "10,500 m²" },
              { k: "Patents", v: "32 in 48 ctys" },
              { k: "Idle Capacity", v: "40–60%" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">{stat.v}</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.k}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
            <motion.div variants={fadeInUp} className="md:col-span-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Brands</h4>
              <p className="text-slate-600 font-light">A complete ecosystem for home finishing and outdoor spaces.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              <Image src="/images/logo-salag.png" alt="SALAG" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/logo-yutra.png" alt="YUTRA" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/logo-bergdeck.png" alt="Bergdeck" width={120} height={40} className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <div className="font-bold text-xl text-slate-700 opacity-80 hover:opacity-100 transition-opacity">Studio A</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. TECHNOLOGY MOAT */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Our Moat</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">Technology & Innovation</motion.h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Vertical Integration", desc: "From raw granules to finished product. Extrusion + digital print." },
              { icon: Cpu, title: "MABI AI ERP", desc: "Custom-built ERP with 8 specialized AI agents running operations." },
              { icon: MonitorSmartphone, title: "E-Commerce", desc: "yutra.pl scaling fast: 10K+ products, 9 languages, +984% YoY." },
              { icon: Users, title: "YUTRA PRO", desc: "Network effect commission platform for architects and installers." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <feature.icon size={32} className="text-blue-400 mb-6" />
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. MARKET & FINANCIALS */}
      <section className="py-24 px-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-8">€15 Billion European Market</motion.h3>
            <div className="space-y-6 mb-10">
              {[
                { r: "Poland", v: "€2.2 bn" },
                { r: "CEE Region", v: "€3.05 bn" },
                { r: "DACH", v: "€9.8 bn" }
              ].map((m, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">{m.r}</span>
                  <span className="text-xl font-black text-slate-900">{m.v}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeInUp} className="flex gap-4 items-center p-4 bg-green-50 rounded-xl border border-green-100 text-green-800 text-sm font-medium">
              <Leaf size={24} className="text-green-600 flex-shrink-0" />
              <span>ESG Compliant: 1MW Solar Installation + In-house Recycling capabilities.</span>
            </motion.div>
          </div>

          <div>
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-8">Financial Overview</motion.h3>
            <motion.div variants={fadeInUp} className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="py-4 px-6 font-semibold text-slate-600 text-sm">Year</th>
                    <th className="py-4 px-6 font-semibold text-slate-600 text-sm text-right">Revenue</th>
                    <th className="py-4 px-6 font-semibold text-slate-600 text-sm text-right">EBITDA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="py-4 px-6 font-medium text-slate-900">2021 (Peak)</td><td className="py-4 px-6 text-right font-medium text-slate-600">88.8M PLN</td><td className="py-4 px-6 text-right font-medium text-slate-600">16.0M PLN</td></tr>
                  <tr><td className="py-4 px-6 font-medium text-slate-900">2023</td><td className="py-4 px-6 text-right font-medium text-slate-600">75.3M PLN</td><td className="py-4 px-6 text-right font-medium text-slate-600">~10M PLN</td></tr>
                  <tr><td className="py-4 px-6 font-medium text-slate-900">2025 (Restr.)</td><td className="py-4 px-6 text-right font-medium text-slate-600">69.6M PLN</td><td className="py-4 px-6 text-right font-medium text-slate-600">—</td></tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <div className="text-sm text-blue-600 font-semibold mb-1">Asset Value</div>
              <div className="text-2xl font-bold text-blue-900">~150M PLN <span className="text-sm font-normal text-blue-700">(Replacement value)</span></div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} className="mb-12">
            <Image src="/images/logo-salag.png" alt="SALAG" width={160} height={50} className="mx-auto brightness-0 invert opacity-80" />
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            &ldquo;Capital Park buduje przestrzenie. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">SALAG je wykańcza.</span>&rdquo;
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto font-light">
            We invite Capital Park for a strategic partnership. Let's launch the first container showrooms at your developments in 2026.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="inline-flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
              <Users size={24} className="text-blue-300"/>
            </div>
            <div className="text-xl font-bold mb-1">Adam Galas</div>
            <div className="text-blue-300 text-sm font-medium mb-4">CEO, SALAG Group</div>
            <a href="mailto:adam@salag.com" className="text-white hover:text-blue-300 transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-blue-300">adam@salag.com</a>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
