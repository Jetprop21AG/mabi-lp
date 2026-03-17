import { ModulePage } from "@/components/module-page";

export default function AiHubPage() {
  return (
    <ModulePage
      title="AI Hub — Sztuczna inteligencja w centrum"
      hero={{
        title: "AI to nie gadżet. To Twój najszybszy pracownik.",
        description: "Import danych, tłumaczenia, klasyfikacja produktów, asystent dla każdego działu — wszystko napędzane AI."
      }}
      problem={{
        items: [
          "Import danych od dostawcy = 2 dni ręcznej pracy (Excel → system)",
          "Tłumaczenie 10 000 opisów produktów = miesiące pracy tłumacza",
          "Klasyfikacja produktów = ktoś ręcznie przypisuje kategorie",
          "Pytanie o produkt = szukanie w 3 systemach i pytanie kolegi"
        ]
      }}
      solution={{
        items: [
          { title: "AI Import", description: "Wrzuć Excel/PDF od dostawcy, AI mapuje kolumny, rozpoznaje produkty, importuje" },
          { title: "AI Tłumaczenia", description: "Automatyczne tłumaczenie opisów na 9+ języków z zachowaniem kontekstu branżowego" },
          { title: "AI Klasyfikacja", description: "Automatyczne przypisywanie kategorii, tagów, atrybutów" },
          { title: "AI Asystent", description: "Czat w systemie, zna twoje produkty, ceny, stany, zamówienia" },
          { title: "AI Quality Check", description: "Sprawdza kompletność danych, sugeruje uzupełnienia" }
        ]
      }}
      features={{
        items: [
          "Chat AI wbudowany w każdy moduł (PIM, CRM, MES...)",
          "Import dowolnego formatu (CSV, Excel, PDF, XML) z AI mapowaniem",
          "Tłumaczenia z pamięcią kontekstu (terminologia branżowa)",
          "Generowanie opisów produktowych",
          "Multi-LLM (GPT-4, Claude, Gemini — najlepszy model do zadania)",
          "RAG — AI odpowiada na bazie twoich danych, nie halucynuje",
          "Automatyzacje: reguły \"jeśli X to zrób Y\" z AI decyzjami"
        ]
      }}
      comparison={{
        headers: ["Funkcja", "MABI AI Hub", "ChatGPT Enterprise", "Copilot M365", "Dedykowany dev"],
        rows: [
          { label: "Cena/msc", values: ["od 990 zł", "od $60/user", "od $30/user", "10-50k zł/msc"] },
          { label: "Zna twoje produkty", values: ["✅ RAG na PIM", "❌", "❌", "✅ (po wdrożeniu)"] },
          { label: "Import danych AI", values: ["✅", "❌", "❌", "✅ (custom)"] },
          { label: "Wbudowany w ERP", values: ["✅", "❌ Osobne narzędzie", "⚠️ Office only", "✅"] },
          { label: "Multi-LLM", values: ["✅", "❌ GPT only", "❌ GPT only", "✅"] },
          { label: "Bez promptowania", values: ["✅ Zna kontekst", "❌ Wymaga promptów", "⚠️", "✅"] }
        ]
      }}
      caseStudy={{
        quote: "Import cennika od dostawcy zajmował 2 dni. Teraz wrzucam PDF, AI mapuje 200 pozycji w 30 sekund, ja tylko weryfikuję. Tłumaczenie katalogu na 5 języków — 2 godziny zamiast 2 tygodni.",
        author: "Product Manager, firma z branży dekoracji wnętrz"
      }}
      cta={{
        title: "Wypróbuj AI, które zna Twój biznes",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
