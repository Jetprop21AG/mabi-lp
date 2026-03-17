# MABI — Content na podstrony modułów

---

## 1. PIM — Product Information Management

### Hero
**Jeden system. Wszystkie dane produktowe.**
Koniec z Excelem, rozproszonym contentem i ręcznym kopiowaniem opisów. MABI PIM to single source of truth dla każdego SKU w firmie.

### Problem
- Dane produktowe w 5 różnych miejscach (ERP, Excel, e-commerce, katalogi, marketplace)
- Każda zmiana = ręczne aktualizacje w kilku systemach
- Tłumaczenia w Wordzie, zdjęcia na dysku sieciowym
- Nowy handlowiec potrzebuje tygodnia żeby znaleźć aktualny cennik

### Rozwiązanie MABI PIM
- **Centralny hub** — opisy, zdjęcia, atrybuty, dokumenty, cenniki w jednym miejscu
- **Multi-language** — 9+ języków, AI-assisted tłumaczenia
- **Hierarchia produktowa** — Linia → Model → SKU, dziedziczenie atrybutów i plików
- **Bulk operations** — edycja 1000 produktów naraz, import CSV/Excel
- **Auto-sync** — zmiana w PIM → automatyczna aktualizacja na e-commerce, marketplace, B2B
- **Certyfikaty i dokumenty** — przypisane do produktu, zawsze aktualna wersja

### Kluczowe funkcje
- Zarządzanie do 50 000+ SKU
- 99+ atrybutów na produkt (customizowalne)
- Warianty (kolor, wymiar, pakowanie)
- Import z Comarch XL / dowolnego ERP
- Cloudflare CDN na zdjęcia (szybkie ładowanie globalnie)
- Wersjonowanie zmian (kto, co, kiedy zmienił)
- Role i uprawnienia (kto widzi cenniki, kto edytuje opisy)

### Porównanie z rynkiem

| Funkcja | MABI PIM | Akeneo | Pimcore | Salsify |
|---|---|---|---|---|
| Cena/msc | od 990 zł | od $2,500 | Open source* | od $5,000 |
| AI tłumaczenia | ✅ Wbudowane | ❌ Plugin | ❌ Custom | ✅ Drogie |
| Import z ERP | ✅ Native | ⚠️ Connector | ⚠️ Custom dev | ⚠️ Connector |
| Multi-channel sync | ✅ | ✅ | ⚠️ | ✅ |
| Hierarchia 3-level | ✅ | ✅ | ✅ | ✅ |
| Wdrożenie | 1-2 tyg | 2-6 msc | 3-6 msc | 2-4 msc |
| Język PL | ✅ Native | ❌ | ❌ | ❌ |

*Pimcore: open source, ale wdrożenie kosztuje 50-200k zł

### Case study
> "Mieliśmy 16 000 SKU w Comarch, 10 000 na e-commerce, i nikt nie wiedział które dane są aktualne. Po migracji do MABI PIM — jedno źródło prawdy, automatyczny sync, zero ręcznego kopiowania."
> — Producent materiałów wykończeniowych, Polska

### CTA
**Sprawdź jak MABI PIM uporządkuje Twoje dane produktowe →** [Zamów demo]

---

## 2. MES — Manufacturing Execution System

### Hero
**Produkcja pod kontrolą. W czasie rzeczywistym.**
Od zlecenia produkcyjnego po gotowy produkt — śledź każdy etap, każdą maszynę, każdego operatora.

### Problem
- Zlecenia produkcyjne na papierze lub w Excelu
- Nie wiesz ile naprawdę trwa dana operacja
- Braki materiałowe odkrywasz w trakcie produkcji
- Jakość kontrolujesz "na oko"
- Raportowanie ręczne — dane spóźnione o dni

### Rozwiązanie MABI MES
- **Zlecenia produkcyjne** — tworzenie, priorytetyzacja, śledzenie statusu w real-time
- **BOM (Bill of Materials)** — receptury/technologie powiązane z SKU z PIM
- **Terminal produkcyjny** — operator loguje się PINem, widzi swoje zadania, raportuje postęp
- **Kontrola jakości** — checklisty QC na każdym etapie
- **Stanowiska robocze** — obłożenie maszyn, planowanie zmian
- **Maintenance** — harmonogram przeglądów, QR kody na maszynach

### Kluczowe funkcje
- Planowanie produkcji z wizualizacją obłożenia
- Terminal PWA — działa na tablecie w hali (bez instalacji)
- Kody QR na stanowiskach → szybki dostęp do dokumentacji
- Rejestracja czasu pracy per operacja
- Alerty: opóźnienia, braki materiałowe, awarie
- Integracja z PIM (BOM → surowce → produkty gotowe)
- Raporty: OEE, wydajność per linia/zmiana/operator

### Porównanie z rynkiem

| Funkcja | MABI MES | Comarch XL Prod. | SAP ME | Opcenter |
|---|---|---|---|---|
| Cena/msc | od 1 290 zł | Licencja + wdrożenie | od $10,000 | od $8,000 |
| Terminal mobilny | ✅ PWA | ❌ Desktop | ✅ | ✅ |
| QR Maintenance | ✅ | ❌ | ⚠️ Add-on | ✅ |
| Integracja z PIM | ✅ Native | ❌ | ❌ | ❌ |
| AI planowanie | 🔜 Roadmap | ❌ | ⚠️ | ⚠️ |
| Wdrożenie | 2-4 tyg | 3-12 msc | 6-18 msc | 6-12 msc |
| Interface PL | ✅ | ✅ | ⚠️ | ❌ |

### Case study
> "Przeszliśmy z papierowych zleceń na MABI MES w 3 tygodnie. Operatorzy logują się PINem na tablecie, widzą kolejkę zadań, raportują w real-time. Wiemy dokładnie co się dzieje na hali."
> — Producent paneli dekoracyjnych, Polska

### CTA
**Zdigitalizuj swoją produkcję →** [Zamów demo]

---

## 3. WMS — Warehouse Management System

### Hero
**Magazyn, który wie co ma i gdzie to leży.**
Koniec z karteczkami, "a sprawdź na regale B" i inwentaryzacjami trwającymi tydzień.

### Problem
- Stany magazynowe w ERP nie zgadzają się z rzeczywistością
- Inwentaryzacja = zamknięcie magazynu na 2-3 dni
- "Gdzie jest ta paleta?" — nikt nie wie
- Wydania/przyjęcia na papierze, przepisywane do systemu następnego dnia
- Brak FIFO/FEFO — przeterminowanie, straty

### Rozwiązanie MABI WMS
- **Real-time stany** — każde przyjęcie i wydanie rejestrowane natychmiast
- **Lokalizacje magazynowe** — regał/półka/miejsce, skanowanie kodów
- **Terminal PIN** — magazynier loguje się kodem, widzi zadania na telefonie/tablecie
- **Inwentaryzacja ciągła** — bez zamykania magazynu, rotacyjna
- **FIFO/FEFO** — system podpowiada z której lokalizacji wydać

### Kluczowe funkcje
- Terminal PWA (działa na dowolnym urządzeniu z przeglądarką)
- Skanowanie kodów kreskowych / QR aparatem telefonu
- Przyjęcia, wydania, przesunięcia międzymagazynowe
- Rezerwacje pod zlecenia produkcyjne (integracja z MES)
- Alerty: niski stan, rozbieżności, przeterminowanie
- Historia ruchów per SKU (pełna traceability)
- Raporty: obroty, ABC, martwy stock

### Porównanie z rynkiem

| Funkcja | MABI WMS | Comarch WMS | SAP EWM | WMS-y pudełkowe |
|---|---|---|---|---|
| Cena/msc | od 690 zł | od 2 000 zł + licencja | od $5,000 | 500-1500 zł |
| Terminal mobilny | ✅ PWA | ✅ Dedykowana apka | ✅ | ⚠️ Różnie |
| Integracja PIM+MES | ✅ Native | ❌ Osobne systemy | ❌ | ❌ |
| Inwentaryzacja ciągła | ✅ | ✅ | ✅ | ❌ Często |
| Bez instalacji | ✅ Przeglądarka | ❌ Klient | ❌ | ⚠️ |
| Wdrożenie | 1-2 tyg | 1-3 msc | 3-6 msc | 1-4 tyg |

### Case study
> "Terminal WMS na telefonie to game-changer. Magazynier skanuje kod, widzi gdzie odłożyć, system aktualizuje stan. Inwentaryzację robimy na bieżąco, bez zamykania magazynu."
> — Firma dystrybucyjna, 15 000+ SKU

### CTA
**Uporządkuj swój magazyn →** [Zamów demo]

---

## 4. CRM — Customer Relationship Management

### Hero
**Relacje z klientami, nie arkusze kalkulacyjne.**
Od pierwszego kontaktu po wieloletnią współpracę — wszystko w jednym miejscu, z kontekstem produktowym z PIM.

### Problem
- Kontakty w Outlook, notatki w telefonie, oferty w Wordzie
- Handlowiec odchodzi = wiedza o klientach znika
- Brak widoczności: kto rozmawia z kim, na jakim etapie
- Raportowanie sprzedaży = ręczne zbieranie danych od 7 handlowców
- CRM (np. HubSpot) nie wie nic o Twoich produktach i produkcji

### Rozwiązanie MABI CRM
- **Pipeline sprzedaży** — wizualny, drag & drop, customizowalne etapy
- **Kontekst produktowy** — oferta tworzona z produktów z PIM (aktualne ceny, zdjęcia, dostępność)
- **Integracja z produkcją** — widzisz czy możesz obiecać termin (dane z MES)
- **Kategoryzacja** — segmenty klientów (detal, sieci, B2B, export)
- **Mobilny CRM** — handlowiec w terenie ma pełny dostęp
- **Planowanie tras** — optymalizacja wizyt (roadmap)

### Kluczowe funkcje
- Zarządzanie kontaktami i firmami
- Pipeline z customizowalnymi etapami
- Ofertowanie z produktami z PIM (zawsze aktualne ceny)
- Historia interakcji (maile, notatki, spotkania)
- Raporty: konwersja, wartość pipeline, aktywność handlowców
- Integracja z e-mail
- Segmentacja klientów (tagi, kategorie, scoring)
- Przyszłościowo: AI scoring leadów, automatyzacja follow-upów

### Porównanie z rynkiem

| Funkcja | MABI CRM | HubSpot Pro | Salesforce | Livespace |
|---|---|---|---|---|
| Cena/msc | od 790 zł | ~10 000 zł | od $5,000 | od 349 zł |
| Integracja z PIM | ✅ Native | ❌ | ❌ | ❌ |
| Kontekst produkcyjny | ✅ MES data | ❌ | ❌ | ❌ |
| Email marketing | 🔜 Roadmap | ✅ | ✅ Add-on | ❌ |
| Kreator maili | — | ⚠️ Słaby UX | ✅ | ❌ |
| Planowanie tras | 🔜 Roadmap | ❌ | ❌ | ❌ |
| Język PL | ✅ | ⚠️ | ⚠️ | ✅ |
| Dane w Polsce | ✅ | ❌ (USA/EU) | ❌ (USA) | ✅ |

### Dlaczego nie HubSpot?
HubSpot jest świetny do marketingu B2B SaaS. Ale dla **producenta**:
- Nie zna twoich produktów (musisz ręcznie kopiować)
- Nie wie co jest na magazynie
- Nie wie czy produkcja nadąży z zamówieniem
- Kreator maili to relikt — za mało drag & drop, za dużo walki z layoutem
- 10k/msc za coś co nie rozumie twojego biznesu

**MABI CRM rozumie produkcję.** Bo jest częścią tego samego systemu.

### CTA
**CRM, który rozumie produkcję →** [Zamów demo]

---

## 5. AI Hub — Sztuczna inteligencja w centrum

### Hero
**AI to nie gadżet. To Twój najszybszy pracownik.**
Import danych, tłumaczenia, klasyfikacja produktów, asystent dla każdego działu — wszystko napędzane AI.

### Problem
- Import danych od dostawcy = 2 dni ręcznej pracy (Excel → system)
- Tłumaczenie 10 000 opisów produktów = miesiące pracy tłumacza
- Klasyfikacja produktów = ktoś ręcznie przypisuje kategorie
- Pytanie o produkt = szukanie w 3 systemach i pytanie kolegi

### Rozwiązanie MABI AI Hub
- **AI Import** — wrzuć Excel/PDF od dostawcy, AI mapuje kolumny, rozpoznaje produkty, importuje
- **AI Tłumaczenia** — automatyczne tłumaczenie opisów na 9+ języków z zachowaniem kontekstu branżowego
- **AI Klasyfikacja** — automatyczne przypisywanie kategorii, tagów, atrybutów
- **AI Asystent** — czat w systemie, zna twoje produkty, ceny, stany, zamówienia
- **AI Quality Check** — sprawdza kompletność danych, sugeruje uzupełnienia

### Kluczowe funkcje
- Chat AI wbudowany w każdy moduł (PIM, CRM, MES...)
- Import dowolnego formatu (CSV, Excel, PDF, XML) z AI mapowaniem
- Tłumaczenia z pamięcią kontekstu (terminologia branżowa)
- Generowanie opisów produktowych
- Multi-LLM (GPT-4, Claude, Gemini — najlepszy model do zadania)
- RAG — AI odpowiada na bazie twoich danych, nie halucynuje
- Automatyzacje: reguły "jeśli X to zrób Y" z AI decyzjami

### Porównanie z rynkiem

| Funkcja | MABI AI Hub | ChatGPT Enterprise | Copilot M365 | Dedykowany dev |
|---|---|---|---|---|
| Cena/msc | od 990 zł | od $60/user | od $30/user | 10-50k zł/msc |
| Zna twoje produkty | ✅ RAG na PIM | ❌ | ❌ | ✅ (po wdrożeniu) |
| Import danych AI | ✅ | ❌ | ❌ | ✅ (custom) |
| Wbudowany w ERP | ✅ | ❌ Osobne narzędzie | ⚠️ Office only | ✅ |
| Multi-LLM | ✅ | ❌ GPT only | ❌ GPT only | ✅ |
| Bez promptowania | ✅ Zna kontekst | ❌ Wymaga promptów | ⚠️ | ✅ |

### Case study
> "Import cennika od dostawcy zajmował 2 dni. Teraz wrzucam PDF, AI mapuje 200 pozycji w 30 sekund, ja tylko weryfikuję. Tłumaczenie katalogu na 5 języków — 2 godziny zamiast 2 tygodni."
> — Product Manager, firma z branży dekoracji wnętrz

### CTA
**Wypróbuj AI, które zna Twój biznes →** [Zamów demo]

---

## 6. HRM — Human Resource Management

### Hero
**Ludzie to Twój najważniejszy zasób. Zarządzaj nimi godnie.**
Urlopy, grafiki, dane pracowników — bez papierowych wniosków i Excelowych tabelek.

### Problem
- Wnioski urlopowe na papierze → do kadr → czekasz na odpowiedź
- Grafik zmianowy w Excelu — ciągłe konflikty, ręczne zmiany
- Dane pracowników w 3 miejscach (kadry, ERP, Excel kierownika)
- Kto dziś pracuje? Trzeba dzwonić na halę

### Rozwiązanie MABI HRM
- **Urlopy online** — wniosek → akceptacja kierownika → gotowe
- **Grafik zmianowy** — planowanie, publikacja, powiadomienia
- **Baza pracowników** — dane, umowy, badania, szkolenia
- **Terminal PIN** — rejestracja czasu pracy (ten sam terminal co MES/WMS)
- **Dashboard kierownika** — kto pracuje, kto na urlopie, kto na L4

### Kluczowe funkcje
- Elektroniczne wnioski urlopowe z workflow akceptacji
- Grafik zmianowy z drag & drop
- Profil pracownika (dane, dokumenty, historia)
- Rejestracja czasu pracy (PIN na terminalu)
- Alerty: kończące się badania, uprawnienia, umowy
- Raporty: absencja, nadgodziny, rotacja
- Integracja z MES (pracownik ↔ stanowisko ↔ zlecenie)

### Porównanie z rynkiem

| Funkcja | MABI HRM | Sage HR | BambooHR | HR w Comarch |
|---|---|---|---|---|
| Cena/msc | od 490 zł | od $5.5/user | od $6/user | Wliczone w licencję |
| Terminal produkcyjny | ✅ Wspólny z MES | ❌ | ❌ | ❌ |
| Integracja z MES/WMS | ✅ | ❌ | ❌ | ⚠️ |
| Grafik zmianowy | ✅ | ✅ | ⚠️ | ✅ |
| Język PL / prawo PL | ✅ | ⚠️ | ❌ | ✅ |
| Dane w Polsce | ✅ | ❌ | ❌ | ✅ |

### CTA
**Zarządzanie ludźmi bez papierologii →** [Zamów demo]

---

## 7. DMS — Document Management System

### Hero
**Dokumenty pod kontrolą. Zawsze aktualna wersja.**
Certyfikaty, instrukcje, umowy, specyfikacje — wszystko w jednym systemie, powiązane z produktami i pracownikami.

### Problem
- "Gdzie jest ten certyfikat?" — szukanie na dysku sieciowym
- Nieaktualne wersje dokumentów krążą po firmie
- ISO wymaga kontroli wersji — a ty masz foldery "FINAL_v3_POPRAWIONY"
- Dokumenty produktowe odłączone od produktów w systemie

### Rozwiązanie MABI DMS
- **Centralne repozytorium** — upload, kategoryzacja, wyszukiwanie
- **Powiązanie z obiektami** — dokument przypisany do produktu/maszyny/pracownika
- **Wersjonowanie** — historia zmian, kto zmienił, rollback
- **Uprawnienia** — kto widzi co, audit trail
- **Dziedziczenie** — plik na poziomie Linii → widoczny we wszystkich SKU

### Kluczowe funkcje
- Upload dowolnych formatów (PDF, DWG, JPG, XLSX...)
- Powiązanie z PIM (certyfikaty → produkt), MES (instrukcje → stanowisko), HRM (umowy → pracownik)
- Wersjonowanie z historią zmian
- Wyszukiwanie pełnotekstowe
- Automatyczne powiadomienia o wygasających dokumentach (certyfikaty, badania)
- QR kody → szybki dostęp do dokumentacji na hali
- Zgodność z ISO 9001 (kontrola dokumentacji)

### CTA
**Dokumenty w porządku →** [Zamów demo]

---

## Wspólne elementy na każdej podstronie

### Footer CTA (wspólny)
**Przestań płacić za 5 systemów, które nie rozmawiają ze sobą.**
MABI to jeden system. Wszystkie moduły. Pełna integracja.
[Zamów bezpłatne demo] [Porozmawiaj z ekspertem]

### Trust bar
- 🔒 Dane w Polsce (Hetzner DE/PL)
- 🇵🇱 Polski interface i wsparcie
- 🔄 Migracja z Comarch / SAP / HubSpot
- ⏱️ Wdrożenie od 2 tygodni
- 🤖 AI wbudowane, nie doklejone

### Social proof numbers
- 17 500+ zarządzanych SKU
- 3 939 technologii produkcyjnych
- 9 języków produktowych
- 7 zintegrowanych modułów
