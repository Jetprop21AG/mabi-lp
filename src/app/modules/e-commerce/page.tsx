import { ModulePage } from "@/components/module-page";

export default function EcommercePage() {
  return (
    <ModulePage
      title="e-Commerce — Sklep online"
      hero={{
        title: "Twój sklep online. Zasilany danymi z PIM.",
        description: "Nie buduj e-commerce od zera. Produkty, opisy, zdjęcia, ceny — wszystko płynie automatycznie z MABI PIM. B2C i B2B w jednej platformie."
      }}
      problem={{
        items: [
          "Sklep online odłączony od ERP — ręczne aktualizacje cen i stanów",
          "Osobna baza produktów w sklepie vs w firmie",
          "Klient zamawia produkt, którego nie ma na magazynie",
          "B2B i B2C to dwa osobne systemy z osobnym utrzymaniem",
          "Zdjęcia, opisy, warianty — kopiowanie między systemami",
          "Marketplace (Allegro, Amazon) = kolejny system do ręcznego zarządzania"
        ]
      }}
      solution={{
        items: [
          { title: "PIM-first", description: "Produkty z jednego źródła, zero duplikacji" },
          { title: "Real-time stany", description: "Integracja z WMS, klient widzi faktyczną dostępność" },
          { title: "B2C + B2B", description: "Jeden silnik, dwa doświadczenia (ceny detaliczne vs kontraktowe)" },
          { title: "Multi-language", description: "9+ języków z AI tłumaczeniami z PIM" },
          { title: "Multi-channel", description: "Jeden PIM → sklep + Allegro + Amazon + B2B portal" },
          { title: "Cenniki kontrahenckie", description: "Indywidualne ceny dla partnerów B2B" }
        ]
      }}
      features={{
        items: [
          "Katalog produktowy zasilany z PIM (auto-sync)",
          "Koszyk, checkout, płatności online",
          "Stany magazynowe w real-time (z WMS)",
          "Panel B2B: logowanie kontrahenta, ceny kontraktowe, historia zamówień",
          "Multi-sklep: jeden backend → wiele frontów (marki, rynki, języki)",
          "SEO: meta tagi, opisy, URL-e generowane z PIM",
          "Integracja z marketplace (Allegro, Amazon, eBay)",
          "Responsywny frontend (mobile-first)",
          "Zamówienia → automatycznie do WMS/MES",
          "Promocje, kupony, rabaty ilościowe",
          "Śledzenie przesyłek (integracja z kurierami)"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI e-Commerce", "Shopify", "WooCommerce", "Magento", "PrestaShop"],
        rows: [
          { label: "Cena/msc", values: ["W pakiecie MABI", "od $79", "\"Darmowy\"*", "od $2,000", "\"Darmowy\"*"] },
          { label: "Integracja z PIM", values: ["✅ Native", "❌ Plugin", "❌ Plugin", "⚠️ Drogi connector", "❌ Plugin"] },
          { label: "Real-time stany WMS", values: ["✅ Native", "❌", "❌", "⚠️", "❌"] },
          { label: "B2B + B2C", values: ["✅ Jeden system", "⚠️ Shopify Plus ($2k+)", "⚠️ Pluginy", "✅", "⚠️ Pluginy"] },
          { label: "Multi-language", values: ["✅ AI z PIM", "⚠️ Ręczne", "⚠️ Plugin", "✅", "✅"] },
          { label: "Zamówienie → produkcja", values: ["✅ MES", "❌", "❌", "❌", "❌"] },
          { label: "Dane w Polsce", values: ["✅", "❌ (USA)", "✅ (self-host)", "✅ (self-host)", "✅ (self-host)"] }
        ],
        footnote: "*WooCommerce/PrestaShop: \"darmowe\" ale hosting + pluginy + utrzymanie = 1-5k zł/msc. Osobny e-commerce to kolejny silos danych."
      }}
      caseStudy={{
        quote: "Mieliśmy WooCommerce + Comarch + osobny B2B portal. Trzy systemy, trzy bazy produktów, ciągłe rozbieżności. Po przejściu na MABI — jeden PIM zasila wszystko. Dodaję produkt raz, pojawia się wszędzie.",
        author: "Dystrybutor materiałów wykończeniowych, 10 000+ SKU"
      }}
      cta={{
        title: "E-commerce, który zna Twój magazyn i produkcję",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
