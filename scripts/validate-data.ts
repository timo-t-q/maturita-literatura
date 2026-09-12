/**
 * Kontrola integrity dát o dielach. Spúšťa sa v CI aj lokálne cez
 * `npm run validate`. Zachytáva chyby, ktoré TypeScript neodhalí —
 * duplicitné identifikátory, odkazy na neexistujúcich autorov,
 * kvízy s neplatným indexom správnej odpovede a doplňovačky bez medzier.
 */
import { autori, diela } from '../src/data/index.ts'

const chyby: string[] = []

function over(podmienka: boolean, sprava: string) {
  if (!podmienka) chyby.push(sprava)
}

// --- Autori ---
const autorIds = new Set<string>()
for (const autor of autori) {
  over(!autorIds.has(autor.id), `Duplicitné id autora: ${autor.id}`)
  autorIds.add(autor.id)
  over(autor.zivotopis.trim().length > 40, `Príliš krátky životopis autora: ${autor.id}`)
}

// --- Diela ---
const dieloIds = new Set<string>()
const ulohaIds = new Set<string>()

for (const dielo of diela) {
  const kde = `dielo "${dielo.id}"`

  over(!dieloIds.has(dielo.id), `Duplicitné id diela: ${dielo.id}`)
  dieloIds.add(dielo.id)

  over(/^[a-z0-9-]+$/.test(dielo.id), `${kde}: id smie obsahovať len malé písmená, číslice a pomlčky`)
  over(
    dielo.autorId !== undefined || dielo.autorText !== undefined,
    `${kde}: chýba autorId aj autorText`,
  )
  if (dielo.autorId) {
    over(autorIds.has(dielo.autorId), `${kde}: odkazuje na neexistujúceho autora "${dielo.autorId}"`)
  }

  over(dielo.obsah.length > 0, `${kde}: prázdny obsah`)
  over(dielo.postavy.length > 0, `${kde}: žiadne postavy`)
  over(dielo.temy.length > 0, `${kde}: žiadne témy`)
  over(dielo.jazyk.length > 0, `${kde}: žiadne jazykové prostriedky`)
  over(dielo.ulohy.length > 0, `${kde}: žiadne cvičenia`)

  for (const uloha of dielo.ulohy) {
    const kdeU = `${kde}, úloha "${uloha.id}"`
    over(!ulohaIds.has(uloha.id), `Duplicitné id úlohy: ${uloha.id}`)
    ulohaIds.add(uloha.id)

    if (uloha.typ === 'kviz') {
      over(uloha.moznosti.length >= 2, `${kdeU}: kvíz potrebuje aspoň 2 možnosti`)
      over(
        uloha.spravna >= 0 && uloha.spravna < uloha.moznosti.length,
        `${kdeU}: index správnej odpovede (${uloha.spravna}) je mimo rozsahu`,
      )
      over(
        new Set(uloha.moznosti).size === uloha.moznosti.length,
        `${kdeU}: kvíz má duplicitné možnosti`,
      )
      over(uloha.vysvetlenie.trim().length > 0, `${kdeU}: chýba vysvetlenie`)
    }

    if (uloha.typ === 'priradovanie') {
      over(uloha.pary.length >= 2, `${kdeU}: priraďovanie potrebuje aspoň 2 páry`)
      over(
        new Set(uloha.pary.map((p) => p.vpravo)).size === uloha.pary.length,
        `${kdeU}: pravé strany párov sa opakujú — úloha by nemala jednoznačné riešenie`,
      )
    }

    if (uloha.typ === 'doplnovacka') {
      const medzery = uloha.text.filter((s) => typeof s !== 'string')
      over(medzery.length > 0, `${kdeU}: doplňovačka nemá žiadnu medzeru`)
    }
  }
}

if (chyby.length > 0) {
  console.error(`\nNašlo sa ${chyby.length} chýb v dátach:\n`)
  for (const chyba of chyby) console.error(`  • ${chyba}`)
  process.exit(1)
}

console.log(
  `Dáta sú v poriadku: ${diela.length} diel, ${autori.length} autorov, ${ulohaIds.size} cvičení.`,
)
