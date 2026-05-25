import { Header } from "@/components/header";
import { CtaForm } from "@/components/cta-form";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";

export default async function DemoPage() {
  const t = await getTranslations("DemoPage");

  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <Header />
      <div className="py-20 text-center container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-gray-400">{t("subtitle")}</p>
      </div>
      <CtaForm />
      <Footer />
    </div>
  );
}
