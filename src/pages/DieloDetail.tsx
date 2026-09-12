import { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { menoAutora, najdiAutora, najdiDielo, nazovDruhu, nazovLiteratury } from '../data'
import type { Dielo } from '../types'
import { Badge } from '../components/Badge'
import { StavButton } from '../components/StavButton'
import { Poznamky } from '../components/Poznamky'
import { UlohyPanel } from '../components/ulohy/UlohyPanel'
import { useProgress } from '../lib/progress'

type Zalozka = 'dielo' | 'autor' | 'ulohy' | 'poznamky'

const ZALOZKY: { id: Zalozka; label: string }[] = [
  { id: 'dielo', label: 'Dielo' },
  { id: 'autor', label: 'Autor' },
  { id: 'ulohy', label: 'Precvičovanie' },
  { id: 'poznamky', label: 'Poznámky' },
]

function Sekcia({ titulok, children }: { titulok: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
        {titulok}
      </h2>
      {children}
    </section>
  )
}

function ZoznamOdrazkami({ polozky }: { polozky: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {polozky.map((polozka, index) => (
        <li key={index} className="prose-text flex gap-2.5">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />
          <span>{polozka}</span>
        </li>
      ))}
    </ul>
  )
}

function Znacky({ polozky }: { polozky: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {polozky.map((polozka) => (
        <li
          key={polozka}
          className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 dark:bg-stone-800 dark:text-stone-300"
        >
          {polozka}
        </li>
      ))}
    </ul>
  )
}

function ZakladneUdaje({ dielo }: { dielo: Dielo }) {
  const udaje: { popis: string; hodnota: string }[] = [
    { popis: 'Autor', hodnota: menoAutora(dielo) },
    { popis: 'Žáner', hodnota: dielo.zaner },
    { popis: 'Literárna forma', hodnota: dielo.forma },
    { popis: 'Rok vydania', hodnota: dielo.rokVydania },
    { popis: 'Literárne obdobie', hodnota: dielo.obdobie },
    { popis: 'Literárny druh', hodnota: nazovDruhu(dielo.druh) },
    {
      popis: 'Zaradenie',
      hodnota: `${nazovLiteratury(dielo.literatura)}, ${dielo.rocnik}. ročník`,
    },
  ]
  if (dielo.miestoACas) udaje.push({ popis: 'Miesto a čas deja', hodnota: dielo.miestoACas })
  if (dielo.kompozicia) udaje.push({ popis: 'Kompozícia', hodnota: dielo.kompozicia })

  return (
    <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {udaje.map(({ popis, hodnota }) => (
        <div key={popis}>
          <dt className="text-xs font-medium tracking-wide text-stone-400 uppercase dark:text-stone-500">
            {popis}
          </dt>
          <dd className="mt-0.5 text-sm text-stone-700 dark:text-stone-300">{hodnota}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Dej diela s možnosťou skryť spoilery. */
function Obsah({ dielo }: { dielo: Dielo }) {
  const [odhalene, setOdhalene] = useState(false)

  return (
    <div>
      <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
        <h3 className="mb-1.5 text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
          O čom to je — bez spoilerov
        </h3>
        <p className="prose-text">{dielo.anotacia}</p>
      </div>

      <div className="mt-4">
        {!odhalene ? (
          <button
            type="button"
            onClick={() => setOdhalene(true)}
            className="w-full rounded-xl border border-dashed border-stone-300 px-4 py-8 text-sm font-medium text-stone-600 transition-colors hover:border-amber-400 hover:bg-amber-50/50 dark:border-stone-700 dark:text-stone-400 dark:hover:border-amber-700 dark:hover:bg-stone-900"
          >
            Zobraziť celý dej vrátane konca
          </button>
        ) : (
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
                Dej a obsah — obsahuje spoilery
              </h3>
              <button
                type="button"
                onClick={() => setOdhalene(false)}
                className="text-xs font-medium text-stone-500 underline underline-offset-2 dark:text-stone-400"
              >
                skryť
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {dielo.obsah.map((odstavec, index) => (
                <p key={index} className="prose-text">
                  {odstavec}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/** Šípky vľavo/vpravo prepínajú záložky — očakávané správanie roly "tablist". */
function dalsiaZalozka(aktualna: Zalozka, smer: -1 | 1): Zalozka {
  const index = ZALOZKY.findIndex((z) => z.id === aktualna)
  return ZALOZKY[(index + smer + ZALOZKY.length) % ZALOZKY.length].id
}

export function DieloDetail() {
  const { id } = useParams<{ id: string }>()
  const dielo = najdiDielo(id)
  const [zalozka, setZalozka] = useState<Zalozka>('dielo')
  const { zapisSkore, skore } = useProgress()

  const ulozSkore = useCallback(
    (percent: number) => {
      if (dielo) zapisSkore(dielo.id, percent)
    },
    [dielo, zapisSkore],
  )

  const prepniSipkou = (event: React.KeyboardEvent, aktualna: Zalozka) => {
    const smer = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (smer === 0) return
    event.preventDefault()
    const dalsia = dalsiaZalozka(aktualna, smer)
    setZalozka(dalsia)
    document.getElementById(`tab-${dalsia}`)?.focus()
  }

  if (!dielo) {
    return (
      <div className="py-16 text-center">
        <h1 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-100">
          Dielo sa nenašlo
        </h1>
        <Link
          to="/diela"
          className="mt-4 inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white"
        >
          Späť na prehľad diel
        </Link>
      </div>
    )
  }

  const autor = najdiAutora(dielo.autorId)
  const najlepsieSkore = skore[dielo.id]

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/diela"
        className="text-sm font-medium text-stone-500 hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-400"
      >
        ← Prehľad diel
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="rocnik">{dielo.rocnik}. ročník</Badge>
          <Badge variant={dielo.druh}>{nazovDruhu(dielo.druh)}</Badge>
          <Badge>{nazovLiteratury(dielo.literatura)}</Badge>
          {dielo.standardizovane && (
            <Badge variant="std" title="Štandardizované literárne dielo podľa ŠVP">
              štandardizované dielo ŠVP
            </Badge>
          )}
        </div>

        <h1 className="mt-3 font-serif text-3xl/tight font-semibold text-stone-900 sm:text-4xl/tight dark:text-stone-100">
          {dielo.nazov}
        </h1>
        <p className="mt-2 text-base text-stone-500 dark:text-stone-400">
          {menoAutora(dielo)}
          {autor?.roky && (
            <span className="text-stone-400 dark:text-stone-500"> · {autor.roky}</span>
          )}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <StavButton dieloId={dielo.id} velkost="md" />
          {najlepsieSkore !== undefined && (
            <span className="text-sm text-stone-500 dark:text-stone-400">
              Najlepší výsledok kvízu: <strong className="tabular-nums">{najlepsieSkore} %</strong>
            </span>
          )}
        </div>
      </header>

      <div
        role="tablist"
        aria-label="Sekcie diela"
        className="mt-7 flex gap-1 overflow-x-auto border-b border-stone-200 dark:border-stone-800"
      >
        {ZALOZKY.map((z) => (
          <button
            key={z.id}
            role="tab"
            type="button"
            id={`tab-${z.id}`}
            aria-controls="panel-diela"
            aria-selected={zalozka === z.id}
            tabIndex={zalozka === z.id ? 0 : -1}
            onClick={() => setZalozka(z.id)}
            onKeyDown={(event) => prepniSipkou(event, z.id)}
            className={`-mb-px shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              zalozka === z.id
                ? 'border-amber-500 text-amber-700 dark:text-amber-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'
            }`}
          >
            {z.label}
            {z.id === 'ulohy' && (
              <span className="ml-1.5 text-xs text-stone-400 dark:text-stone-500">
                {dielo.ulohy.length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div role="tabpanel" id="panel-diela" aria-labelledby={`tab-${zalozka}`} tabIndex={-1} className="mt-7">
        {zalozka === 'dielo' && (
          <div className="flex flex-col gap-9">
            <Sekcia titulok="Základné údaje">
              <ZakladneUdaje dielo={dielo} />
            </Sekcia>

            <Sekcia titulok="Dej a obsah">
              <Obsah dielo={dielo} />
            </Sekcia>

            <Sekcia titulok="Postavy">
              <div className="flex flex-col gap-3">
                {dielo.postavy.map((postava) => (
                  <div
                    key={postava.meno}
                    className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"
                  >
                    <h3 className="flex flex-wrap items-center gap-2 font-medium text-stone-900 dark:text-stone-100">
                      {postava.meno}
                      {postava.rola && (
                        <Badge>{postava.rola === 'hlavna' ? 'hlavná' : 'vedľajšia'}</Badge>
                      )}
                    </h3>
                    <p className="mt-1.5 text-sm/relaxed text-stone-600 dark:text-stone-400">
                      {postava.charakteristika}
                    </p>
                  </div>
                ))}
              </div>
            </Sekcia>

            <Sekcia titulok="Témy">
              <Znacky polozky={dielo.temy} />
            </Sekcia>

            <Sekcia titulok="Motívy">
              <Znacky polozky={dielo.motivy} />
            </Sekcia>

            <Sekcia titulok="Jazykové a štylistické prostriedky">
              <ZoznamOdrazkami polozky={dielo.jazyk} />
            </Sekcia>

            {dielo.citaty && dielo.citaty.length > 0 && (
              <Sekcia titulok="Citáty">
                <div className="flex flex-col gap-4">
                  {dielo.citaty.map((citat, index) => (
                    <blockquote
                      key={index}
                      className="border-l-3 border-amber-400 pl-4 font-serif text-lg/relaxed text-stone-700 italic dark:border-amber-600 dark:text-stone-300"
                    >
                      „{citat.text}“
                      {citat.zdroj && (
                        <footer className="mt-1 font-sans text-xs text-stone-400 not-italic dark:text-stone-500">
                          — {citat.zdroj}
                        </footer>
                      )}
                    </blockquote>
                  ))}
                </div>
              </Sekcia>
            )}

            {dielo.maturitneMinimum && dielo.maturitneMinimum.length > 0 && (
              <Sekcia titulok="Maturitné minimum">
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
                  <ZoznamOdrazkami polozky={dielo.maturitneMinimum} />
                </div>
              </Sekcia>
            )}
          </div>
        )}

        {zalozka === 'autor' &&
          (autor ? (
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-100">
                  {autor.meno}
                </h2>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {autor.roky}
                  {autor.roky && ' · '}
                  {autor.smer}
                </p>
              </div>

              <Sekcia titulok="Životopis">
                <p className="prose-text">{autor.zivotopis}</p>
              </Sekcia>

              {autor.dalsieDiela && autor.dalsieDiela.length > 0 && (
                <Sekcia titulok="Ďalšie významné diela">
                  <Znacky polozky={autor.dalsieDiela} />
                </Sekcia>
              )}
            </div>
          ) : (
            <p className="prose-text">
              Toto dielo nemá jedného určeného autora ({dielo.autorText ?? 'neznámy autor'}).
            </p>
          ))}

        {zalozka === 'ulohy' && <UlohyPanel ulohy={dielo.ulohy} onDokoncene={ulozSkore} />}

        {zalozka === 'poznamky' && <Poznamky dieloId={dielo.id} />}
      </div>
    </article>
  )
}
