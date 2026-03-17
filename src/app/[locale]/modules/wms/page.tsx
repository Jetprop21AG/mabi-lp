import { ModulePage } from "@/components/module-page";

export default function WmsPage() {
  return (
    <ModulePage
      title="WMS — Warehouse Management System"
      hero={{
        title: "Magazyn, który wie co ma i gdzie to leży.",
        description: "Koniec z karteczkami, \"a sprawdź na regale B\" i inwentaryzacjami trwającymi tydzień."
      }}
      problem={{
        items: [
          "Stany magazynowe w ERP nie zgadzają się z rzeczywistością",
          "Inwentaryzacja = zamknięcie magazynu na 2-3 dni",
          "\"Gdzie jest ta paleta?\" — nikt nie wie",
          "Wydania/przyjęcia na papierze, przepisywane do systemu następnego dnia",
          "Brak FIFO/FEFO — przeterminowanie, straty"
        ]
      }}
      solution={{
        items: [
          { title: "Real-time stany", description: "Każde przyjęcie i wydanie rejestrowane natychmiast" },
          { title: "Lokalizacje magazynowe", description: "Regał/półka/miejsce, skanowanie kodów" },
          { title: "Terminal PIN", description: "Magazynier loguje się kodem, widzi zadania na telefonie/tablecie" },
          { title: "Inwentaryzacja ciągła", description: "Bez zamykania magazynu, rotacyjna" },
          { title: "FIFO/FEFO", description: "System podpowiada z której lokalizacji wydać" }
        ]
      }}
      features={{
        items: [
          "Terminal PWA (działa na dowolnym urządzeniu z przeglądarką)",
          "Skanowanie kodów kreskowych / QR aparatem telefonu",
          "Przyjęcia, wydania, przesunięcia międzymagazynowe",
          "Rezerwacje pod zlecenia produkcyjne (integracja z MES)",
          "Alerty: niski stan, rozbieżności, przeterminowanie",
          "Historia ruchów per SKU (pełna traceability)",
          "Raporty: obroty, ABC, martwy stock"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI WMS", "Comarch WMS", "SAP EWM", "WMS-y pudełkowe"],
        rows: [
          { label: "Cena/msc", values: ["od 690 zł", "od 2 000 zł + licencja", "od $5,000", "500-1500 zł"] },
          { label: "Terminal mobilny", values: ["✅ PWA", "✅ Dedykowana apka", "✅", "⚠️ Różnie"] },
          { label: "Integracja PIM+MES", values: ["✅ Native", "❌ Osobne systemy", "❌", "❌"] },
          { label: "Inwentaryzacja ciągła", values: ["✅", "✅", "✅", "❌ Często"] },
          { label: "Bez instalacji", values: ["✅ Przeglądarka", "❌ Klient", "❌", "⚠️"] },
          { label: "Wdrożenie", values: ["1-2 tyg", "1-3 msc", "3-6 msc", "1-4 tyg"] }
        ]
      }}
      caseStudy={{
        quote: "Terminal WMS na telefonie to game-changer. Magazynier skanuje kod, widzi gdzie odłożyć, system aktualizuje stan. Inwentaryzację robimy na bieżąco, bez zamykania magazynu.",
        author: "Firma dystrybucyjna, 15 000+ SKU"
      }}
      cta={{
        title: "Uporządkuj swój magazyn",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
