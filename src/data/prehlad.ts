import type { Druh, Literatura, Rocnik } from '../types'

/**
 * Odľahčený záznam o diele pre prehľad, vyhľadávanie a bočný panel.
 * Obsahuje len polia, ktoré sa dajú zobraziť bez načítania celého diela —
 * vďaka tomu úvodný bundle neobsahuje dej, postavy ani cvičenia.
 */
export interface DieloPrehlad {
  id: string
  nazov: string
  /** meno autora pripravené na zobrazenie */
  autor: string
  autorId?: string
  rocnik: Rocnik
  druh: Druh
  literatura: Literatura
  standardizovane: boolean
  zaner: string
  obdobie: string
  anotacia: string
  pocetUloh: number
  /** témy, motívy a mená postáv spojené do jedného reťazca pre vyhľadávanie */
  hladane: string
}
