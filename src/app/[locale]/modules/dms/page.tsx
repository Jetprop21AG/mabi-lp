import { ModulePage } from "@/components/module-page";

export default function DmsPage() {
  return (
    <ModulePage
      title="DMS — Document Management System"
      hero={{
        title: "Dokumenty pod kontrolą. Zawsze aktualna wersja.",
        description: "Certyfikaty, instrukcje, umowy, specyfikacje — wszystko w jednym systemie, powiązane z produktami i pracownikami."
      }}
      problem={{
        items: [
          "\"Gdzie jest ten certyfikat?\" — szukanie na dysku sieciowym",
          "Nieaktualne wersje dokumentów krążą po firmie",
          "ISO wymaga kontroli wersji — a ty masz foldery \"FINAL_v3_POPRAWIONY\"",
          "Dokumenty produktowe odłączone od produktów w systemie"
        ]
      }}
      solution={{
        items: [
          { title: "Centralne repozytorium", description: "Upload, kategoryzacja, wyszukiwanie" },
          { title: "Powiązanie z obiektami", description: "Dokument przypisany do produktu/maszyny/pracownika" },
          { title: "Wersjonowanie", description: "Historia zmian, kto zmienił, rollback" },
          { title: "Uprawnienia", description: "Kto widzi co, audit trail" },
          { title: "Dziedziczenie", description: "Plik na poziomie Linii → widoczny we wszystkich SKU" }
        ]
      }}
      features={{
        items: [
          "Upload dowolnych formatów (PDF, DWG, JPG, XLSX...)",
          "Powiązanie z PIM (certyfikaty → produkt), MES (instrukcje → stanowisko), HRM (umowy → pracownik)",
          "Wersjonowanie z historią zmian",
          "Wyszukiwanie pełnotekstowe",
          "Automatyczne powiadomienia o wygasających dokumentach (certyfikaty, badania)",
          "QR kody → szybki dostęp do dokumentacji na hali",
          "Zgodność z ISO 9001 (kontrola dokumentacji)"
        ]
      }}
      cta={{
        title: "Dokumenty w porządku",
        buttonLabel: "Zamów demo",
        link: "/demo"
      }}
    />
  );
}
