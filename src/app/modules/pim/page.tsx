import { ModulePage } from "@/components/module-page";

export default function PimPage() {
  return (
    <ModulePage
      title="PIM — Product Information Management"
      hero={{
        title: "Jeden system. Wszystkie dane produktowe.",
        description: "Koniec z Excelem, rozproszonym contentem i ręcznym kopiowaniem opisów. MABI PIM to single source of truth dla każdego SKU w firmie."
      }}
      problem={{
        items: [
          "Dane produktowe w 5 różnych miejscach (ERP, Excel, e-commerce, katalogi, marketplace)",
          "Każda zmiana = ręczne aktualizacje w kilku systemach",
          "Tłumaczenia w Wordzie, zdjęcia na dysku sieciowym",
          "Nowy handlowiec potrzebuje tygodnia żeby znaleźć aktualny cennik"
        ]
      }}
      solution={{
        items: [
          { title: "Centralny hub", description: "Opisy, zdjęcia, atrybuty, dokumenty, cenniki w jednym miejscu" },
          { title: "Multi-language", description: "9+ języków, AI-assisted tłumaczenia" },
          { title: "Hierarchia produktowa", description: "Linia → Model → SKU, dziedziczenie atrybutów i plików" },
          { title: "Bulk operations", description: "Edycja 1000 produktów naraz, import CSV/Excel" },
          { title: "Auto-sync", description: "Zmiana w PIM → automatyczna aktualizacja na e-commerce, marketplace, B2B" },
          { title: "Certyfikaty i dokumenty", description: "Przypisane do produktu, zawsze aktualna wersja" }
        ]
      }}
      features={{
        items: [
          "Zarządzanie do 50 000+ SKU",
          "99+ atrybutów na produkt (customizowalne)",
          "Warianty (kolor, wymiar, pakowanie)",
          "Import z Comarch XL / dowolnego ERP",
          "Cloudflare CDN na zdjęcia (szybkie ładowanie globalnie)",
          "Wersjonowanie zmian (kto, co, kiedy zmienił)",
          "Role i uprawnienia (kto widzi cenniki, kto edytuje opisy)"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI PIM", "Akeneo", "Pimcore", "Salsify"],
        rows: [
          { label: "Cena/msc", values: ["od 990 zł", "od $2,500", "Open source*", "od $5,000"] },
          { label: "AI tłumaczenia", values: ["✅ Wbudowane", "❌ Plugin", "❌ Custom", "✅ Drogie"] },
          { label: "Import z ERP", values: ["✅ Native", "⚠️ Connector", "⚠️ Custom dev", "⚠️ Connector"] },
          { label: "Multi-channel sync", values: ["✅", "✅", "⚠️", "✅"] },
          { label: "Hierarchia 3-level", values: ["✅", "✅", "✅", "✅"] },
          { label: "Wdrożenie", values: ["1-2 tyg", "2-6 msc", "3-6 msc", "2-4 msc"] },
          { label: "Język PL", values: ["✅ Native", "❌", "❌", "❌"] }
        ],
        footnote: "*Pimcore: open source, ale wdrożenie kosztuje 50-200k zł"
      }}
      caseStudy={{
        quote: "Mieliśmy 16 000 SKU w Comarch, 10 000 na e-commerce, i nikt nie wiedział które dane są aktualne. Po migracji do MABI PIM — jedno źródło prawdy, automatyczny sync, zero ręcznego kopiowania.",
        author: "Producent materiałów wykończeniowych, Polska"
      }}
      cta={{
        title: "Sprawdź jak MABI PIM uporządkuje Twoje dane produktowe",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
