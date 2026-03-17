import { ModulePage } from "@/components/module-page";

export default function ProjectsPage() {
  return (
    <ModulePage
      title="Projects — Zarządzanie Projektami"
      hero={{
        title: "Projekty pod kontrolą. Od pomysłu do realizacji.",
        description: "Planuj, deleguj, realizuj. Zintegrowane zadania dla zespołów produkcyjnych, handlowych i biurowych."
      }}
      problem={{
        items: [
          "Projekty w mailu, na kartkach i w głowie kierownika",
          "Brak widoczności postępu prac",
          "Terminy umykają, bo nie ma jednego harmonogramu",
          "Kto jest odpowiedzialny za to zadanie?"
        ]
      }}
      solution={{
        items: [
          { title: "Kanban", description: "Wizualna tablica zadań: Do zrobienia → W trakcie → Gotowe" },
          { title: "Zadania i deadline'y", description: "Przypisanie osoby, terminu, priorytetu" },
          { title: "Wszystko w jednym miejscu", description: "Komentarze, pliki, linki do produktów/klientów" },
          { title: "Powiązania", description: "Projekt wdrożenia nowego produktu → powiązany z PIM i MES" }
        ]
      }}
      features={{
        items: [
          "Zarządzanie projektami wdrożeniowymi i wewnętrznymi",
          "Delegowanie zadań z powiadomieniami",
          "Checklisty podzadań",
          "Rejestracja czasu pracy nad projektem",
          "Wykresy Gantta (harmonogram)",
          "Raporty postępu prac"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI Projects", "Asana", "Monday.com", "Jira"],
        rows: [
          { label: "Integracja z PIM/MES", values: ["✅ Pełna", "❌", "❌", "❌"] },
          { label: "Cena", values: ["W abonamencie", "od €13/user", "od €10/user", "od $8/user"] },
          { label: "Dla produkcji", values: ["✅ Dedykowane", "❌ Ogólne", "❌ Ogólne", "❌ IT/Dev"] },
          { label: "Zarządzanie czasem", values: ["✅ RCP", "⚠️ Add-on", "⚠️ Add-on", "⚠️ Add-on"] }
        ]
      }}
      cta={{
        title: "Uporządkuj projekty firmowe",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
