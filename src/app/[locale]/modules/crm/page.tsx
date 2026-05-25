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
          "Brak historii rozmów telefonicznych — każdy kontakt to nowa rozmowa od zera",
          "Raportowanie sprzedaży = ręczne zbieranie danych od 7 handlowców",
          "CRM (np. HubSpot) nie wie nic o Twoich produktach i produkcji"
        ]
      }}
      solution={{
        items: [
          { title: "Pipeline sprzedaży", description: "Wizualny, drag & drop, customizowalne etapy" },
          { title: "Kontekst produktowy", description: "Oferta tworzona z produktów z PIM (aktualne ceny, zdjęcia, dostępność)" },
          { title: "Telefonia VoIP", description: "Podłącz numery przez Twilio lub Telnyx — click-to-call, logowanie rozmów w CRM" },
          { title: "Agenci głosowi AI", description: "Automatyczna obsługa części ruchu: kwalifikacja leadów, przekierowania, notatki z rozmowy" },
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
          "Historia interakcji (maile, rozmowy telefoniczne, notatki, spotkania)",
          "Integracja VoIP: Twilio i Telnyx (numery firmowe, click-to-call)",
          "Nagrywanie i transkrypcja rozmów z automatycznym wpisem do CRM",
          "Sekwencje i automatyzacje follow-up (email + telefon)",
          "Integracja z e-mail",
          "Segmentacja klientów (tagi, kategorie, scoring)",
          "AI scoring leadów i podsumowania rozmów"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI CRM", "HubSpot Pro", "Salesforce", "Livespace"],
        rows: [
          { label: "Cena/msc", values: ["od 790 zł", "~10 000 zł", "od $5,000", "od 349 zł"] },
          { label: "Integracja z PIM", values: ["✅ Native", "❌", "❌", "❌"] },
          { label: "Kontekst produkcyjny", values: ["✅ MES data", "❌", "❌", "❌"] },
          { label: "VoIP / telefonia", values: ["✅ Twilio + Telnyx", "❌ Add-on", "❌ Add-on", "⚠️ Integracja"] },
          { label: "Agenci głosowi AI", values: ["✅ LangGraph", "❌", "❌", "❌"] },
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
