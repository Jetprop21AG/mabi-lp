import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AiSection } from "@/components/ai-section";
import { UnifiedFlows } from "@/components/unified-flows";
import { MobileFirst } from "@/components/mobile-first";
import { ModulesGrid } from "@/components/modules-grid";
import { BudgetControl } from "@/components/budget-control";
import { FinanceSection } from "@/components/finance-section";
import { Pricing } from "@/components/pricing";
import { Trust } from "@/components/trust";
import { CtaForm } from "@/components/cta-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <AiSection />
        <UnifiedFlows />
        <MobileFirst />
        <ModulesGrid />
        <BudgetControl />
        <FinanceSection />
        <Pricing />
        <Trust />
        <CtaForm />
      </main>
      <Footer />
    </div>
  );
}
