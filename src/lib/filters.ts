import type { Dielo, Druh, Literatura, Rocnik } from '../types'

/** Stav filtrov v bočnom paneli. Prázdne polia znamenajú „bez obmedzenia“. */
export interface Filtre {
  rocniky: Rocnik[]
  druhy: Druh[]
  literatury: Literatura[]
  autorId: string | null
  ibaStandardizovane: boolean
}

export const PRAZDNE_FILTRE: Filtre = {
  rocniky: [],
  druhy: [],
  literatury: [],
  autorId: null,
  ibaStandardizovane: false,
}

export function jeAktivny(filtre: Filtre): boolean {
  return (
    filtre.rocniky.length > 0 ||
    filtre.druhy.length > 0 ||
    filtre.literatury.length > 0 ||
    filtre.autorId !== null ||
    filtre.ibaStandardizovane
  )
}

/** Pridá alebo odoberie hodnotu z poľa filtra — vždy vracia nové pole. */
export function prepni<T>(pole: T[], hodnota: T): T[] {
  return pole.includes(hodnota) ? pole.filter((x) => x !== hodnota) : [...pole, hodnota]
}

/** Aplikuje filtre na zoznam diel. Polia sa kombinujú logickým AND. */
export function filtruj(zoznam: Dielo[], filtre: Filtre): Dielo[] {
  return zoznam.filter((d) => {
    if (filtre.rocniky.length > 0 && !filtre.rocniky.includes(d.rocnik)) return false
    if (filtre.druhy.length > 0 && !filtre.druhy.includes(d.druh)) return false
    if (filtre.literatury.length > 0 && !filtre.literatury.includes(d.literatura)) return false
    if (filtre.autorId && d.autorId !== filtre.autorId) return false
    if (filtre.ibaStandardizovane && !d.standardizovane) return false
    return true
  })
}
