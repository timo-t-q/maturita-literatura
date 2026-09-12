import { useMemo, useState } from 'react'
import { ROCNIKY, diela, nazovDruhu, zoradeneDiela } from '../data'
import type { Druh } from '../types'
import { DieloCard } from '../components/DieloCard'
import { filtruj, jeAktivny, PRAZDNE_FILTRE, type Filtre } from '../lib/filters'

const PORADIE_DRUHOV: Druh[] = ['poezia', 'proza', 'drama']

export function DielaPrehlad({
  filtre,
  setFiltre,
}: {
  filtre: Filtre
  setFiltre: (f: Filtre) => void
}) {
  const [zoskupenie, setZoskupenie] = useState<'rocnik' | 'ziadne'>('rocnik')

  const vysledok = useMemo(() => zoradeneDiela(filtruj(diela, filtre)), [filtre])

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl dark:text-stone-100">
            Prehľad diel
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Zobrazených <strong className="tabular-nums">{vysledok.length}</strong> z {diela.length}{' '}
            diel
            {jeAktivny(filtre) && (
              <>
                {' · '}
                <button
                  type="button"
                  onClick={() => setFiltre(PRAZDNE_FILTRE)}
                  className="font-medium text-amber-700 underline underline-offset-2 dark:text-amber-400"
                >
                  zrušiť filtre
                </button>
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="zoskupenie"
            className="text-xs font-medium text-stone-500 dark:text-stone-400"
          >
            Zoskupiť
          </label>
          <select
            id="zoskupenie"
            value={zoskupenie}
            onChange={(event) => setZoskupenie(event.target.value as 'rocnik' | 'ziadne')}
            className="rounded-md border border-stone-300 bg-white px-2 py-1.5 text-sm dark:border-stone-700 dark:bg-stone-900"
          >
            <option value="rocnik">podľa ročníka a druhu</option>
            <option value="ziadne">bez zoskupenia</option>
          </select>
        </div>
      </div>

      {vysledok.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
          Žiadne dielo nevyhovuje zvoleným filtrom.
        </p>
      ) : zoskupenie === 'ziadne' ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {vysledok.map((dielo) => (
            <DieloCard key={dielo.id} dielo={dielo} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {ROCNIKY.map((rocnik) => {
            const vRocniku = vysledok.filter((d) => d.rocnik === rocnik)
            if (vRocniku.length === 0) return null

            return (
              <section key={rocnik}>
                <h2 className="mb-4 border-b border-stone-200 pb-2 font-serif text-xl font-semibold text-stone-900 dark:border-stone-800 dark:text-stone-100">
                  {rocnik}. ročník
                  <span className="ml-2 text-sm font-normal text-stone-400 dark:text-stone-500">
                    {vRocniku.length} diel
                  </span>
                </h2>

                <div className="flex flex-col gap-7">
                  {PORADIE_DRUHOV.map((druh) => {
                    const vDruhu = vRocniku.filter((d) => d.druh === druh)
                    if (vDruhu.length === 0) return null

                    const slovenska = vDruhu.filter((d) => d.literatura === 'slovenska')
                    const svetova = vDruhu.filter((d) => d.literatura === 'svetova')

                    return (
                      <div key={druh}>
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-stone-500 uppercase dark:text-stone-400">
                          {nazovDruhu(druh)}
                        </h3>

                        {[
                          { titulok: 'Slovenská literatúra', zoznam: slovenska },
                          { titulok: 'Svetová literatúra', zoznam: svetova },
                        ].map(({ titulok, zoznam }) =>
                          zoznam.length === 0 ? null : (
                            <div key={titulok} className="mb-4 last:mb-0">
                              <h4 className="mb-2.5 text-xs text-stone-400 dark:text-stone-500">
                                {titulok}
                              </h4>
                              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {zoznam.map((dielo) => (
                                  <DieloCard key={dielo.id} dielo={dielo} />
                                ))}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
