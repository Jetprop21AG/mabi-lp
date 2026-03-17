import { ModulePage } from "@/components/module-page";

export default function KsefPage() {
  return (
    <ModulePage
      title="KSeF — Krajowy System e-Faktur"
      hero={{
        title: "KSeF bez bólu. Automatycznie.",
        description: "Wysyłaj i odbieraj faktury ustrukturyzowane bezpośrednio z MABI. Zgodność z przepisami Ministerstwa Finansów."
      }}
      problem={{
        items: [
          "Ręczne logowanie do portalu MF",
          "Przepisywanie faktur zakupu z KSeF do systemu",
          "Błędy w strukturze XML",
          "Ryzyko kar za brak wysyłki w terminie"
        ]
      }}
      solution={{
        items: [
          { title: "Wysyłka w tle", description: "Zatwierdź fakturę → system wysyła do KSeF → pobiera UPO" },
          { title: "Odbiór automatyczny", description: "System co 15 min sprawdza nowe faktury zakupu" },
          { title: "Wizualizacja", description: "Podgląd faktury w czytelnym formacie PDF/HTML" },
          { title: "Archiwum", description: "Przechowywanie faktur i UPO zgodnie z wymogami" }
        ]
      }}
      features={{
        items: [
          "Integracja z API KSeF (produkcyjne i testowe)",
          "Walidacja logiczna i schema XML przed wysyłką",
          "Pobieranie numeru KSeF i UPO",
          "Automatyczne tworzenie dokumentów zakupu",
          "Powiadomienia o błędach i statusach",
          "Obsługa tokenów autoryzacyjnych"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI KSeF", "Aplikacja MF", "Zewnętrzny integrator", "Excel"],
        rows: [
          { label: "Automatyzacja", values: ["✅ Pełna", "❌ Ręczna", "⚠️ Częściowa", "❌"] },
          { label: "Integracja z Finansami", values: ["✅ Native", "❌", "⚠️ Connector", "❌"] },
          { label: "Koszt", values: ["W pakiecie", "Darmowy", "Abonament", "Czas"] },
          { label: "Wsparcie", values: ["✅", "❌", "✅", "❌"] }
        ]
      }}
      cta={{
        title: "Bądź gotowy na KSeF",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
