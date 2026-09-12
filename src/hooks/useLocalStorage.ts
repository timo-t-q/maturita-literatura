import { useCallback, useEffect, useState } from 'react'
import { readJson, writeJson } from '../lib/storage'

/**
 * Stav synchronizovaný s localStorage. Zapisuje pri každej zmene a reaguje na
 * `storage` event, aby sa stav zhodoval medzi otvorenými kartami.
 */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => readJson(key, initial))

  useEffect(() => {
    writeJson(key, value)
  }, [key, value])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== `maturita-lit:${key}`) return
      setValue(readJson(key, initial))
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
    // `initial` je konštanta volajúceho, zámerne nie je v závislostiach
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const reset = useCallback(() => setValue(initial), [initial])

  return [value, setValue, reset] as const
}
