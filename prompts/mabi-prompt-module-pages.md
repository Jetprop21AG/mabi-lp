# Prompt: MABI — Rozbudowa strony o podstrony modułów

## Kontekst
Mam landing page MABI (dark theme, Next.js/React). Potrzebuję:
1. **Zamienić moduł HRM/Kadry na e-Commerce** na stronie głównej i w nawigacji
2. **Dodać podstrony dla każdego z 12 modułów** — klikalne z sekcji modułów na stronie głównej
3. Zachować obecny design system (dark theme, pomarańczowe/czerwone akcenty, duże nagłówki, whitespace)

## 12 modułów MABI (pełna lista)

1. **PIM** — Product Information Management
2. **MES** — Manufacturing Execution System
3. **WMS** — Warehouse Management System
4. **CRM** — Customer Relationship Management
5. **AI Hub** — Sztuczna inteligencja (import, tłumaczenia, asystent)
6. **DMS** — Document Management System
7. **e-Commerce** — Sklep online B2C/B2B (NOWY, zastępuje HRM)
8. **QR Maintenance** — Zarządzanie utrzymaniem ruchu
9. **B2B Platform** — Portal dla partnerów handlowych
10. **Quality Control** — Kontrola jakości
11. **Projects** — Zarządzanie projektami
12. **Import Hub** — Inteligentny import danych

## Zmiany na stronie głównej

1. W sekcji modułów (grid z kafelkami) — zamień HRM/Kadry na:
   - **e-Commerce** 🛒
   - Opis: "Sklep online z produktami prosto z PIM. B2C i B2B w jednym, z real-time stanami magazynowymi z WMS."

2. Każdy kafelek modułu → link do podstrony `/modules/[slug]`

## Struktura podstrony modułu (template)

Każda podstrona powinna mieć sekcje:

### Hero Section
- Duży nagłówek (hasło modułu)
- Podtytuł 1-2 zdania
- CTA "Zamów demo"
- Screenshot/mockup UI modułu (placeholder na razie)

### Problem Section
- "Znasz to?" / "Typowe problemy"
- 4-5 bullet pointów z bolączkami klienta
- Ikonki lub ilustracje

### Solution Section
- "Jak MABI to rozwiązuje"
- 4-6 kluczowych funkcji z ikonkami
- Opcjonalnie: mini-screenshot lub animacja

### Features Grid
- Szczegółowa lista funkcji (8-12 pozycji)
- 3-kolumnowy grid z ikonkami

### Comparison Table
- "MABI vs konkurencja"
- Tabela porównawcza z ✅/❌/⚠️
- 4-5 konkurentów per moduł

### Social Proof / Case Study
- Cytat klienta (quote box)
- Opcjonalnie: logo firmy

### CTA Section
- "Gotowy na zmianę?" 
- Przycisk "Zamów demo" + "Porozmawiaj z ekspertem"
- Trust badges (dane w PL, polski support, szybkie wdrożenie)

### Navigation
- Breadcrumb: MABI → Moduły → [Nazwa modułu]
- Sidebar lub bottom: linki do pozostałych modułów ("Zobacz też")
- Back to main

## Content dla modułu e-Commerce (NOWY)

### Hero
**Twój sklep online. Zasilany danymi z PIM.**
Nie buduj e-commerce od zera. Produkty, opisy, zdjęcia, ceny — wszystko płynie automatycznie z MABI PIM. B2C i B2B w jednej platformie.

### Problem
- Sklep online odłączony od ERP — ręczne aktualizacje cen i stanów
- Osobna baza produktów w sklepie vs w firmie
- Klient zamawia produkt, którego nie ma na magazynie
- B2B i B2C to dwa osobne systemy z osobnym utrzymaniem
- Zdjęcia, opisy, warianty — kopiowanie między systemami
- Marketplace (Allegro, Amazon) = kolejny system do ręcznego zarządzania

### Rozwiązanie MABI e-Commerce
- **PIM-first** — produkty z jednego źródła, zero duplikacji
- **Real-time stany** — integracja z WMS, klient widzi faktyczną dostępność
- **B2C + B2B** — jeden silnik, dwa doświadczenia (ceny detaliczne vs kontraktowe)
- **Multi-language** — 9+ języków z AI tłumaczeniami z PIM
- **Multi-channel** — jeden PIM → sklep + Allegro + Amazon + B2B portal
- **Cenniki kontrahenckie** — indywidualne ceny dla partnerów B2B

### Kluczowe funkcje
- Katalog produktowy zasilany z PIM (auto-sync)
- Koszyk, checkout, płatności online
- Stany magazynowe w real-time (z WMS)
- Panel B2B: logowanie kontrahenta, ceny kontraktowe, historia zamówień
- Multi-sklep: jeden backend → wiele frontów (marki, rynki, języki)
- SEO: meta tagi, opisy, URL-e generowane z PIM
- Integracja z marketplace (Allegro, Amazon, eBay)
- Responsywny frontend (mobile-first)
- Zamówienia → automatycznie do WMS/MES
- Promocje, kupony, rabaty ilościowe
- Śledzenie przesyłek (integracja z kurierami)

### Porównanie z rynkiem

| Funkcja | MABI e-Commerce | Shopify | WooCommerce | Magento | PrestaShop |
|---|---|---|---|---|---|
| Cena/msc | W pakiecie MABI | od $79 | "Darmowy"* | od $2,000 | "Darmowy"* |
| Integracja z PIM | ✅ Native | ❌ Plugin | ❌ Plugin | ⚠️ Drogi connector | ❌ Plugin |
| Real-time stany WMS | ✅ Native | ❌ | ❌ | ⚠️ | ❌ |
| B2B + B2C | ✅ Jeden system | ⚠️ Shopify Plus ($2k+) | ⚠️ Pluginy | ✅ | ⚠️ Pluginy |
| Multi-language | ✅ AI z PIM | ⚠️ Ręczne | ⚠️ Plugin | ✅ | ✅ |
| Zamówienie → produkcja | ✅ MES | ❌ | ❌ | ❌ | ❌ |
| Dane w Polsce | ✅ | ❌ (USA) | ✅ (self-host) | ✅ (self-host) | ✅ (self-host) |

*WooCommerce/PrestaShop: "darmowe" ale hosting + pluginy + utrzymanie = 1-5k zł/msc

### Dlaczego nie osobny sklep?
Osobny e-commerce (Shopify, WooCommerce) to **kolejny silos danych**:
- Kopiujesz produkty z ERP do sklepu
- Aktualizujesz ceny ręcznie (albo budżesz integrację za 20-50k)
- Stany magazynowe rozsynchronizowane
- Zamówienie z B2B idzie mailem do handlowca

**MABI e-Commerce jest częścią ekosystemu.** Produkt dodany do PIM → automatycznie w sklepie. Zamówienie → automatycznie w WMS. Klient B2B → widzi swoje ceny z CRM. Zero integracji, bo to jeden system.

### Case study
> "Mieliśmy WooCommerce + Comarch + osobny B2B portal. Trzy systemy, trzy bazy produktów, ciągłe rozbieżności. Po przejściu na MABI — jeden PIM zasila wszystko. Dodaję produkt raz, pojawia się wszędzie."
> — Dystrybutor materiałów wykończeniowych, 10 000+ SKU

### CTA
**E-commerce, który zna Twój magazyn i produkcję →** [Zamów demo]

## Pozostałe moduły — content skrócony (do rozbudowy)

### QR Maintenance
- Hero: "Skanuj. Zgłoś. Napraw. Bez papierologii."
- Problem: Awarie zgłaszane telefonicznie, brak historii napraw, przeglądy pomijane
- Rozwiązanie: QR na maszynie → zgłoszenie w 10 sekund → przypisanie technika → historia napraw
- Funkcje: Harmonogram przeglądów, QR kody, zgłoszenia mobilne, historia per maszyna, alerty, statystyki MTBF/MTTR
- Porównanie: vs CMMS (Limble, UpKeep, Comarch) — tańsze, zintegrowane z MES

### B2B Platform
- Hero: "Portal dla Twoich partnerów handlowych."
- Problem: Zamówienia B2B mailem/telefonem, brak self-service, handlowiec = bottleneck
- Rozwiązanie: Kontrahent loguje się, widzi swoje ceny, składa zamówienie, śledzi status
- Funkcje: Cenniki kontrahenckie, limity kredytowe, historia zamówień, dokumenty (faktury, WZ), promocje B2B
- Porównanie: vs dedykowane B2B (Sana Commerce, OroCommerce) — droższe, nie zintegrowane

### Quality Control
- Hero: "Jakość wbudowana w proces, nie doklejona."
- Problem: Kontrola jakości na papierze, wyniki w Excelu, brak traceability
- Rozwiązanie: Checklisty QC w MES, automatyczne alerty, pełna historia per partia/SKU
- Funkcje: Szablony kontroli, pomiary, zdjęcia defektów, raporty, certyfikaty jakości auto-generowane
- Porównanie: vs osobne QMS (MasterControl, ETQ) — za drogie i nie zintegrowane z produkcją

### Projects
- Hero: "Projekty pod kontrolą. Od pomysłu do realizacji."
- Problem: Projekty w mailu i głowie kierownika, brak widoczności postępu
- Rozwiązanie: Kanban/lista zadań, przypisania, deadline'y, powiązanie z produktami/zleceniami
- Funkcje: Tablica projektów, zadania z terminami, komentarze, pliki, timeline, raporty
- Porównanie: vs Asana/Monday/Jira — dobre ale nie znają twojej produkcji i produktów

### Import Hub
- Hero: "Dane od dostawcy? AI ogarnie."
- Problem: Każdy dostawca inny format, ręczne mapowanie kolumn, literówki, duplikaty
- Rozwiązanie: Wrzuć plik (Excel/CSV/PDF) → AI rozpoznaje strukturę → mapuje na twój schemat → import
- Funkcje: Auto-mapping kolumn, deduplikacja, walidacja, preview przed importem, historia importów
- Porównanie: vs ręczny import / custom skrypty — 10x szybciej, bez programisty

## Wymagania techniczne
- Routing: `/modules/pim`, `/modules/mes`, `/modules/wms` itd.
- Wspólny layout (navbar, footer)
- Responsywne (mobile-first)
- Animacje scroll-triggered (jak na stronie głównej)
- Dark theme consistent z main page
- Placeholder obrazki (gradienty/mockupy) — zastąpimy potem prawdziwymi screenami

## Tone of voice
- Bezpośredni, konkretny
- Nie "korporacyjny" — pisz jak do kolegi, który prowadzi firmę produkcyjną
- Pokaż że rozumiesz produkcję (nie jesteśmy kolejnym SaaS-em z Doliny Krzemowej)
- Polski — naturalny, bez kalki z angielskiego
