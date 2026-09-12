import { useState } from 'react'
import type { DoplnovackaUloha } from '../../types'
import { normalizuj } from '../../lib/search'
import { Vysvetlenie } from './Vysvetlenie'

/** Zhoda bez ohľadu na diakritiku, veľkosť písmen a okrajové medzery. */
function zhoduje(zadane: string, spravne: string): boolean {
  return normalizuj(zadane.trim()) === normalizuj(spravne.trim())
}

export function DoplnovackaView({
  uloha,
  cislo,
  onVyhodnotene,
}: {
  uloha: DoplnovackaUloha
  cislo: number
  onVyhodnotene?: (spravne: boolean) => void
}) {
  // Indexy medzier v poli `text` — použijeme ich ako kľúče odpovedí.
  const medzery = uloha.text
    .map((segment, index) => ({ segment, index }))
    .filter((x) => typeof x.segment !== 'string') as {
    segment: { medzera: string; napoveda?: string }
    index: number
  }[]

  const [odpovede, setOdpovede] = useState<Record<number, string>>({})
  const [skontrolovane, setSkontrolovane] = useState(false)

  const vsetkyVyplnene = medzery.every((m) => (odpovede[m.index] ?? '').trim().length > 0)
  const pocetSpravnych = medzery.filter((m) =>
    zhoduje(odpovede[m.index] ?? '', m.segment.medzera),
  ).length
  const vsetkySpravne = pocetSpravnych === medzery.length

  const skontroluj = () => {
    setSkontrolovane(true)
    onVyhodnotene?.(vsetkySpravne)
  }

  const reset = () => {
    setOdpovede({})
    setSkontrolovane(false)
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 dark:border-stone-800 dark:bg-stone-900">
      <p className="mb-4 font-medium text-stone-900 dark:text-stone-100">
        <span className="mr-2 text-stone-400 dark:text-stone-500">{cislo}.</span>
        {uloha.zadanie}
      </p>

      <p className="text-[1.0625rem]/[2.25] text-stone-700 dark:text-stone-300">
        {uloha.text.map((segment, index) => {
          if (typeof segment === 'string') return <span key={index}>{segment}</span>

          const zadane = odpovede[index] ?? ''
          const jeSpravne = zhoduje(zadane, segment.medzera)

          let styl = 'border-stone-300 dark:border-stone-600'
          if (skontrolovane) {
            styl = jeSpravne
              ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
              : 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'
          }

          return (
            <span key={index} className="inline-flex flex-wrap items-baseline gap-1">
              <input
                type="text"
                value={zadane}
                disabled={skontrolovane}
                placeholder={segment.napoveda ?? '…'}
                aria-label={segment.napoveda ?? 'Doplň chýbajúce slovo'}
                autoComplete="off"
                size={Math.max(segment.medzera.length, 8)}
                onChange={(event) =>
                  setOdpovede((prev) => ({ ...prev, [index]: event.target.value }))
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && vsetkyVyplnene && !skontrolovane) skontroluj()
                }}
                className={`mx-0.5 rounded-md border-b-2 bg-transparent px-1.5 py-0.5 text-center text-base font-medium placeholder:font-normal placeholder:text-stone-400 dark:placeholder:text-stone-600 ${styl}`}
              />
              {skontrolovane && !jeSpravne && (
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  ({segment.medzera})
                </span>
              )}
            </span>
          )
        })}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {!skontrolovane ? (
          <button
            type="button"
            disabled={!vsetkyVyplnene}
            onClick={skontroluj}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors enabled:hover:bg-amber-600 disabled:opacity-40 dark:bg-amber-600 dark:enabled:hover:bg-amber-500"
          >
            Skontrolovať
          </button>
        ) : (
          <>
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {pocetSpravnych} z {medzery.length} správne
            </span>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
            >
              Skúsiť znova
            </button>
          </>
        )}
      </div>

      {skontrolovane && uloha.vysvetlenie && (
        <Vysvetlenie spravne={vsetkySpravne} text={uloha.vysvetlenie} />
      )}
    </div>
  )
}
