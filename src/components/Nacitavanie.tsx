/** Zástupný obsah, kým sa dosťahujú plné dáta o diele. */
export function Nacitavanie({ popis = 'Načítavam…' }: { popis?: string }) {
  return (
    <div role="status" className="flex flex-col gap-3 py-8" aria-label={popis}>
      <div className="h-4 w-2/3 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
      <div className="h-4 w-full animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
      <span className="sr-only">{popis}</span>
    </div>
  )
}

/** Hlásenie, keď sa dáta nepodarilo načítať (napr. výpadok siete). */
export function ChybaNacitania({ onZnova }: { onZnova?: () => void }) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200">
      <p>Obsah sa nepodarilo načítať. Skontroluj pripojenie a skús to znova.</p>
      {onZnova && (
        <button
          type="button"
          onClick={onZnova}
          className="mt-3 rounded-lg border border-rose-300 px-3 py-1.5 font-medium dark:border-rose-800"
        >
          Skúsiť znova
        </button>
      )}
    </div>
  )
}
