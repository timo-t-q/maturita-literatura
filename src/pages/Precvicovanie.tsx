import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROCNIKY, nacitajVsetkyDiela, najdiPrehlad } from '../data'
import { useAsync } from '../hooks/useAsync'
import { ChybaNacitania, Nacitavanie } from '../components/Nacitavanie'
import type { Rocnik, Uloha, UlohaTyp } from '../types'
import { premiesaj } from '../lib/shuffle'
import { UlohyPanel } from '../components/ulohy/UlohyPanel'

const TYPY: { id: UlohaTyp; label: string }[] = [
  { id: 'kviz', label: 'Kvíz' },
  { id: 'priradovanie', label: 'Priraďovanie' },
  { id: 'doplnovacka', label: 'Doplňovačky' },
]

const POCTY = [10, 20, 30] as const

interface UlohaSDielom {
  uloha: Uloha
  dieloId: string
  dieloNazov: string
}

/** Miešané precvičovanie naprieč dielami — generuje test z vybraných ročníkov. */
export function Precvicovanie() {
  const [rocniky, setRocniky] = useState<Rocnik[]>([])
  const [typy, setTypy] = useState<UlohaTyp[]>([])
  const [pocet, setPocet] = useState<number>(10)
  /** zvýšenie spustí nový beh s novým náhodným výberom */
  const [beh, setBeh] = useState(0)

  // Plné dáta sa sťahujú až tu — úvodný bundle ich neobsahuje.
  const vyber = rocniky.length === 0 ? ROCNIKY : rocniky
  const { data: plneDiela, nacitava, chyba } = useAsync(
    () => nacitajVsetkyDiela(vyber),
    [vyber.join(',')],
  )

  const zasoba = useMemo<UlohaSDielom[]>(() => {
    if (!plneDiela) return []
    return plneDiela.flatMap((dielo) =>
      dielo.ulohy
        .filter((u) => typy.length === 0 || typy.includes(u.typ))
        .map((uloha) => ({ uloha, dieloId: dielo.id, dieloNazov: dielo.nazov })),
    )
  }, [plneDiela, typy])

  const test = useMemo(
    () => premiesaj(zasoba).slice(0, pocet),
    // `beh` je zámerne v závislostiach — jeho zmena premieša úlohy znova
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zasoba, pocet, beh],
  )

  const prepni = <T,>(pole: T[], hodnota: T): T[] =>
    pole.includes(hodnota) ? pole.filter((x) => x !== hodnota) : [...pole, hodnota]

  const Chip = ({
    aktivne,
    onClick,
    children,
  }: {
    aktivne: boolean
    onClick: () => void
    children: React.ReactNode
  }) => (
    <button
      type="button"
      aria-pressed={aktivne}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        aktivne
          ? 'border-amber-500 bg-amber-100 text-amber-900 dark:border-amber-600 dark:bg-amber-950/60 dark:text-amber-300'
          : 'border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl dark:text-stone-100">
        Precvičovanie
      </h1>
      <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
        Zmiešaný test z náhodne vybraných úloh naprieč dielami. Bez výberu sa použije všetko.
      </p>

      <div className="mt-6 flex flex-col gap-5 rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
        <div>
          <h2 className="mb-2.5 text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
            Ročníky
          </h2>
          <div className="flex flex-wrap gap-2">
            {ROCNIKY.map((r) => (
              <Chip
                key={r}
                aktivne={rocniky.includes(r)}
                onClick={() => setRocniky(prepni(rocniky, r))}
              >
                {r}. ročník
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2.5 text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
            Typ úloh
          </h2>
          <div className="flex flex-wrap gap-2">
            {TYPY.map((t) => (
              <Chip key={t.id} aktivne={typy.includes(t.id)} onClick={() => setTypy(prepni(typy, t.id))}>
                {t.label}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2.5 text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
            Počet úloh
          </h2>
          <div className="flex flex-wrap gap-2">
            {POCTY.map((p) => (
              <Chip key={p} aktivne={pocet === p} onClick={() => setPocet(p)}>
                {p}
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-4 dark:border-stone-800">
          <button
            type="button"
            onClick={() => setBeh((b) => b + 1)}
            className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500"
          >
            Nový test
          </button>
          <span className="text-sm text-stone-500 dark:text-stone-400">
            K dispozícii <strong className="tabular-nums">{zasoba.length}</strong> úloh
          </span>
        </div>
      </div>

      <div className="mt-8">
        {nacitava ? (
          <Nacitavanie popis="Pripravujem úlohy…" />
        ) : chyba ? (
          <ChybaNacitania />
        ) : test.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
            Pre zvolenú kombináciu nie sú žiadne úlohy.
          </p>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-400 dark:text-stone-500">
              <span>Diela v teste:</span>
              {[...new Set(test.map((t) => t.dieloId))].map((dieloId) => {
                const dielo = najdiPrehlad(dieloId)
                if (!dielo) return null
                return (
                  <Link
                    key={dieloId}
                    to={`/dielo/${dieloId}`}
                    className="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-400"
                    title={dielo.autor}
                  >
                    {dielo.nazov}
                  </Link>
                )
              })}
            </div>
            <UlohyPanel key={beh} ulohy={test.map((t) => t.uloha)} />
          </>
        )}
      </div>
    </div>
  )
}
