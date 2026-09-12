import { useEffect, useState } from 'react'

export interface AsyncStav<T> {
  data: T | undefined
  nacitava: boolean
  chyba: Error | undefined
}

/**
 * Spustí asynchrónne načítanie a sleduje jeho stav. Výsledok zastaraného
 * behu sa zahodí — pri rýchlom prepínaní diel by inak mohol prepísať novší.
 */
export function useAsync<T>(nacitaj: () => Promise<T>, zavislosti: unknown[]): AsyncStav<T> {
  const [stav, setStav] = useState<AsyncStav<T>>({
    data: undefined,
    nacitava: true,
    chyba: undefined,
  })

  useEffect(() => {
    let aktualne = true
    setStav({ data: undefined, nacitava: true, chyba: undefined })

    nacitaj().then(
      (data) => {
        if (aktualne) setStav({ data, nacitava: false, chyba: undefined })
      },
      (chyba: Error) => {
        if (aktualne) setStav({ data: undefined, nacitava: false, chyba })
      },
    )

    return () => {
      aktualne = false
    }
    // `nacitaj` je zámerne mimo závislostí — volajúci riadi obnovu cez `zavislosti`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, zavislosti)

  return stav
}
