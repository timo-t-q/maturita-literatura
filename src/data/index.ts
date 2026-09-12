/**
 * Verejné rozhranie k dátam.
 *
 * Odľahčený prehľad diel a zoznam autorov sú v bundli hneď — potrebuje ich
 * úvodná stránka, prehľad, bočný panel aj vyhľadávanie. Plné dáta o diele
 * (dej, postavy, jazykové prostriedky, cvičenia) sa načítajú až na vyžiadanie
 * cez `nacitajDielo` / `nacitajRocnik`, ktoré dynamicky importujú príslušný
 * ročník. Vďaka tomu úvodný bundle nerastie s každým pridaným dielom.
 */
import type { Autor, Dielo, Druh, Literatura, Rocnik } from '../types'
import type { DieloPrehlad } from './prehlad'
import { prehladDiel } from './prehlad.generated'
import { autori } from './autori.generated'

export type { DieloPrehlad }
export { autori }

export const diela: DieloPrehlad[] = prehladDiel

const autorMap = new Map(autori.map((a) => [a.id, a]))
const prehladMap = new Map(diela.map((d) => [d.id, d]))

export function najdiAutora(id: string | undefined): Autor | undefined {
  return id ? autorMap.get(id) : undefined
}

export function najdiPrehlad(id: string | undefined): DieloPrehlad | undefined {
  return id ? prehladMap.get(id) : undefined
}

/** Meno autora pre zobrazenie — v prehľade je už predpočítané. */
export const menoAutora = (dielo: DieloPrehlad) => dielo.autor

// --- Lenivé načítanie plných dát ---------------------------------------------

const nacitavace: Record<Rocnik, () => Promise<{ diela: Dielo[] }>> = {
  1: () => import('./works/rocnik1').then((m) => ({ diela: m.diela1 })),
  2: () => import('./works/rocnik2').then((m) => ({ diela: m.diela2 })),
  3: () => import('./works/rocnik3').then((m) => ({ diela: m.diela3 })),
  4: () => import('./works/rocnik4').then((m) => ({ diela: m.diela4 })),
}

/** Načítané ročníky si pamätáme, aby sa chunk nesťahoval opakovane. */
const cache = new Map<Rocnik, Promise<Dielo[]>>()

export function nacitajRocnik(rocnik: Rocnik): Promise<Dielo[]> {
  const ulozene = cache.get(rocnik)
  if (ulozene) return ulozene

  const nacitanie = nacitavace[rocnik]().then((m) => m.diela)
  cache.set(rocnik, nacitanie)
  return nacitanie
}

/** Plné dáta jedného diela. Vráti `undefined`, ak dielo neexistuje. */
export async function nacitajDielo(id: string): Promise<Dielo | undefined> {
  const prehlad = prehladMap.get(id)
  if (!prehlad) return undefined

  const vRocniku = await nacitajRocnik(prehlad.rocnik)
  return vRocniku.find((d) => d.id === id)
}

/** Plné dáta všetkých ročníkov — používa stránka precvičovania. */
export async function nacitajVsetkyDiela(rocniky: Rocnik[] = ROCNIKY): Promise<Dielo[]> {
  const casti = await Promise.all(rocniky.map(nacitajRocnik))
  return casti.flat()
}

// --- Konštanty a pomocníci pre prehľad ---------------------------------------

export const ROCNIKY: Rocnik[] = [1, 2, 3, 4]

export const DRUHY: { id: Druh; nazov: string }[] = [
  { id: 'poezia', nazov: 'Poézia' },
  { id: 'proza', nazov: 'Próza' },
  { id: 'drama', nazov: 'Dráma' },
]

export const LITERATURY: { id: Literatura; nazov: string }[] = [
  { id: 'slovenska', nazov: 'Slovenská literatúra' },
  { id: 'svetova', nazov: 'Svetová literatúra' },
]

export const nazovDruhu = (druh: Druh) => DRUHY.find((d) => d.id === druh)!.nazov
export const nazovLiteratury = (lit: Literatura) => LITERATURY.find((l) => l.id === lit)!.nazov

/** Diela zoradené podľa ročníka, potom druhu, potom názvu. */
export function zoradeneDiela(zoznam: DieloPrehlad[] = diela): DieloPrehlad[] {
  const poradieDruhov: Druh[] = ['poezia', 'proza', 'drama']
  return [...zoznam].sort(
    (a, b) =>
      a.rocnik - b.rocnik ||
      poradieDruhov.indexOf(a.druh) - poradieDruhov.indexOf(b.druh) ||
      a.nazov.localeCompare(b.nazov, 'sk'),
  )
}

/** Autori, ktorí majú aspoň jedno dielo — pre filter v bočnom paneli. */
export function autoriSDielami(): { autor: Autor; pocet: number }[] {
  const pocty = new Map<string, number>()
  for (const dielo of diela) {
    if (!dielo.autorId) continue
    pocty.set(dielo.autorId, (pocty.get(dielo.autorId) ?? 0) + 1)
  }
  return autori
    .filter((a) => pocty.has(a.id))
    .map((autor) => ({ autor, pocet: pocty.get(autor.id)! }))
    .sort((a, b) => a.autor.meno.localeCompare(b.autor.meno, 'sk'))
}

/** Celkový počet cvičení — pre štatistiku na domovskej stránke. */
export const pocetUloh = diela.reduce((sum, d) => sum + d.pocetUloh, 0)
