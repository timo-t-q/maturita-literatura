/**
 * Tenká vrstva nad localStorage. Všetko je zabalené v try/catch — v privátnom
 * okne alebo pri zablokovaných cookies môže prístup vyhodiť výnimku a
 * aplikácia musí fungovať aj bez uloženého stavu.
 */

const PREFIX = 'maturita-lit:'

export function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    /* úložisko nie je dostupné — pokračujeme bez ukladania */
  }
}

export function removeKey(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key)
  } catch {
    /* ignorujeme */
  }
}
