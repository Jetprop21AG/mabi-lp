import { ModulePage } from "@/components/module-page";

export default function FieldSalesPage() {
  return (
    <ModulePage
      title="Field Sales — Mobilny Handlowiec"
      hero={{
        title: "Biuro w kieszeni handlowca.",
        description: "Katalog, zamówienia, trasa, raporty. Aplikacja PWA działająca offline."
      }}
      problem={{
        items: [
          "Handlowiec dzwoni do biura zapytać o cenę i dostępność",
          "Zamówienia spisywane na kartkach, przepisywane wieczorem",
          "Brak historii co klient kupił ostatnio",
          "Kierownik nie wie gdzie jest handlowiec"
        ]
      }}
      solution={{
        items: [
          { title: "Katalog w telefonie", description: "Zdjęcia, opisy, stany magazynowe (z WMS)" },
          { title: "Zamówienia w 3 kliki", description: "Wybierz klienta → dodaj produkt → wyślij" },
          { title: "Offline mode", description: "Pracuj bez zasięgu, synchronizuj później" },
          { title: "Trasa wizyt", description: "GPS i optymalizacja dojazdu" }
        ]
      }}
      features={{
        items: [
          "Baza klientów z historią i zadłużeniem",
          "Indywidualne cenniki i rabaty",
          "Raportowanie wizyt (notatki, zdjęcia)",
          "Planowanie trasy (Google Maps)",
          "Podgląd stanów magazynowych live",
          "Cele sprzedażowe i realizacja"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI Field Sales", "Emigo", "Mobile Touch", "Notes"],
        rows: [
          { label: "Integracja PIM/WMS", values: ["✅ Pełna", "⚠️ Connector", "⚠️ Connector", "❌"] },
          { label: "Offline", values: ["✅ PWA", "✅ App", "✅ App", "✅"] },
          { label: "Cena", values: ["W pakiecie", "Licencja per user", "Licencja per user", "Darmowy"] },
          { label: "AI sugestie", values: ["✅", "❌", "⚠️", "❌"] }
        ]
      }}
      cta={{
        title: "Wyposaż handlowców w narzędzie",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
