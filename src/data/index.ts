import type { Autor, Dielo, Druh, Literatura, Rocnik } from '../types'
import { autori1, diela1 } from './works/rocnik1'
import { autori2, diela2 } from './works/rocnik2'
import { autori3, diela3 } from './works/rocnik3'
import { autori4, diela4 } from './works/rocnik4'

/** Všetci autori, deduplikovaní podľa `id` (autor môže mať diela v 2 ročníkoch). */
export const autori: Autor[] = Object.values(
  [...autori1, ...autori2, ...autori3, ...autori4].reduce<Record<string, Autor>>((acc, autor) => {
    if (!acc[autor.id]) acc[autor.id] = autor
    return acc
  }, {}),
).sort((a, b) => a.meno.localeCompare(b.meno, 'sk'))

export const diela: Dielo[] = [...diela1, ...diela2, ...diela3, ...diela4]

const autorMap = new Map(autori.map((a) => [a.id, a]))
const dieloMap = new Map(diela.map((d) => [d.id, d]))

export function najdiAutora(id: string | undefined): Autor | undefined {
  return id ? autorMap.get(id) : undefined
}

export function najdiDielo(id: string | undefined): Dielo | undefined {
  return id ? dieloMap.get(id) : undefined
}

/** Meno autora pre zobrazenie — z katalógu autorov alebo z `autorText`. */
export function menoAutora(dielo: Dielo): string {
  return najdiAutora(dielo.autorId)?.meno ?? dielo.autorText ?? 'neznámy autor'
}

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
export function zoradeneDiela(zoznam: Dielo[] = diela): Dielo[] {
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
}

/** Celkový počet cvičení v aplikácii — pre štatistiku na domovskej stránke. */
export const pocetUloh = diela.reduce((sum, d) => sum + d.ulohy.length, 0)
