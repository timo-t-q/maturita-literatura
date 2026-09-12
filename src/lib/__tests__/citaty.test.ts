import { describe, expect, test } from 'vitest'
import { bezUvodzoviek } from '../citaty'

describe('bezUvodzoviek', () => {
  test('odstráni slovenské typografické úvodzovky', () => {
    expect(bezUvodzoviek('„Mor ho!“')).toBe('Mor ho!')
  })

  test('odstráni rovné úvodzovky aj apostrofy na okrajoch', () => {
    expect(bezUvodzoviek('"Byť či nebyť"')).toBe('Byť či nebyť')
  })

  test('nechá text bez úvodzoviek nezmenený', () => {
    expect(bezUvodzoviek('Byť či nebyť')).toBe('Byť či nebyť')
  })

  test('nezasahuje do úvodzoviek vnútri textu', () => {
    expect(bezUvodzoviek('povedal „choď“ a odišiel')).toBe('povedal „choď“ a odišiel')
  })

  test('oreže okolité medzery', () => {
    expect(bezUvodzoviek('  „text“  ')).toBe('text')
  })
})
