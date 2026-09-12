import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeApi {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeApi | null>(null)

function jeTmavy(theme: Theme): boolean {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return theme === 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'system')

  useEffect(() => {
    const uplatni = () => document.documentElement.classList.toggle('dark', jeTmavy(theme))
    uplatni()

    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', uplatni)
    return () => media.removeEventListener('change', uplatni)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeApi {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme musí byť použitý vnútri <ThemeProvider>')
  return ctx
}
