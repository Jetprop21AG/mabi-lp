import { Header } from "@/components/header";
import { CtaForm } from "@/components/cta-form";
import { Footer } from "@/components/footer";

export default function DemoPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <Header />
      <div className="py-20 text-center container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Umów się na demo</h1>
        <p className="text-gray-400">Zobacz jak MABI działa w praktyce. Wypełnij formularz poniżej.</p>
      </div>
      <CtaForm />
      <Footer />
    </div>
  );
}
