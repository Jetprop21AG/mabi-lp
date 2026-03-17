import { ModulePage } from "@/components/module-page";

export default function MesPage() {
  return (
    <ModulePage
      title="MES — Manufacturing Execution System"
      hero={{
        title: "Produkcja pod kontrolą. W czasie rzeczywistym.",
        description: "Od zlecenia produkcyjnego po gotowy produkt — śledź każdy etap, każdą maszynę, każdego operatora."
      }}
      problem={{
        items: [
          "Zlecenia produkcyjne na papierze lub w Excelu",
          "Nie wiesz ile naprawdę trwa dana operacja",
          "Braki materiałowe odkrywasz w trakcie produkcji",
          "Jakość kontrolujesz \"na oko\"",
          "Raportowanie ręczne — dane spóźnione o dni"
        ]
      }}
      solution={{
        items: [
          { title: "Zlecenia produkcyjne", description: "Tworzenie, priorytetyzacja, śledzenie statusu w real-time" },
          { title: "BOM (Bill of Materials)", description: "Receptury/technologie powiązane z SKU z PIM" },
          { title: "Terminal produkcyjny", description: "Operator loguje się PINem, widzi swoje zadania, raportuje postęp" },
          { title: "Kontrola jakości", description: "Checklisty QC na każdym etapie" },
          { title: "Stanowiska robocze", description: "Obłożenie maszyn, planowanie zmian" },
          { title: "Maintenance", description: "Harmonogram przeglądów, QR kody na maszynach" }
        ]
      }}
      features={{
        items: [
          "Planowanie produkcji z wizualizacją obłożenia",
          "Terminal PWA — działa na tablecie w hali (bez instalacji)",
          "Kody QR na stanowiskach → szybki dostęp do dokumentacji",
          "Rejestracja czasu pracy per operacja",
          "Alerty: opóźnienia, braki materiałowe, awarie",
          "Integracja z PIM (BOM → surowce → produkty gotowe)",
          "Raporty: OEE, wydajność per linia/zmiana/operator"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI MES", "Comarch XL Prod.", "SAP ME", "Opcenter"],
        rows: [
          { label: "Cena/msc", values: ["od 1 290 zł", "Licencja + wdrożenie", "od $10,000", "od $8,000"] },
          { label: "Terminal mobilny", values: ["✅ PWA", "❌ Desktop", "✅", "✅"] },
          { label: "QR Maintenance", values: ["✅", "❌", "⚠️ Add-on", "✅"] },
          { label: "Integracja z PIM", values: ["✅ Native", "❌", "❌", "❌"] },
          { label: "AI planowanie", values: ["🔜 Roadmap", "❌", "⚠️", "⚠️"] },
          { label: "Wdrożenie", values: ["2-4 tyg", "3-12 msc", "6-18 msc", "6-12 msc"] },
          { label: "Interface PL", values: ["✅", "✅", "⚠️", "❌"] }
        ]
      }}
      caseStudy={{
        quote: "Przeszliśmy z papierowych zleceń na MABI MES w 3 tygodnie. Operatorzy logują się PINem na tablecie, widzą kolejkę zadań, raportują w real-time. Wiemy dokładnie co się dzieje na hali.",
        author: "Producent paneli dekoracyjnych, Polska"
      }}
      cta={{
        title: "Zdigitalizuj swoją produkcję",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
