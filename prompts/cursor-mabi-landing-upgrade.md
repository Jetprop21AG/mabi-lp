# MABI-ERP.com — Landing Page Upgrade

## Kontekst
Mamy istniejący landing page MABI (Next.js). Trzeba go przebudować na **produkt SaaS** — nie wewnętrzny system, a platforma do sprzedaży firmom produkcyjnym. Deploy na **Vercel**, domena **mabi-erp.com**.

## Cel tego prompta
Upgrade przekazu, struktury i contentu. Kod już jest — zmieniamy narrację, dodajemy brakujące sekcje, wzmacniamy pozycjonowanie.

---

## NOWY PRZEKAZ — KLUCZOWE ZMIANY

### 1. Pozycjonowanie: "AI-native ERP" (nie "jeszcze jeden ERP")

Stary ERP to baza danych z formularzami. MABI to **system, który myśli**.

Kluczowe frazy do użycia:
- "AI-native" (nie "z AI" — AI jest w DNA, nie doklejone)  
- "Pierwszy polski ERP zbudowany z LangGraph i multi-LLM od fundamentów"
- "Twoje dane + sztuczna inteligencja = decyzje w sekundach, nie dniach"
- "Nawet gdy SAP doda AI do swojego systemu z lat 90-tych — będzie droższy 10x i wolniejszy 5x"

### 2. Ton: pewny siebie, technologiczny, polski

- Nie tłumaczymy czym jest ERP — nasz klient wie
- Mówimy jak inżynier do inżyniera, nie jak handlowiec do ofiary
- Polski rynek, polskie realia (KSeF, JPK, ZUS, Comarch, Optima)
- Ale ambicja globalna (multi-language, multi-currency, multi-tenant)

### 3. Wyróżniki vs konkurencja

**vs SAP/Oracle/Dynamics:**
- Wdrożenie: tygodnie, nie lata
- Koszt: 10-20x mniej
- AI: native, nie add-on za dodatkowe $$$
- UX: 2026, nie 2006

**vs Comarch XL/Optima:**
- Cloud-native (nie fat client z lat 00)
- AI wbudowane (import, tłumaczenia, klasyfikacja, chat)
- Mobilne terminale (PWA, nie dedykowane urządzenia)
- B2B portal out-of-the-box
- Real-time (nie "synchronizacja raz na godzinę")

**vs pudełkowe SaaS (Akeneo + HubSpot + osobny WMS + osobny MES):**
- Jeden system zamiast 5 (PIM+CRM+MES+WMS+Finance = MABI)
- Dane przepływają natywnie (zamówienie → produkcja → magazyn → faktura)
- Jeden vendor, jedna faktura, jeden support
- AI zna CAŁY kontekst (nie tylko jeden moduł)

---

## STRUKTURA STRONY

### Hero Section
```
Nagłówek: "ERP nowej generacji. Z AI w DNA."
Podnagłówek: "MABI łączy PIM, MES, WMS, CRM i Finance w jednym systemie — z wbudowaną sztuczną inteligencją opartą na LangGraph. Dla firm produkcyjnych, które chcą działać szybciej niż konkurencja."
CTA: [Zamów demo] [Zobacz moduły]
Pod CTA: "Wdrożenie od 2 tygodni · Bez ukrytych kosztów · Dane w EU"
```

### Tech Stack Banner (nowa sekcja — ważna!)
Poziomy pasek z logotypami/ikonami technologii:
```
Next.js 15 · React · TypeScript · PostgreSQL · LangGraph · Multi-LLM (Claude / GPT-4 / Gemini) · Prisma ORM · PWA
```
Podpis: "Zbudowane na stacku 2026. Nie na frameworku z 2005 roku."

**WAŻNE:** To nie jest detal — to statement. Pokazujemy że to NOWA technologia, nie lifting starego systemu. Decydent techniczny (CTO/IT director) zobaczy ten pasek i od razu zrozumie z czym ma do czynienia.

### "Dlaczego nie..." Section (porównanie)
Trzy kolumny:

**"Dlaczego nie SAP?"**
- Wdrożenie: 12-18 miesięcy → MABI: 2-8 tygodni
- Koszt 5 lat: 500k-2M zł → MABI: 60-150k zł
- AI: add-on za $$$  → MABI: wbudowane
- "SAP jest świetny. Jeśli masz budżet Orlenu."

**"Dlaczego nie Comarch?"**  
- Architektura: klient-serwer z lat 00 → MABI: cloud-native
- Mobilność: wymaga VPN + RDP → MABI: PWA w przeglądarce
- AI: brak → MABI: LangGraph + multi-LLM
- "Comarch działa. Ale czy w 2026 chcesz system zaprojektowany w 2004?"

**"Dlaczego nie 5 osobnych narzędzi?"**
- Akeneo (PIM) + HubSpot (CRM) + SAP ME (MES) + WMS + Symfonia (FK) = 5 vendorów, 5 faktur, zero integracji
- MABI: jeden system, natywna integracja, AI zna cały kontekst
- Koszt 5 narzędzi: 30-50k zł/msc → MABI all-in: ułamek tego
- "Integracja to nie feature. To fundament."

### Moduły — Grid z ikonami
12 kafelków (ikona + nazwa + 1 zdanie):

1. **PIM** — Jedno źródło prawdy dla wszystkich danych produktowych
2. **MES** — Zlecenia, terminale, OEE — produkcja pod kontrolą  
3. **WMS** — Real-time stany, lokalizacje, terminal na telefonie
4. **CRM** — Pipeline, email, VoIP — z kontekstem produktowym
5. **Finance** — Faktury, księga, KSeF, bank — po polsku
6. **AI Hub** — Import, tłumaczenia, klasyfikacja, chat — multi-LLM
7. **B2B Portal** — Samoobsługa kontrahentów, cenniki, zamówienia
8. **HRM** — Urlopy, grafiki, terminal PIN, dane pracowników
9. **e-Commerce** — Sync z marketplace, multi-channel publishing
10. **DMS** — Dokumenty z wersjonowaniem i powiązaniem z obiektami
11. **Maintenance** — CMMS z QR, prewencja, części zamienne
12. **Import Hub** — Kontenery, koszty, QA, śledzenie wysyłek

Każdy kafelek klikalny → podstrona modułu (istniejący content).

### AI Section (rozbudowana — to nasz biggest selling point)

```
Nagłówek: "AI to nie buzzword. To Twój najszybszy pracownik."
```

Trzy showcases:

**🧠 LangGraph — orkiestracja agentów**
"MABI nie używa jednego modelu AI. Używa wielu — GPT-4, Claude, Gemini — orkiestrowanych przez LangGraph. Każdy agent ma swoją specjalizację: jeden importuje dane, drugi planuje produkcję, trzeci odpowiada na pytania klientów. Współpracują jak zespół, nie jak chatbot."

**📥 AI Import — wrzuć cokolwiek**
"Excel od dostawcy w dziwnym formacie? PDF z cennikiem? CSV z hurtowni? Wrzuć plik — AI rozpozna strukturę, zmapuje kolumny, zaimportuje dane. 200 pozycji w 30 sekund."

**💬 AI Chat — zna Twój biznes**
"Pytasz: 'ile mamy na stanie profili B150?' — AI sprawdza WMS i odpowiada. 'Kiedy ostatni przegląd wtryskarki 3?' — AI sprawdza Maintenance. Nie halucynuje — odpowiada na podstawie TWOICH danych."

### Sekcja "Pod maską" (dla technicznych decydentów)

```
Nagłówek: "Dla tych, którzy chcą wiedzieć co jest pod spodem"
```

Bullet points w ciemnym/terminalowym stylu:

- **212,000 linii TypeScript** — nie proof of concept, a produkcyjny system
- **Multi-tenant architecture** — każdy klient na osobnej instancji danych, wspólna platforma
- **11,086 linii schema** — 141 modeli, pełna relacyjna baza (PostgreSQL)
- **105 API endpoints** — RESTful, typed, documented
- **5 AI agentów** — import, voice, planner, enrichment, maintenance (LangGraph)
- **PWA terminale** — produkcja i magazyn na dowolnym urządzeniu z przeglądarką
- **Multi-tenant** — każdy klient izolowany, wspólna platforma, instant provisioning
- **Cloud-native** — zero instalacji, działa w przeglądarce, dane w EU
- **KSeF & JPK ready** — polska compliance od day one

### Social Proof / Liczby
```
17,500+ zarządzanych SKU | 4,490 lokalizacji magazynowych | 3,939 technologii produkcyjnych | 9 języków | 12 zintegrowanych modułów
```

### Pricing Section (placeholder — Adam ustali finalne ceny)

```
Nagłówek: "Modularny cennik. Płacisz za to, czego używasz."
Podnagłówek: "Żadnych ukrytych opłat za licencję, wdrożenie czy 'premium support'."
```

Trzy plany (placeholder — CENY DO USTALENIA):

**Starter**
- PIM + 1 moduł do wyboru
- Do 5 użytkowników
- AI Hub (basic)
- Email support
- [Cena do ustalenia]

**Business** (recommended)
- PIM + MES + WMS + CRM + Finance
- Do 25 użytkowników  
- AI Hub (full)
- B2B Portal
- Dedicated onboarding
- [Cena do ustalenia]

**Enterprise**
- Wszystkie moduły
- Unlimited users
- Custom AI agents
- SLA + priority support
- On-prem option
- [Cena do ustalenia]

Pod cennikiem:
"Migrujesz z Comarch, SAP lub innego systemu? Pomagamy przenieść dane — bezpłatnie w ramach wdrożenia."

### CTA / Demo Section
```
"Przestań dopłacać do systemu, który nie nadąża."
Jeden formularz: imię, firma, email, telefon (opcja), "Z jakiego systemu migrujesz?" (select: Comarch XL, Comarch Optima, SAP, HubSpot, Excel/brak, Inne)
CTA: [Umów bezpłatne demo — 30 min]
```

### Footer
- Linki do modułów
- Blog (placeholder)
- Dokumentacja (placeholder)  
- Kontakt
- "Made in Poland 🇵🇱 · Data hosted in EU 🇪🇺"
- Social: LinkedIn, X

---

## TECHNICZNE WYTYCZNE

### Stack LP
- **Next.js 15 (App Router)**
- **Tailwind CSS** (dark theme jako default, light as option)
- **Framer Motion** (animacje sekcji on-scroll)
- **TypeScript**
- Deploy: **Vercel** (to TYLKO landing page / strona marketingowa — sam SaaS MABI działa na Hetzner/Dokploy)
- Repo: osobne od MABI platform (np. `mabi-landing` lub `mabi-erp-website`)

### Design Direction
- **Dark theme** dominujący (tech/premium feel — jak Linear, Vercel, Raycast)
- Akcent: gradient niebieski → fioletowy (AI/tech vibe)
- Typografia: Inter lub Geist (Vercel font)
- Animacje: subtle, scroll-triggered (Framer Motion)
- Mobile-first responsive
- Ilustracje: abstrakcyjne, geometryczne (nie stockowe zdjęcia)
- Screenshoty UI: prawdziwe screeny MABI z blur na danych (social proof)

### SEO
- Title: "MABI ERP — AI-native ERP dla firm produkcyjnych"
- Description: "Pierwszy polski ERP z wbudowaną sztuczną inteligencją. PIM, MES, WMS, CRM, Finance w jednym systemie. Wdrożenie od 2 tygodni."
- OG image: hero z UI preview
- Sitemap + robots.txt
- Structured data (Product, Organization)

### Performance targets
- Lighthouse: 95+ na wszystkich metrykach
- LCP < 2.5s
- CLS < 0.1
- Static generation (ISR) — zero client-side data fetching na LP

---

## PLIKI ŹRÓDŁOWE (kontekst dla Cursora)

Content na podstrony modułów jest gotowy — użyj go jako bazy ale PRZEFORMUŁUJ pod nowy, bardziej odważny ton. Mniej "problem → rozwiązanie", więcej "oto dlaczego to inna liga".

Porównania z rynkiem (Akeneo, SAP, HubSpot, Comarch) — użyj danych ale NIE kopiuj tabelek 1:1. Zamień na visual comparisons (progress bars, checkmarks, speed comparisons).

## CO NIE ROBIĆ

- ❌ Nie pisz "rewolucja" / "przełom" / "game-changer" — pokaż, nie mów
- ❌ Nie rób stockowych zdjęć ludzi w garniturach przy laptopie
- ❌ Nie rób cennika z grosikami (nie 1 290,00 zł — pisz "od ~1 300 zł/msc")
- ❌ Nie obiecuj czego nie ma (Gantt chart, route optimization = roadmap, nie feature)
- ❌ Nie tłumacz co to ERP — nasz klient wie
- ❌ Nie rób jednej długiej strony — zrób nawigację z podstronami modułów

## CO ZROBIĆ

- ✅ Osobne repo (`mabi-erp-website`)
- ✅ Vercel-ready (vercel.json, next.config z output standalone jeśli potrzebne)
- ✅ Dark theme, premium feel
- ✅ Animacje scroll (Framer Motion)
- ✅ Responsywne — mobile first
- ✅ 12 podstron modułów (mogą być placeholder z hero + feature list na start)
- ✅ `/pricing` — osobna strona z placeholder cenami i CTA
- ✅ `/demo` — formularz kontaktowy
- ✅ `/about` — o nas / technologia (stack, architektura, team)
- ✅ Sekcja "Pod maską" na stronie głównej (212k linii, 141 modeli, etc.)
- ✅ OG images per strona
