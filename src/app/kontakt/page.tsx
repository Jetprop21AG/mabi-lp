import { Header } from "@/components/header";
import { CtaForm } from "@/components/cta-form";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <Header />
      <CtaForm />
      <Footer />
    </div>
  );
}
