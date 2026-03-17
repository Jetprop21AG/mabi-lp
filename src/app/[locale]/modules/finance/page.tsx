import { ModulePage } from "@/components/module-page";

export default function FinancePage() {
  return (
    <ModulePage
      title="Finance — Finanse i Księgowość"
      hero={{
        title: "Finanse, które rozumieją produkcję.",
        description: "Pełna księgowość zintegrowana z każdym procesem. Od zamówienia surowca po bilans i P&L."
      }}
      problem={{
        items: [
          "Księgowość dowiaduje się o kosztach po fakcie (faktura)",
          "Ręczne wprowadzanie środków trwałych i amortyzacji",
          "Brak kontroli budżetowej w czasie rzeczywistym",
          "Rozbieżności między magazynem a księgami",
          "Problemy z 3-way matching (zamówienie vs dostawa vs faktura)"
        ]
      }}
      solution={{
        items: [
          { title: "Automatyczna dekretacja", description: "AI rozpoznaje typ kosztu i konto księgowe" },
          { title: "Środki trwałe", description: "Automatyczne OT i amortyzacja na podstawie faktury zakupu" },
          { title: "Kontrola budżetu", description: "Blokada zamówienia przy przekroczeniu budżetu działu" },
          { title: "3-way matching", description: "System sam paruje fakturę z PZ i zamówieniem" }
        ]
      }}
      features={{
        items: [
          "Pełna księgowość (KH, KPiR)",
          "Rejestry VAT i JPK",
          "Środki trwałe i WNiP (KŚT)",
          "Rozrachunki i windykacja",
          "Integracja z bankami (wyciągi)",
          "Budżetowanie MPK/projektów",
          "Workflow akceptacji kosztów"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI Finance", "Comarch Optima", "Symfonia", "Excel"],
        rows: [
          { label: "Integracja z produkcją", values: ["✅ Pełna", "⚠️", "⚠️", "❌"] },
          { label: "Kontrola budżetu live", values: ["✅", "❌", "❌", "❌"] },
          { label: "3-way matching", values: ["✅ Auto", "⚠️ Ręczny", "⚠️ Ręczny", "❌"] },
          { label: "Cena", values: ["W pakiecie", "Licencja", "Licencja", "Darmowy"] }
        ]
      }}
      cta={{
        title: "Uporządkuj finanse firmy",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
