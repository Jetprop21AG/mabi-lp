import { SalagCapitalParkPage } from "@/components/salag-capital-park-page";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "SALAG Group × Capital Park | Investment Opportunity",
  description: "Pioneering Home Finishing Through Technology & Vertical Integration. Investment Opportunity March 2026.",
};

export default function SalagCapitalParkRoute() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header variant="light" />
      <SalagCapitalParkPage />
      <Footer />
    </div>
  );
}
