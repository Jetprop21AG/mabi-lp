import { ModulePage } from "@/components/module-page";

export default function B2bPlatformPage() {
  return (
    <ModulePage
      title="B2B Platform — Portal dla partnerów"
      hero={{
        title: "Portal dla Twoich partnerów handlowych.",
        description: "Zautomatyzuj proces zamówień hurtowych. Daj klientom B2B narzędzie do self-service 24/7."
      }}
      problem={{
        items: [
          "Zamówienia B2B składane mailem lub telefonicznie",
          "Handlowiec spędza 40% czasu na przepisywaniu zamówień do systemu",
          "Klienci dzwonią z pytaniem \"czy to jest dostępne?\" i \"jaka jest moja cena?\"",
          "Brak historii zamówień i faktur online dla klienta"
        ]
      }}
      solution={{
        items: [
          { title: "Self-service", description: "Kontrahent loguje się, widzi swoje ceny, zamawia kiedy chce" },
          { title: "Indywidualne ceny", description: "Automatycznie pobierane z CRM i PIM dla danego klienta" },
          { title: "Szybkie zamawianie", description: "Import z CSV, powtarzanie zamówień" },
          { title: "Status zamówienia", description: "Klient widzi status (przyjęte, w produkcji, wysłane)" }
        ]
      }}
      features={{
        items: [
          "Cenniki kontrahenckie i rabaty kaskadowe",
          "Limity kredytowe i płatnicze (integracja z FK)",
          "Historia zamówień, faktur i dokumentów WZ",
          "Promocje dedykowane dla B2B",
          "Dostęp do zdjęć i opisów produktów (z PIM)",
          "Możliwość tworzenia wielu kont dla jednej firmy"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI B2B", "Sana Commerce", "OroCommerce", "Dedykowany B2B"],
        rows: [
          { label: "Wdrożenie", values: ["1-2 tygodnie", "3-6 msc", "6-12 msc", "6+ msc"] },
          { label: "Integracja PIM/CRM", values: ["✅ Native", "⚠️ Connector", "⚠️ Connector", "⚠️ Custom API"] },
          { label: "Real-time stany", values: ["✅ Z WMS", "⚠️", "⚠️", "⚠️"] },
          { label: "Cena", values: ["W abonamencie", "od €25k/rok", "od $40k/rok", "50k-200k zł"] }
        ]
      }}
      cta={{
        title: "Daj klientom B2B wygodę zamawiania",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
