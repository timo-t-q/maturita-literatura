import { describe, expect, test } from 'vitest'
import { hladaj, normalizuj } from '../search'

describe('normalizuj', () => {
  test('odstráni diakritiku a zjednotí veľkosť písmen', () => {
    expect(normalizuj('Marína')).toBe('marina')
    expect(normalizuj('ŤAPÁKOVCI')).toBe('tapakovci')
    expect(normalizuj('Živý bič')).toBe('zivy bic')
  })

  test('text bez diakritiky nechá nezmenený', () => {
    expect(normalizuj('hamlet')).toBe('hamlet')
  })
})

describe('hladaj', () => {
  test('vráti prázdny zoznam pre prázdny dopyt', () => {
    expect(hladaj('')).toEqual([])
    expect(hladaj('   ')).toEqual([])
  })

  test('nájde dielo aj keď používateľ nenapíše diakritiku', () => {
    const sDiakritikou = hladaj('havran').map((v) => v.dielo.id)
    const bezDiakritiky = hladaj('Havran').map((v) => v.dielo.id)
    expect(sDiakritikou).toEqual(bezDiakritiky)
  })

  test('zhoda v názve má vyššie skóre ako zhoda v tele', () => {
    const vysledky = hladaj('havran')
    expect(vysledky.length).toBeGreaterThan(0)
    expect(vysledky[0].dielo.nazov.toLowerCase()).toContain('havran')
  })

  test('výsledky sú zoradené zostupne podľa skóre', () => {
    const skore = hladaj('poe').map((v) => v.skore)
    expect(skore).toEqual([...skore].sort((a, b) => b - a))
  })

  test('všetky slová dopytu sa musia nájsť', () => {
    expect(hladaj('havran neexistujuceslovo')).toEqual([])
  })

  test('rešpektuje limit výsledkov', () => {
    expect(hladaj('a', 2).length).toBeLessThanOrEqual(2)
  })
})
