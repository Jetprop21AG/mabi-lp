import { ModulePage } from "@/components/module-page";

export default function ProcurementPage() {
  return (
    <ModulePage
      title="Procurement — Zakupy"
      hero={{
        title: "Kupuj mądrze. Kontroluj budżet.",
        description: "Zapotrzebowania, zamówienia i akceptacja kosztów. System sprawdza budżet ZANIM wydasz pieniądze."
      }}
      problem={{
        items: [
          "Zakupy \"na telefon\" bez śladu w systemie",
          "Faktury przychodzą, a nikt nie wie kto to zamówił",
          "Przekroczenie budżetu działu w połowie miesiąca",
          "Brak porównania ofert dostawców"
        ]
      }}
      solution={{
        items: [
          { title: "Zapotrzebowania", description: "Pracownik zgłasza potrzebę (np. nowy laptop)" },
          { title: "Workflow akceptacji", description: "Kierownik zatwierdza (jeśli jest budżet)" },
          { title: "Zamówienie do dostawcy", description: "Automatyczna wysyłka PDF z systemu" },
          { title: "Kontrola dostaw", description: "System pilnuje terminu i kompletności" }
        ]
      }}
      features={{
        items: [
          "Zapotrzebowania wewnętrzne (Purchase Requisition)",
          "Zamówienia zakupu (Purchase Order)",
          "Baza dostawców i cenniki",
          "Porównywarka ofert",
          "Ocena dostawców (terminowość, jakość)",
          "Integracja z WMS (awizacja dostawy)"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI Procurement", "Marketplanet", "Logintrade", "Excel/Mail"],
        rows: [
          { label: "Integracja z Finansami", values: ["✅ Pełna", "⚠️", "⚠️", "❌"] },
          { label: "Kontrola budżetu", values: ["✅ Live", "✅", "✅", "❌"] },
          { label: "Cena", values: ["W pakiecie", "Wysoka", "Wysoka", "Darmowy"] },
          { label: "Dla MŚP", values: ["✅", "❌ Enterprise", "❌ Enterprise", "✅"] }
        ]
      }}
      cta={{
        title: "Zapanuj nad wydatkami",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
