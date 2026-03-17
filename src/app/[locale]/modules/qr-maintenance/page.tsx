import { ModulePage } from "@/components/module-page";

export default function QrMaintenancePage() {
  return (
    <ModulePage
      title="QR Maintenance — Utrzymanie ruchu"
      hero={{
        title: "Skanuj. Zgłoś. Napraw. Bez papierologii.",
        description: "Zarządzanie awariami i przeglądami maszyn w czasie rzeczywistym. Wystarczy zeskanować kod QR."
      }}
      problem={{
        items: [
          "Awarie zgłaszane telefonicznie lub na kartce — informacja ginie",
          "Brak historii napraw danej maszyny",
          "Przeglądy okresowe są pomijane lub robione \"na papierze\"",
          "Technik nie wie, gdzie jest awaria i jakie części zabrać"
        ]
      }}
      solution={{
        items: [
          { title: "Skanuj QR", description: "Kod QR na każdej maszynie — szybka identyfikacja" },
          { title: "Zgłoś w 10 sekund", description: "Operator wybiera typ awarii na tablecie/telefonie" },
          { title: "Przypisz technika", description: "Automatyczne powiadomienie do działu UR" },
          { title: "Historia napraw", description: "Pełna dokumentacja co, kiedy i przez kogo było robione" }
        ]
      }}
      features={{
        items: [
          "Harmonogram przeglądów okresowych z przypomnieniami",
          "Generowanie kodów QR dla maszyn i urządzeń",
          "Zgłoszenia mobilne (PWA)",
          "Historia napraw i kosztów per maszyna",
          "Alerty o przeterminowanych przeglądach",
          "Statystyki MTBF (Mean Time Between Failures) i MTTR"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI QR Maintenance", "Limble CMMS", "UpKeep", "Comarch"],
        rows: [
          { label: "Integracja z MES", values: ["✅ Pełna", "❌", "❌", "⚠️"] },
          { label: "Zgłoszenia przez QR", values: ["✅", "✅", "✅", "❌"] },
          { label: "Cena/msc", values: ["W pakiecie", "od $40/user", "od $45/user", "Licencja"] },
          { label: "Język PL", values: ["✅", "❌", "❌", "✅"] }
        ]
      }}
      cta={{
        title: "Utrzymanie ruchu pod kontrolą",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
