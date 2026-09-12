import { useState } from 'react'
import type { KvizOtazka } from '../../types'
import { Vysvetlenie } from './Vysvetlenie'

export function KvizView({
  uloha,
  cislo,
  onVyhodnotene,
}: {
  uloha: KvizOtazka
  cislo: number
  onVyhodnotene?: (spravne: boolean) => void
}) {
  const [vybrane, setVybrane] = useState<number | null>(null)

  const odpovedane = vybrane !== null
  const spravne = vybrane === uloha.spravna

  const klik = (index: number) => {
    if (odpovedane) return
    setVybrane(index)
    onVyhodnotene?.(index === uloha.spravna)
  }

  const stylMoznosti = (index: number) => {
    if (!odpovedane) {
      return 'border-stone-200 hover:border-amber-400 hover:bg-amber-50 dark:border-stone-700 dark:hover:border-amber-600 dark:hover:bg-stone-800'
    }
    if (index === uloha.spravna) {
      return 'border-emerald-500 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40'
    }
    if (index === vybrane) {
      return 'border-rose-400 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/40'
    }
    return 'border-stone-200 opacity-60 dark:border-stone-800'
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 dark:border-stone-800 dark:bg-stone-900">
      <p className="mb-3 font-medium text-stone-900 dark:text-stone-100">
        <span className="mr-2 text-stone-400 dark:text-stone-500">{cislo}.</span>
        {uloha.otazka}
      </p>

      <div className="flex flex-col gap-2">
        {uloha.moznosti.map((moznost, index) => (
          <button
            key={index}
            type="button"
            disabled={odpovedane}
            onClick={() => klik(index)}
            className={`flex items-start gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${stylMoznosti(index)}`}
          >
            <span className="mt-px font-mono text-xs text-stone-400 dark:text-stone-500">
              {String.fromCharCode(97 + index)})
            </span>
            <span className="flex-1 text-stone-700 dark:text-stone-300">{moznost}</span>
            {odpovedane && index === uloha.spravna && (
              <span aria-label="správna odpoveď" className="text-emerald-600 dark:text-emerald-400">
                ✓
              </span>
            )}
            {odpovedane && index === vybrane && index !== uloha.spravna && (
              <span aria-label="nesprávna odpoveď" className="text-rose-500">
                ✕
              </span>
            )}
          </button>
        ))}
      </div>

      {odpovedane && <Vysvetlenie spravne={spravne} text={uloha.vysvetlenie} />}
    </div>
  )
}
