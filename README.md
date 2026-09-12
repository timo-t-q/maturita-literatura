# Maturita z literatúry

Interaktívna webová aplikácia na prípravu na maturitu zo slovenského jazyka a literatúry.
Obsahuje povinné literárne diela podľa ŠVP zoradené podľa ročníka (1. – 4.) a rozdelené na
poéziu, prózu, drámu a svetovú literatúru.

## Čo aplikácia ponúka

- **Prehľad diel** — kartový layout, filtrovanie podľa ročníka, literárneho druhu, slovenskej
  vs. svetovej literatúry, autora a podľa toho, či ide o štandardizované dielo ŠVP.
- **Detail diela** — autor a jeho životopis, literárny smer, základné údaje (žáner, forma, rok
  vydania, kompozícia), dej v spoiler-free aj plnej verzii, postavy s charakteristikou, témy,
  motívy, jazykové a štylistické prostriedky, citáty a maturitné minimum.
- **Precvičovanie** — kvízy s výberom odpovede, priraďovacie úlohy a doplňovačky s okamžitou
  spätnou väzbou a vysvetlením správnej odpovede. Samostatná stránka generuje zmiešaný test
  naprieč dielami.
- **Sledovanie pokroku** — stav „neprečítané / čítam / naštudované“ pri každom diele, progress
  bar podľa ročníka, druhu a celkovo, plus prehľad výsledkov kvízov.
- **Vlastné poznámky** ku každému dielu.
- **Vyhľadávanie** naprieč všetkými dielami (necitlivé na diakritiku, `Ctrl`/`Cmd` + `K`).
- **Responzívny dizajn** a svetlý / tmavý / systémový režim.

Pokrok, poznámky aj výsledky kvízov sa ukladajú do `localStorage` — aplikácia nemá backend
a nič neposiela na server.

## Technológie

| Časť | Voľba |
| --- | --- |
| Build | Vite |
| UI | React + TypeScript |
| Routing | React Router (`HashRouter` — kvôli GitHub Pages) |
| Štýly | Tailwind CSS |
| Hosting | GitHub Pages (statický build, bez backendu) |

Žiadne runtime závislosti nad rámec Reactu a routera — build je malý a rýchly.

## Lokálny vývoj

```bash
npm install
npm run dev
```

Aplikácia beží na `http://localhost:5173`.

```bash
npm run build     # produkčný build do dist/
npm run preview   # náhľad produkčného buildu
npx tsc -b        # kontrola typov
npm run validate  # kontrola integrity dát o dielach
```

## Nasadenie na GitHub Pages

Workflow `.github/workflows/deploy.yml` zbuilduje projekt a nasadí ho pri každom pushi do
`main`. V nastaveniach repozitára treba raz zapnúť **Settings → Pages → Source: GitHub Actions**.

`base` vo `vite.config.ts` je nastavený na `/maturita-literatura/` — ak repozitár premenuješ,
uprav aj túto hodnotu.

## Ako dopĺňať a upravovať obsah

Dáta o dielach nie sú v komponentoch, ale v samostatných typovaných súboroch:

\
Plné dáta o dielach sú objemné, preto sa do úvodného bundle nedostanú. Prehľad,
vyhľadávanie a bočný panel čítajú generovaný odľahčený index; dej, postavy a cvičenia
sa dosťahujú až pri otvorení detailu diela (samostatný chunk pre každý ročník).

### Pridanie nového diela

1. Otvor súbor príslušného ročníka v `src/data/works/`.
2. Ak autor ešte nie je v poli `autoriN`, pridaj ho (`id`, `meno`, `roky`, `smer`, `zivotopis`).
3. Do poľa `dielaN` pridaj objekt `Dielo`. Povinné polia vynúti TypeScript — `id` musí byť
   unikátny slug bez diakritiky (použije sa v URL `#/dielo/<id>`).
4. Spusti `npm run generate:index` — prepíše generované súbory. Bez toho sa dielo
   v prehľade nezobrazí a CI build zlyhá.
5. Do `ulohy` pridaj cvičenia. `id` každej úlohy musí byť unikátne v celej aplikácii —
   odporúčaná konvencia je `<slug-diela>-k1`, `-p1`, `-d1`.

### Typy úloh

```ts
// Kvíz — jedna správna odpoveď
{ id: 'mor-ho-k1', typ: 'kviz', otazka: '…', moznosti: ['…', '…', '…', '…'], spravna: 2, vysvetlenie: '…' }

// Priraďovanie — spáruj ľavú a pravú stranu
{ id: 'mor-ho-p1', typ: 'priradovanie', zadanie: '…', pary: [{ vlavo: '…', vpravo: '…' }] }

// Doplňovačka — medzery v texte
{ id: 'mor-ho-d1', typ: 'doplnovacka', zadanie: '…',
  text: ['Báseň napísal ', { medzera: 'Samo Chalupka', napoveda: 'autor' }, ' v roku 1864.'] }
```

Po každej úprave dát spusti `npm run validate` — overí duplicitné identifikátory diel
a úloh, odkazy na neexistujúcich autorov, kvízy s neplatným indexom správnej odpovede
a doplňovačky bez medzier. Tá istá kontrola beží aj v CI pred nasadením.

Pri doplňovačke nesú medzery okolo seba vlastné odsadenie — text sa vykresľuje presne tak,
ako je v poli. Odpovede sa porovnávajú bez ohľadu na diakritiku a veľkosť písmen.

## Poznámka k obsahu

Texty sú učebné výťahy určené na opakovanie — nenahrádzajú prečítanie samotného diela ani
školské poznámky. Ak nájdeš faktickú chybu, uprav príslušný súbor v `src/data/works/`.
