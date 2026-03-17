import { Header } from "@/components/header";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function PricingPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <Header />
      <Pricing />
      <Footer />
    </div>
  );
}
