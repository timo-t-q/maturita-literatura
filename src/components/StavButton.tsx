import { useProgress, type StavDiela } from '../lib/progress'

const POPIS: Record<StavDiela, { text: string; ikona: string; styl: string }> = {
  neprecitane: {
    text: 'Neprečítané',
    ikona: '○',
    styl:
      'border-stone-300 text-stone-500 hover:border-stone-400 dark:border-stone-700 dark:text-stone-400 dark:hover:border-stone-600',
  },
  citam: {
    text: 'Čítam',
    ikona: '◐',
    styl:
      'border-sky-400 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950/50 dark:text-sky-300',
  },
  nastudovane: {
    text: 'Naštudované',
    ikona: '●',
    styl:
      'border-emerald-400 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
  },
}

/** Prepínač stavu naštudovania. Klikaním cykluje medzi tromi stavmi. */
export function StavButton({
  dieloId,
  velkost = 'sm',
}: {
  dieloId: string
  velkost?: 'sm' | 'md'
}) {
  const { stavDiela, cyklujStav } = useProgress()
  const stav = stavDiela(dieloId)
  const popis = POPIS[stav]

  return (
    <button
      type="button"
      onClick={(event) => {
        // Karta diela je obalená odkazom — klik na prepínač nesmie navigovať.
        event.preventDefault()
        event.stopPropagation()
        cyklujStav(dieloId)
      }}
      aria-label={`Stav: ${popis.text}. Kliknutím zmeníš.`}
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors ${popis.styl} ${
        velkost === 'md' ? 'px-3 py-1.5 text-sm' : 'px-2.5 py-1 text-xs'
      }`}
    >
      <span aria-hidden="true">{popis.ikona}</span>
      {popis.text}
    </button>
  )
}
