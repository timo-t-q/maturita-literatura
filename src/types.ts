/** Ročník podľa ŠVP (1.–4.) */
export type Rocnik = 1 | 2 | 3 | 4

/** Literárny druh / kategória v prehľade */
export type Druh = 'poezia' | 'proza' | 'drama'

/** Národná príslušnosť diela — slovenská vs. svetová literatúra */
export type Literatura = 'slovenska' | 'svetova'

/** Typ cvičenia v sekcii precvičovania */
export type UlohaTyp = 'kviz' | 'priradovanie' | 'doplnovacka'

export interface Autor {
  /** stabilný slug, napr. "hviezdoslav" */
  id: string
  meno: string
  /** roky života, napr. "1849 – 1921" */
  roky?: string
  /** literárny smer / obdobie, napr. "realizmus", "slovenská moderna" */
  smer: string
  /** krátky životopis, 2–5 viet */
  zivotopis: string
  /** ďalšie významné diela autora (názvy) */
  dalsieDiela?: string[]
}

export interface Postava {
  meno: string
  /** charakteristika postavy, 1–3 vety */
  charakteristika: string
  /** napr. "hlavná", "vedľajšia" */
  rola?: 'hlavna' | 'vedlajsia'
}

export interface Citat {
  text: string
  /** kto to hovorí alebo odkiaľ je citát */
  zdroj?: string
}

/** Kvízová otázka s výberom jednej správnej odpovede */
export interface KvizOtazka {
  id: string
  typ: 'kviz'
  otazka: string
  moznosti: string[]
  /** index správnej odpovede v `moznosti` */
  spravna: number
  /** vysvetlenie zobrazené po odpovedi */
  vysvetlenie: string
}

/** Priraďovacia úloha — spáruj ľavú stranu s pravou */
export interface PriradovanieUloha {
  id: string
  typ: 'priradovanie'
  zadanie: string
  pary: { vlavo: string; vpravo: string }[]
  vysvetlenie?: string
}

/** Doplňovačka — text s medzerami `___`, ktoré sa dopĺňajú */
export interface DoplnovackaUloha {
  id: string
  typ: 'doplnovacka'
  zadanie: string
  /** segmenty textu; medzery sú vyjadrené ako `{ medzera: "odpoveď" }` */
  text: (string | { medzera: string; napoveda?: string })[]
  vysvetlenie?: string
}

export type Uloha = KvizOtazka | PriradovanieUloha | DoplnovackaUloha

export interface Dielo {
  /** stabilný slug pre URL, napr. "mor-ho" */
  id: string
  nazov: string
  /** id autora z `authors.ts`; chýba pri anonymných dielach (napr. Biblia) */
  autorId?: string
  /** zobrazený autor, ak nie je v zozname autorov (napr. "neznámy autor") */
  autorText?: string
  rocnik: Rocnik
  druh: Druh
  literatura: Literatura
  /** je dielo v zozname štandardizovaných diel ŠVP (maturitná otázka)? */
  standardizovane: boolean

  zaner: string
  forma: string
  /** rok vydania / vzniku, napr. "1861", "8. stor. pred Kr." */
  rokVydania: string
  /** literárny smer / obdobie diela */
  obdobie: string
  /** miesto a čas deja */
  miestoACas?: string

  /** 1–2 vety bez spoilerov — o čom dielo je */
  anotacia: string
  /** dej / obsah s prezradením konca, 1–6 odstavcov */
  obsah: string[]
  /** kompozícia diela (členenie na časti, spevy, dejstvá) */
  kompozicia?: string

  postavy: Postava[]
  temy: string[]
  motivy: string[]
  /** jazykové a štylistické prostriedky */
  jazyk: string[]
  citaty?: Citat[]
  /** dodatočné poznámky, súvislosti, čo si zapamätať na maturitu */
  maturitneMinimum?: string[]

  ulohy: Uloha[]
}
