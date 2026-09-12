import { useMemo, useState } from 'react'
import type { PriradovanieUloha } from '../../types'
import { premiesaj } from '../../lib/shuffle'
import { Vysvetlenie } from './Vysvetlenie'

/**
 * Priraďovacia úloha. Študent klikne na položku vľavo, potom na jej pár
 * vpravo. Pravá strana je premiešaná, ľavá zostáva v pôvodnom poradí.
 */
export function PriradovanieView({
  uloha,
  cislo,
  onVyhodnotene,
}: {
  uloha: PriradovanieUloha
  cislo: number
  onVyhodnotene?: (spravne: boolean) => void
}) {
  const vpravoPremiesane = useMemo(() => premiesaj(uloha.pary.map((p) => p.vpravo)), [uloha])

  const [vybraneVlavo, setVybraneVlavo] = useState<string | null>(null)
  /** vlavo -> vpravo */
  const [spojenia, setSpojenia] = useState<Record<string, string>>({})
  const [skontrolovane, setSkontrolovane] = useState(false)

  const vsetkySpojene = Object.keys(spojenia).length === uloha.pary.length
  const spravnaOdpoved = (vlavo: string) => uloha.pary.find((p) => p.vlavo === vlavo)!.vpravo
  const pocetSpravnych = uloha.pary.filter((p) => spojenia[p.vlavo] === p.vpravo).length
  const vsetkySpravne = pocetSpravnych === uloha.pary.length

  const klikVlavo = (vlavo: string) => {
    if (skontrolovane) return
    setVybraneVlavo((aktualne) => (aktualne === vlavo ? null : vlavo))
  }

  const klikVpravo = (vpravo: string) => {
    if (skontrolovane || !vybraneVlavo) return
    setSpojenia((prev) => {
      // Pravá položka môže byť použitá len raz — odpoj ju z predošlého páru.
      const bezDuplikatu = Object.fromEntries(
        Object.entries(prev).filter(([, hodnota]) => hodnota !== vpravo),
      )
      return { ...bezDuplikatu, [vybraneVlavo]: vpravo }
    })
    setVybraneVlavo(null)
  }

  const skontroluj = () => {
    setSkontrolovane(true)
    onVyhodnotene?.(vsetkySpravne)
  }

  const reset = () => {
    setSpojenia({})
    setVybraneVlavo(null)
    setSkontrolovane(false)
  }

  const pouzite = new Set(Object.values(spojenia))

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 dark:border-stone-800 dark:bg-stone-900">
      <p className="mb-1 font-medium text-stone-900 dark:text-stone-100">
        <span className="mr-2 text-stone-400 dark:text-stone-500">{cislo}.</span>
        {uloha.zadanie}
      </p>
      <p className="mb-4 text-xs text-stone-500 dark:text-stone-400">
        Klikni na položku vľavo a potom na jej pár vpravo.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <ul className="flex flex-col gap-2">
          {uloha.pary.map((par) => {
            const spojene = spojenia[par.vlavo]
            const jeSpravne = spojene === par.vpravo
            const aktivne = vybraneVlavo === par.vlavo

            let styl =
              'border-stone-200 hover:border-amber-400 dark:border-stone-700 dark:hover:border-amber-600'
            if (skontrolovane) {
              styl = jeSpravne
                ? 'border-emerald-500 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40'
                : 'border-rose-400 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/40'
            } else if (aktivne) {
              styl = 'border-amber-500 bg-amber-50 ring-2 ring-amber-200 dark:bg-stone-800 dark:ring-amber-900'
            } else if (spojene) {
              styl = 'border-sky-400 bg-sky-50 dark:border-sky-700 dark:bg-sky-950/40'
            }

            return (
              <li key={par.vlavo}>
                <button
                  type="button"
                  disabled={skontrolovane}
                  aria-pressed={aktivne}
                  onClick={() => klikVlavo(par.vlavo)}
                  className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${styl}`}
                >
                  <span className="block font-medium text-stone-800 dark:text-stone-200">
                    {par.vlavo}
                  </span>
                  {spojene && (
                    <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
                      → {spojene}
                    </span>
                  )}
                  {skontrolovane && !jeSpravne && (
                    <span className="mt-1 block text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      Správne: {spravnaOdpoved(par.vlavo)}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <ul className="flex flex-col gap-2">
          {vpravoPremiesane.map((vpravo) => (
            <li key={vpravo}>
              <button
                type="button"
                disabled={skontrolovane || !vybraneVlavo}
                onClick={() => klikVpravo(vpravo)}
                className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors disabled:cursor-default ${
                  pouzite.has(vpravo)
                    ? 'border-stone-200 bg-stone-50 text-stone-400 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-600'
                    : 'border-stone-200 text-stone-700 enabled:hover:border-amber-400 dark:border-stone-700 dark:text-stone-300 dark:enabled:hover:border-amber-600'
                }`}
              >
                {vpravo}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {!skontrolovane ? (
          <button
            type="button"
            disabled={!vsetkySpojene}
            onClick={skontroluj}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors enabled:hover:bg-amber-600 disabled:opacity-40 dark:bg-amber-600 dark:enabled:hover:bg-amber-500"
          >
            Skontrolovať
          </button>
        ) : (
          <>
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {pocetSpravnych} z {uloha.pary.length} správne
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
