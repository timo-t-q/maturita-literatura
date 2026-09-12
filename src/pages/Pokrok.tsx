import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DRUHY, ROCNIKY, diela, menoAutora, zoradeneDiela } from '../data'
import { useProgress, type StavDiela } from '../lib/progress'
import { ProgressBar } from '../components/ProgressBar'
import { StavButton } from '../components/StavButton'

const NAZVY_STAVOV: Record<StavDiela, string> = {
  nastudovane: 'Naštudované',
  citam: 'Rozčítané',
  neprecitane: 'Neprečítané',
}

const PORADIE_STAVOV: StavDiela[] = ['nastudovane', 'citam', 'neprecitane']

export function Pokrok() {
  const { stavy, poznamky, skore, vymazatVsetko } = useProgress()
  const [potvrdzujem, setPotvrdzujem] = useState(false)

  const pocetStavu = (stav: StavDiela) =>
    diela.filter((d) => (stavy[d.id] ?? 'neprecitane') === stav).length

  const sPoznamkou = zoradeneDiela(diela).filter((d) => (poznamky[d.id] ?? '').trim().length > 0)
  const sKvizom = zoradeneDiela(diela)
    .filter((d) => skore[d.id] !== undefined)
    .sort((a, b) => skore[b.id] - skore[a.id])

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl dark:text-stone-100">
        Môj pokrok
      </h1>
      <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
        Všetko sa ukladá do tohto prehliadača — nikam sa neposiela.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {PORADIE_STAVOV.map((stav) => (
          <div
            key={stav}
            className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="font-serif text-2xl font-semibold text-stone-900 tabular-nums dark:text-stone-100">
              {pocetStavu(stav)}
            </div>
            <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
              {NAZVY_STAVOV[stav]}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
          Podľa ročníka
        </h2>
        <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
          {ROCNIKY.map((rocnik) => {
            const vRocniku = diela.filter((d) => d.rocnik === rocnik)
            return (
              <ProgressBar
                key={rocnik}
                label={`${rocnik}. ročník`}
                hotovo={vRocniku.filter((d) => stavy[d.id] === 'nastudovane').length}
                celkom={vRocniku.length}
              />
            )
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
          Podľa literárneho druhu
        </h2>
        <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
          {DRUHY.map((druh) => {
            const vDruhu = diela.filter((d) => d.druh === druh.id)
            return (
              <ProgressBar
                key={druh.id}
                label={druh.nazov}
                hotovo={vDruhu.filter((d) => stavy[d.id] === 'nastudovane').length}
                celkom={vDruhu.length}
              />
            )
          })}
          <ProgressBar
            label="Štandardizované diela (ŠVP)"
            hotovo={diela.filter((d) => d.standardizovane && stavy[d.id] === 'nastudovane').length}
            celkom={diela.filter((d) => d.standardizovane).length}
          />
        </div>
      </section>

      {sKvizom.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            Výsledky kvízov
          </h2>
          <ul className="divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-900">
            {sKvizom.map((dielo) => (
              <li key={dielo.id} className="flex items-center gap-3 px-4 py-3">
                <div className="min-w-0 flex-1">
                  <Link
                    to={`/dielo/${dielo.id}`}
                    className="block truncate text-sm font-medium text-stone-800 hover:text-amber-700 dark:text-stone-200 dark:hover:text-amber-400"
                  >
                    {dielo.nazov}
                  </Link>
                  <span className="text-xs text-stone-400 dark:text-stone-500">
                    {menoAutora(dielo)}
                  </span>
                </div>
                <div className="w-24 shrink-0">
                  <ProgressBar hotovo={skore[dielo.id]} celkom={100} compact />
                </div>
                <span className="w-12 shrink-0 text-right text-sm font-medium text-stone-600 tabular-nums dark:text-stone-400">
                  {skore[dielo.id]} %
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {sPoznamkou.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            Diela s poznámkami
          </h2>
          <ul className="flex flex-col gap-3">
            {sPoznamkou.map((dielo) => (
              <li
                key={dielo.id}
                className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <Link
                    to={`/dielo/${dielo.id}`}
                    className="text-sm font-medium text-stone-800 hover:text-amber-700 dark:text-stone-200 dark:hover:text-amber-400"
                  >
                    {dielo.nazov}
                  </Link>
                  <StavButton dieloId={dielo.id} />
                </div>
                <p className="mt-2 line-clamp-3 text-sm/relaxed whitespace-pre-wrap text-stone-600 dark:text-stone-400">
                  {poznamky[dielo.id]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 rounded-xl border border-rose-200 bg-rose-50/50 p-5 dark:border-rose-900/60 dark:bg-rose-950/20">
        <h2 className="font-medium text-stone-900 dark:text-stone-100">Vymazať uložené údaje</h2>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
          Nenávratne odstráni stavy diel, poznámky aj výsledky kvízov z tohto prehliadača.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {!potvrdzujem ? (
            <button
              type="button"
              onClick={() => setPotvrdzujem(true)}
              className="rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950/50"
            >
              Vymazať všetko
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  vymazatVsetko()
                  setPotvrdzujem(false)
                }}
                className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
              >
                Áno, vymazať
              </button>
              <button
                type="button"
                onClick={() => setPotvrdzujem(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-600 hover:bg-white dark:border-stone-700 dark:text-stone-400"
              >
                Zrušiť
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
