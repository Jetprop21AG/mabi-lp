import { ModulePage } from "@/components/module-page";

export default function QualityControlPage() {
  return (
    <ModulePage
      title="Quality Control — Kontrola Jakości"
      hero={{
        title: "Jakość wbudowana w proces, nie doklejona.",
        description: "Pełna kontrola jakości na każdym etapie produkcji. Od dostawy surowca po wyrywkową kontrolę gotowego produktu."
      }}
      problem={{
        items: [
          "Kontrola jakości na papierze — brak analizy trendów",
          "Wyniki w Excelu, trudno dostępne",
          "Brak traceability — kto sprawdzał, kiedy, wynik",
          "Reklamacje powracają z tego samego powodu"
        ]
      }}
      solution={{
        items: [
          { title: "Checklisty QC w MES", description: "Operator musi wypełnić kartę kontrolną na tablecie" },
          { title: "Automatyczne alerty", description: "Gdy parametr jest poza tolerancją — natychmiastowe powiadomienie" },
          { title: "Pełna historia", description: "Każdy produkt ma przypisaną historię kontroli jakości" },
          { title: "Certyfikaty jakości", description: "Generowane automatycznie po pozytywnym wyniku" }
        ]
      }}
      features={{
        items: [
          "Definiowanie planów kontroli dla surowców i produktów",
          "Pomiary z tolerancjami (np. waga 100g ±2g)",
          "Zdjęcia defektów (bezpośrednio z tabletu)",
          "Raporty Pareto (najczęstsze wady)",
          "Analiza brakowości per dostawca/maszyna/zmiana",
          "Blokada partii wadliwych w WMS"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI QC", "MasterControl", "ETQ", "Excel"],
        rows: [
          { label: "Integracja MES/WMS", values: ["✅ Pełna", "❌", "❌", "❌"] },
          { label: "Zgłaszanie wad na hali", values: ["✅ Tablet", "⚠️", "⚠️", "❌"] },
          { label: "Cena", values: ["W abonamencie", "od $15k/rok", "od $20k/rok", "Darmowy*"] },
          { label: "Analiza danych", values: ["✅ Dashboardy", "✅", "✅", "❌ Ręczna"] }
        ]
      }}
      cta={{
        title: "Zadbaj o jakość systemowo",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
