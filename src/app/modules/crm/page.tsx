import { ModulePage } from "@/components/module-page";

export default function CrmPage() {
  return (
    <ModulePage
      title="CRM — Customer Relationship Management"
      hero={{
        title: "Relacje z klientami, nie arkusze kalkulacyjne.",
        description: "Od pierwszego kontaktu po wieloletnią współpracę — wszystko w jednym miejscu, z kontekstem produktowym z PIM."
      }}
      problem={{
        items: [
          "Kontakty w Outlook, notatki w telefonie, oferty w Wordzie",
          "Handlowiec odchodzi = wiedza o klientach znika",
          "Brak widoczności: kto rozmawia z kim, na jakim etapie",
          "Raportowanie sprzedaży = ręczne zbieranie danych od 7 handlowców",
          "CRM (np. HubSpot) nie wie nic o Twoich produktach i produkcji"
        ]
      }}
      solution={{
        items: [
          { title: "Pipeline sprzedaży", description: "Wizualny, drag & drop, customizowalne etapy" },
          { title: "Kontekst produktowy", description: "Oferta tworzona z produktów z PIM (aktualne ceny, zdjęcia, dostępność)" },
          { title: "Integracja z produkcją", description: "Widzisz czy możesz obiecać termin (dane z MES)" },
          { title: "Kategoryzacja", description: "Segmenty klientów (detal, sieci, B2B, export)" },
          { title: "Mobilny CRM", description: "Handlowiec w terenie ma pełny dostęp" },
          { title: "Planowanie tras", description: "Optymalizacja wizyt (roadmap)" }
        ]
      }}
      features={{
        items: [
          "Zarządzanie kontaktami i firmami",
          "Pipeline z customizowalnymi etapami",
          "Ofertowanie z produktami z PIM (zawsze aktualne ceny)",
          "Historia interakcji (maile, notatki, spotkania)",
          "Raporty: konwersja, wartość pipeline, aktywność handlowców",
          "Integracja z e-mail",
          "Segmentacja klientów (tagi, kategorie, scoring)",
          "Przyszłościowo: AI scoring leadów, automatyzacja follow-upów"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI CRM", "HubSpot Pro", "Salesforce", "Livespace"],
        rows: [
          { label: "Cena/msc", values: ["od 790 zł", "~10 000 zł", "od $5,000", "od 349 zł"] },
          { label: "Integracja z PIM", values: ["✅ Native", "❌", "❌", "❌"] },
          { label: "Kontekst produkcyjny", values: ["✅ MES data", "❌", "❌", "❌"] },
          { label: "Email marketing", values: ["🔜 Roadmap", "✅", "✅ Add-on", "❌"] },
          { label: "Kreator maili", values: ["—", "⚠️ Słaby UX", "✅", "❌"] },
          { label: "Planowanie tras", values: ["🔜 Roadmap", "❌", "❌", "❌"] },
          { label: "Język PL", values: ["✅", "⚠️", "⚠️", "✅"] },
          { label: "Dane w Polsce", values: ["✅", "❌ (USA/EU)", "❌ (USA)", "✅"] }
        ],
        footnote: "Dlaczego nie HubSpot? HubSpot jest świetny do marketingu B2B SaaS. Ale dla producenta nie zna twoich produktów, stanów magazynowych ani obłożenia produkcji. MABI CRM rozumie produkcję, bo jest częścią tego samego systemu."
      }}
      cta={{
        title: "CRM, który rozumie produkcję",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
