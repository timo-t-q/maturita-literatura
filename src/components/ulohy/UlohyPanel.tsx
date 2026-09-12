import { useCallback, useMemo, useState } from 'react'
import type { Uloha } from '../../types'
import { KvizView } from './KvizView'
import { PriradovanieView } from './PriradovanieView'
import { DoplnovackaView } from './DoplnovackaView'

function UlohaView({
  uloha,
  cislo,
  onVyhodnotene,
}: {
  uloha: Uloha
  cislo: number
  onVyhodnotene: (spravne: boolean) => void
}) {
  switch (uloha.typ) {
    case 'kviz':
      return <KvizView uloha={uloha} cislo={cislo} onVyhodnotene={onVyhodnotene} />
    case 'priradovanie':
      return <PriradovanieView uloha={uloha} cislo={cislo} onVyhodnotene={onVyhodnotene} />
    case 'doplnovacka':
      return <DoplnovackaView uloha={uloha} cislo={cislo} onVyhodnotene={onVyhodnotene} />
  }
}

/**
 * Sada cvičení so spoločným skóre. `onDokoncene` sa zavolá s percentami,
 * keď sú vyhodnotené všetky úlohy — používa sa na uloženie skóre diela.
 */
export function UlohyPanel({
  ulohy,
  onDokoncene,
}: {
  ulohy: Uloha[]
  onDokoncene?: (percent: number) => void
}) {
  /** id úlohy -> bola vyriešená správne? */
  const [vysledky, setVysledky] = useState<Record<string, boolean>>({})
  /** zvýšením kľúča zahodíme vnútorný stav všetkých úloh a začneme odznova */
  const [kluc, setKluc] = useState(0)

  const zaznamenaj = useCallback(
    (ulohaId: string) => (spravne: boolean) => {
      setVysledky((prev) => {
        if (ulohaId in prev) return prev
        const dalsie = { ...prev, [ulohaId]: spravne }
        if (Object.keys(dalsie).length === ulohy.length) {
          const spravnych = Object.values(dalsie).filter(Boolean).length
          onDokoncene?.(Math.round((spravnych / ulohy.length) * 100))
        }
        return dalsie
      })
    },
    [ulohy.length, onDokoncene],
  )

  const odpovedanych = Object.keys(vysledky).length
  const spravnych = Object.values(vysledky).filter(Boolean).length
  const hotovo = ulohy.length > 0 && odpovedanych === ulohy.length

  const percent = useMemo(
    () => (odpovedanych === 0 ? 0 : Math.round((spravnych / odpovedanych) * 100)),
    [spravnych, odpovedanych],
  )

  if (ulohy.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-stone-300 p-6 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
        K tomuto dielu ešte nie sú pripravené cvičenia.
      </p>
    )
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-stone-100 px-4 py-3 dark:bg-stone-900">
        <span className="text-sm text-stone-600 dark:text-stone-400">
          Vyriešené <strong className="tabular-nums">{odpovedanych}</strong> z {ulohy.length}
          {odpovedanych > 0 && (
            <>
              {' · úspešnosť '}
              <strong className="tabular-nums">{percent} %</strong>
            </>
          )}
        </span>
        <button
          type="button"
          onClick={() => {
            setVysledky({})
            setKluc((k) => k + 1)
          }}
          className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-white dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
        >
          Začať odznova
        </button>
      </div>

      {hotovo && (
        <div className="mb-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm/relaxed text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          <strong className="font-semibold">Hotovo!</strong> Získal si {spravnych} z {ulohy.length}{' '}
          bodov ({percent} %).
          {percent === 100
            ? ' Perfektné — toto dielo máš zvládnuté.'
            : ' Prejdi si vysvetlenia pri nesprávnych odpovediach a skús to znova.'}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {ulohy.map((uloha, index) => (
          <UlohaView
            key={`${kluc}-${uloha.id}`}
            uloha={uloha}
            cislo={index + 1}
            onVyhodnotene={zaznamenaj(uloha.id)}
          />
        ))}
      </div>
    </div>
  )
}
