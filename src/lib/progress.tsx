import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

/** Stav naštudovania jedného diela. */
export type StavDiela = 'neprecitane' | 'citam' | 'nastudovane'

interface ProgressState {
  /** dieloId -> stav */
  stavy: Record<string, StavDiela>
  /** dieloId -> vlastné poznámky */
  poznamky: Record<string, string>
  /** dieloId -> najlepší výsledok kvízu v percentách (0–100) */
  skore: Record<string, number>
}

const EMPTY: ProgressState = { stavy: {}, poznamky: {}, skore: {} }

interface ProgressApi extends ProgressState {
  stavDiela: (dieloId: string) => StavDiela
  setStav: (dieloId: string, stav: StavDiela) => void
  /** neprečítané → naštudované → čítam → neprečítané */
  cyklujStav: (dieloId: string) => void
  poznamka: (dieloId: string) => string
  setPoznamka: (dieloId: string, text: string) => void
  zapisSkore: (dieloId: string, percent: number) => void
  vymazatVsetko: () => void
}

const ProgressContext = createContext<ProgressApi | null>(null)

const PORADIE: StavDiela[] = ['neprecitane', 'nastudovane', 'citam']

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState, reset] = useLocalStorage<ProgressState>('progress', EMPTY)

  const setStav = useCallback(
    (dieloId: string, stav: StavDiela) => {
      setState((prev) => ({ ...prev, stavy: { ...prev.stavy, [dieloId]: stav } }))
    },
    [setState],
  )

  const cyklujStav = useCallback(
    (dieloId: string) => {
      setState((prev) => {
        const aktualny = prev.stavy[dieloId] ?? 'neprecitane'
        const dalsi = PORADIE[(PORADIE.indexOf(aktualny) + 1) % PORADIE.length]
        return { ...prev, stavy: { ...prev.stavy, [dieloId]: dalsi } }
      })
    },
    [setState],
  )

  const setPoznamka = useCallback(
    (dieloId: string, text: string) => {
      setState((prev) => ({ ...prev, poznamky: { ...prev.poznamky, [dieloId]: text } }))
    },
    [setState],
  )

  const zapisSkore = useCallback(
    (dieloId: string, percent: number) => {
      setState((prev) => {
        const doteraz = prev.skore[dieloId] ?? -1
        if (percent <= doteraz) return prev
        return { ...prev, skore: { ...prev.skore, [dieloId]: percent } }
      })
    },
    [setState],
  )

  const api = useMemo<ProgressApi>(
    () => ({
      ...state,
      stavDiela: (dieloId) => state.stavy[dieloId] ?? 'neprecitane',
      setStav,
      cyklujStav,
      poznamka: (dieloId) => state.poznamky[dieloId] ?? '',
      setPoznamka,
      zapisSkore,
      vymazatVsetko: reset,
    }),
    [state, setStav, cyklujStav, setPoznamka, zapisSkore, reset],
  )

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressApi {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress musí byť použitý vnútri <ProgressProvider>')
  return ctx
}
