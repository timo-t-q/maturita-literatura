import type { Dielo } from '../types'
import { diela, menoAutora } from '../data'

/** Odstráni diakritiku, aby „Marina“ našlo „Marína“. */
export function normalizuj(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

interface IndexZaznam {
  dielo: Dielo
  nazov: string
  autor: string
  /** ostatné prehľadávané pole spojené do jedného textu */
  telo: string
}

const index: IndexZaznam[] = diela.map((dielo) => ({
  dielo,
  nazov: normalizuj(dielo.nazov),
  autor: normalizuj(menoAutora(dielo)),
  telo: normalizuj(
    [
      dielo.zaner,
      dielo.obdobie,
      dielo.anotacia,
      ...dielo.temy,
      ...dielo.motivy,
      ...dielo.postavy.map((p) => p.meno),
    ].join(' '),
  ),
}))

export interface Vysledok {
  dielo: Dielo
  /** vyššie skóre = lepšia zhoda */
  skore: number
}

/**
 * Fulltextové hľadanie naprieč dielami. Každé slovo dopytu sa musí nájsť
 * aspoň v jednom poli (AND cez slová), zhoda v názve váži najviac.
 */
export function hladaj(dopyt: string, limit = 40): Vysledok[] {
  const slova = normalizuj(dopyt).split(/\s+/).filter(Boolean)
  if (slova.length === 0) return []

  const vysledky: Vysledok[] = []

  for (const zaznam of index) {
    let skore = 0
    let vsetkyNajdene = true

    for (const slovo of slova) {
      if (zaznam.nazov.startsWith(slovo)) skore += 12
      else if (zaznam.nazov.includes(slovo)) skore += 8
      else if (zaznam.autor.includes(slovo)) skore += 6
      else if (zaznam.telo.includes(slovo)) skore += 2
      else {
        vsetkyNajdene = false
        break
      }
    }

    if (vsetkyNajdene) vysledky.push({ dielo: zaznam.dielo, skore })
  }

  return vysledky
    .sort((a, b) => b.skore - a.skore || a.dielo.nazov.localeCompare(b.dielo.nazov, 'sk'))
    .slice(0, limit)
}
