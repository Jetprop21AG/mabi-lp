import { ModulePage } from "@/components/module-page";

export default function ImportHubPage() {
  return (
    <ModulePage
      title="Import Hub — Inteligentny Import"
      hero={{
        title: "Dane od dostawcy? AI ogarnie.",
        description: "Inteligentny asystent importu danych. Wrzuć dowolny plik, a system sam go zmapuje."
      }}
      problem={{
        items: [
          "Każdy dostawca wysyła pliki w innym formacie (Excel, CSV, XML)",
          "Mapowanie kolumn zajmuje godziny i generuje błędy",
          "Literówki, duplikaty, braki w danych",
          "Aktualizacja cen = koszmar"
        ]
      }}
      solution={{
        items: [
          { title: "Wrzuć plik", description: "Excel, CSV, PDF, XML — format nie ma znaczenia" },
          { title: "AI mapowanie", description: "System rozpoznaje strukturę i sugeruje kolumny (np. 'Nazwa' = 'Tytuł produktu')" },
          { title: "Preview", description: "Zobacz dane przed importem, skoryguj błędy" },
          { title: "Gotowe", description: "Importuj tysiące pozycji jednym kliknięciem" }
        ]
      }}
      features={{
        items: [
          "Automatyczne mapowanie kolumn z AI",
          "Wykrywanie duplikatów (na podstawie EAN, SKU)",
          "Walidacja danych (np. czy kod EAN jest poprawny)",
          "Historia importów (możliwość cofnięcia)",
          "Import zdjęć i dokumentów (linki)",
          "Masowa aktualizacja cen i stanów"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI Import Hub", "Ręczny import", "Custom skrypty", "ETL tools"],
        rows: [
          { label: "Czas importu", values: ["Minuty", "Godziny/Dni", "Dni (dev)", "Godziny (konfig)"] },
          { label: "Elastyczność", values: ["✅ AI", "⚠️ Ludzka", "❌ Kod", "⚠️ Konfig"] },
          { label: "Wykrywanie błędów", values: ["✅ Automatyczne", "❌ Oczami", "⚠️ Kod", "✅"] },
          { label: "Cena", values: ["W abonamencie", "Czas pracownika", "Koszt dev", "Licencja"] }
        ]
      }}
      cta={{
        title: "Importuj dane 10x szybciej",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
