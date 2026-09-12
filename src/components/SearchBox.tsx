import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { hladaj } from '../lib/search'
import { menoAutora } from '../data'

/** Vyhľadávanie s rozbaľovacím zoznamom výsledkov a klávesovou obsluhou. */
export function SearchBox() {
  const [dopyt, setDopyt] = useState('')
  const [otvorene, setOtvorene] = useState(false)
  const [zvyraznene, setZvyraznene] = useState(0)
  const obal = useRef<HTMLDivElement>(null)
  const vstup = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const vysledky = dopyt.trim().length >= 2 ? hladaj(dopyt, 8) : []

  // Zatvorenie po kliknutí mimo komponentu.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (obal.current && !obal.current.contains(event.target as Node)) setOtvorene(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Ctrl/Cmd+K zameria vyhľadávanie odkiaľkoľvek.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        vstup.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const otvor = (dieloId: string) => {
    navigate(`/dielo/${dieloId}`)
    setDopyt('')
    setOtvorene(false)
    vstup.current?.blur()
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOtvorene(false)
      return
    }
    if (vysledky.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setZvyraznene((i) => (i + 1) % vysledky.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setZvyraznene((i) => (i - 1 + vysledky.length) % vysledky.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      otvor(vysledky[zvyraznene]?.dielo.id ?? vysledky[0].dielo.id)
    }
  }

  return (
    <div ref={obal} className="relative w-full max-w-md">
      <input
        ref={vstup}
        type="search"
        value={dopyt}
        placeholder="Hľadaj dielo, autora, tému…"
        aria-label="Vyhľadávanie diel"
        autoComplete="off"
        onChange={(event) => {
          setDopyt(event.target.value)
          setOtvorene(true)
          setZvyraznene(0)
        }}
        onFocus={() => setOtvorene(true)}
        onKeyDown={onKeyDown}
        className="w-full rounded-full border border-stone-300 bg-white py-2 pr-4 pl-9 text-sm text-stone-800 placeholder:text-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-stone-400"
      >
        ⌕
      </span>

      {otvorene && dopyt.trim().length >= 2 && (
        <ul className="absolute top-full right-0 left-0 z-50 mt-1.5 max-h-80 overflow-y-auto rounded-xl border border-stone-200 bg-white py-1 shadow-lg dark:border-stone-700 dark:bg-stone-900">
          {vysledky.length === 0 ? (
            <li className="px-4 py-3 text-sm text-stone-500 dark:text-stone-400">
              Nič sa nenašlo.
            </li>
          ) : (
            vysledky.map(({ dielo }, i) => (
              <li key={dielo.id}>
                <button
                  type="button"
                  onMouseEnter={() => setZvyraznene(i)}
                  onClick={() => otvor(dielo.id)}
                  className={`block w-full px-4 py-2 text-left ${
                    i === zvyraznene ? 'bg-amber-50 dark:bg-stone-800' : ''
                  }`}
                >
                  <span className="block text-sm font-medium text-stone-800 dark:text-stone-200">
                    {dielo.nazov}
                  </span>
                  <span className="block text-xs text-stone-500 dark:text-stone-400">
                    {menoAutora(dielo)} · {dielo.rocnik}. ročník
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
