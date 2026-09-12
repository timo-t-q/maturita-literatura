/**
 * Vygeneruje odľahčený index diel (src/data/prehlad.generated.ts).
 *
 * Plné dáta o dielach sú objemné — pri 70+ dielach by celý obsah, postavy
 * a cvičenia nafúkli úvodný bundle na stovky kilobajtov. Prehľad, vyhľadávanie
 * a bočný panel však potrebujú len zopár polí. Ťažké dáta sa preto načítavajú
 * až pri otvorení detailu diela (dynamický import ročníka).
 *
 * Spúšťa sa cez `npm run generate:index`; CI overuje, že je súbor aktuálny.
 */
import { writeFileSync } from 'node:fs'
import { autori, diela, menoAutora } from '../src/data/full'

const zaznamy = diela.map((dielo) => ({
  id: dielo.id,
  nazov: dielo.nazov,
  autor: menoAutora(dielo),
  autorId: dielo.autorId,
  rocnik: dielo.rocnik,
  druh: dielo.druh,
  literatura: dielo.literatura,
  standardizovane: dielo.standardizovane,
  zaner: dielo.zaner,
  obdobie: dielo.obdobie,
  anotacia: dielo.anotacia,
  pocetUloh: dielo.ulohy.length,
  // polia, v ktorých sa vyhľadáva, spojené do jedného reťazca
  hladane: [...dielo.temy, ...dielo.motivy, ...dielo.postavy.map((p) => p.meno)].join(' '),
}))


const hlavickaPrehlad = [
  '// SÚBOR JE GENEROVANÝ — neupravuj ho ručne.',
  '// Vzniká príkazom `npm run generate:index` zo súborov v src/data/works/.',
  "import type { DieloPrehlad } from './prehlad'",
  '',
  'export const prehladDiel: DieloPrehlad[] = ',
].join('\n')

const hlavickaAutori = [
  '// SÚBOR JE GENEROVANÝ — neupravuj ho ručne.',
  '// Vzniká príkazom `npm run generate:index` zo súborov v src/data/works/.',
  "import type { Autor } from '../types'",
  '',
  'export const autori: Autor[] = ',
].join('\n')

writeFileSync(
  'src/data/prehlad.generated.ts',
  hlavickaPrehlad + JSON.stringify(zaznamy, null, 2) + '\n',
  'utf8',
)

writeFileSync(
  'src/data/autori.generated.ts',
  hlavickaAutori + JSON.stringify(autori, null, 2) + '\n',
  'utf8',
)

console.log(`Vygenerované: ${zaznamy.length} diel, ${autori.length} autorov.`)
