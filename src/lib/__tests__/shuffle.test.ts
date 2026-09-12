import { describe, expect, test } from 'vitest'
import { premiesaj } from '../shuffle'

describe('premiesaj', () => {
  test('nemení pôvodné pole', () => {
    const povodne = [1, 2, 3, 4, 5]
    premiesaj(povodne)
    expect(povodne).toEqual([1, 2, 3, 4, 5])
  })

  test('zachová všetky prvky', () => {
    const vstup = ['a', 'b', 'c', 'd']
    expect(premiesaj(vstup).sort()).toEqual([...vstup].sort())
  })

  test('zvládne prázdne pole aj jeden prvok', () => {
    expect(premiesaj([])).toEqual([])
    expect(premiesaj([7])).toEqual([7])
  })
})
