import { useTheme, type Theme } from '../lib/theme'

const MOZNOSTI: { id: Theme; label: string; ikona: string }[] = [
  { id: 'light', label: 'Svetlý režim', ikona: '☀' },
  { id: 'dark', label: 'Tmavý režim', ikona: '☾' },
  { id: 'system', label: 'Podľa systému', ikona: '◐' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="group"
      aria-label="Farebný režim"
      className="flex items-center gap-0.5 rounded-full border border-stone-200 p-0.5 dark:border-stone-800"
    >
      {MOZNOSTI.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => setTheme(m.id)}
          aria-label={m.label}
          aria-pressed={theme === m.id}
          title={m.label}
          className={`size-7 rounded-full text-sm transition-colors ${
            theme === m.id
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              : 'text-stone-400 hover:bg-stone-100 dark:text-stone-500 dark:hover:bg-stone-800'
          }`}
        >
          <span aria-hidden="true">{m.ikona}</span>
        </button>
      ))}
    </div>
  )
}
