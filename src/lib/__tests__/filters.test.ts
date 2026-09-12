import { describe, expect, test } from 'vitest'
import { filtruj, jeAktivny, PRAZDNE_FILTRE, prepni } from '../filters'
import type { DieloPrehlad } from '../../data/prehlad'

/** Minimálny záznam — testujeme len polia, na ktorých filtre závisia. */
function dielo(cast: Partial<DieloPrehlad>): DieloPrehlad {
  return {
    id: 'test',
    nazov: 'Test',
    autor: 'Autor',
    rocnik: 1,
    druh: 'proza',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: '',
    obdobie: '',
    anotacia: '',
    pocetUloh: 0,
    hladane: '',
    ...cast,
  }
}

const vzorka: DieloPrehlad[] = [
  dielo({ id: 'a', rocnik: 1, druh: 'poezia', literatura: 'slovenska', standardizovane: true, autorId: 'x' }),
  dielo({ id: 'b', rocnik: 2, druh: 'proza', literatura: 'svetova', standardizovane: false, autorId: 'y' }),
  dielo({ id: 'c', rocnik: 2, druh: 'drama', literatura: 'slovenska', standardizovane: true, autorId: 'x' }),
]

describe('prepni', () => {
  test('pridá chýbajúcu hodnotu a nemení pôvodné pole', () => {
    const povodne = [1, 2]
    expect(prepni(povodne, 3)).toEqual([1, 2, 3])
    expect(povodne).toEqual([1, 2])
  })

  test('odoberie hodnotu, ktorá už v poli je', () => {
    expect(prepni([1, 2, 3], 2)).toEqual([1, 3])
  })
})

describe('jeAktivny', () => {
  test('prázdne filtre nie sú aktívne', () => {
    expect(jeAktivny(PRAZDNE_FILTRE)).toBe(false)
  })

  test('ktorékoľvek nastavené kritérium filtre aktivuje', () => {
    expect(jeAktivny({ ...PRAZDNE_FILTRE, rocniky: [1] })).toBe(true)
    expect(jeAktivny({ ...PRAZDNE_FILTRE, autorId: 'x' })).toBe(true)
    expect(jeAktivny({ ...PRAZDNE_FILTRE, ibaStandardizovane: true })).toBe(true)
  })
})

describe('filtruj', () => {
  test('bez filtrov vráti všetko', () => {
    expect(filtruj(vzorka, PRAZDNE_FILTRE)).toHaveLength(3)
  })

  test('filtruje podľa ročníka', () => {
    expect(filtruj(vzorka, { ...PRAZDNE_FILTRE, rocniky: [2] }).map((d) => d.id)).toEqual(['b', 'c'])
  })

  test('viac hodnôt v jednom filtri funguje ako OR', () => {
    expect(filtruj(vzorka, { ...PRAZDNE_FILTRE, druhy: ['poezia', 'drama'] }).map((d) => d.id)).toEqual([
      'a',
      'c',
    ])
  })

  test('rôzne filtre sa kombinujú ako AND', () => {
    const vysledok = filtruj(vzorka, { ...PRAZDNE_FILTRE, rocniky: [2], literatury: ['slovenska'] })
    expect(vysledok.map((d) => d.id)).toEqual(['c'])
  })

  test('filtruje podľa autora', () => {
    expect(filtruj(vzorka, { ...PRAZDNE_FILTRE, autorId: 'x' }).map((d) => d.id)).toEqual(['a', 'c'])
  })

  test('ponechá len štandardizované diela', () => {
    expect(filtruj(vzorka, { ...PRAZDNE_FILTRE, ibaStandardizovane: true }).map((d) => d.id)).toEqual([
      'a',
      'c',
    ])
  })

  test('nezhodná kombinácia vráti prázdny zoznam', () => {
    expect(filtruj(vzorka, { ...PRAZDNE_FILTRE, rocniky: [1], druhy: ['drama'] })).toEqual([])
  })
})
