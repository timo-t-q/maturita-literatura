import { useEffect, useRef, useState } from 'react'
import { useProgress } from '../lib/progress'

/**
 * Vlastné poznámky k dielu. Text sa ukladá do localStorage s krátkym
 * odkladom (debounce), aby sme nezapisovali pri každom stlačení klávesy.
 */
export function Poznamky({ dieloId }: { dieloId: string }) {
  const { poznamka, setPoznamka } = useProgress()
  const ulozene = poznamka(dieloId)

  const [text, setText] = useState(ulozene)
  const [ulozeneHlasenie, setUlozeneHlasenie] = useState(false)
  const casovac = useRef<number | undefined>(undefined)

  // Pri prepnutí na iné dielo načítaj jeho poznámku.
  useEffect(() => {
    setText(ulozene)
    setUlozeneHlasenie(false)
    // zámerne reagujeme len na zmenu diela
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dieloId])

  useEffect(() => {
    if (text === ulozene) return
    window.clearTimeout(casovac.current)
    casovac.current = window.setTimeout(() => {
      setPoznamka(dieloId, text)
      setUlozeneHlasenie(true)
    }, 500)
    return () => window.clearTimeout(casovac.current)
  }, [text, ulozene, dieloId, setPoznamka])

  // Hlásenie „uložené“ po chvíli schovaj.
  useEffect(() => {
    if (!ulozeneHlasenie) return
    const id = window.setTimeout(() => setUlozeneHlasenie(false), 2000)
    return () => window.clearTimeout(id)
  }, [ulozeneHlasenie])

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label
          htmlFor={`poznamky-${dieloId}`}
          className="text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          Moje poznámky
        </label>
        <span
          role="status"
          className={`text-xs transition-opacity ${
            ulozeneHlasenie ? 'text-emerald-600 opacity-100 dark:text-emerald-400' : 'opacity-0'
          }`}
        >
          Uložené ✓
        </span>
      </div>
      <textarea
        id={`poznamky-${dieloId}`}
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={6}
        placeholder="Napíš si vlastné postrehy, citáty, súvislosti s inými dielami…"
        className="w-full resize-y rounded-xl border border-stone-300 bg-white p-3 text-sm/relaxed text-stone-800 placeholder:text-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:placeholder:text-stone-600"
      />
      <p className="mt-1.5 text-xs text-stone-400 dark:text-stone-500">
        Poznámky sa ukladajú len do tohto prehliadača.
      </p>
    </div>
  )
}
