import { NavLink } from 'react-router-dom'
import { DRUHY, LITERATURY, ROCNIKY, autoriSDielami, diela } from '../data'
import type { Druh, Literatura, Rocnik } from '../types'
import { useProgress } from '../lib/progress'
import { ProgressBar } from './ProgressBar'

export interface Filtre {
  rocniky: Rocnik[]
  druhy: Druh[]
  literatury: Literatura[]
  autorId: string | null
  ibaStandardizovane: boolean
}

export const PRAZDNE_FILTRE: Filtre = {
  rocniky: [],
  druhy: [],
  literatury: [],
  autorId: null,
  ibaStandardizovane: false,
}

export function jeAktivny(filtre: Filtre): boolean {
  return (
    filtre.rocniky.length > 0 ||
    filtre.druhy.length > 0 ||
    filtre.literatury.length > 0 ||
    filtre.autorId !== null ||
    filtre.ibaStandardizovane
  )
}

/** Pridá alebo odoberie hodnotu z polia filtra (immutable). */
function prepni<T>(pole: T[], hodnota: T): T[] {
  return pole.includes(hodnota) ? pole.filter((x) => x !== hodnota) : [...pole, hodnota]
}

function Sekcia({ titulok, children }: { titulok: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
        {titulok}
      </h3>
      {children}
    </div>
  )
}

function Checkbox({
  label,
  pocet,
  checked,
  onChange,
}: {
  label: string
  pocet?: number
  checked: boolean
  onChange: () => void
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-800">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-4 shrink-0 accent-amber-600 dark:accent-amber-500"
      />
      <span className="flex-1 text-stone-700 dark:text-stone-300">{label}</span>
      {pocet !== undefined && (
        <span className="text-xs tabular-nums text-stone-400 dark:text-stone-500">{pocet}</span>
      )}
    </label>
  )
}

export function Sidebar({
  filtre,
  setFiltre,
  onNavigate,
}: {
  filtre: Filtre
  setFiltre: (f: Filtre) => void
  /** zavolá sa po kliknutí na odkaz — na mobile zatvorí panel */
  onNavigate?: () => void
}) {
  const { stavy } = useProgress()
  const nastudovane = diela.filter((d) => stavy[d.id] === 'nastudovane').length
  const autori = autoriSDielami()

  const pocetPreRocnik = (r: Rocnik) => diela.filter((d) => d.rocnik === r).length
  const pocetPreDruh = (d: Druh) => diela.filter((x) => x.druh === d).length
  const pocetPreLit = (l: Literatura) => diela.filter((x) => x.literatura === l).length

  return (
    <nav className="flex h-full flex-col gap-6 overflow-y-auto p-4" aria-label="Filtre a navigácia">
      <div className="rounded-lg bg-stone-100 p-3 dark:bg-stone-900">
        <ProgressBar hotovo={nastudovane} celkom={diela.length} label="Celkový pokrok" />
      </div>

      <Sekcia titulok="Prehľady">
        <div className="flex flex-col gap-0.5">
          {[
            { to: '/', label: 'Domov' },
            { to: '/diela', label: 'Všetky diela' },
            { to: '/precvicovanie', label: 'Precvičovanie' },
            { to: '/pokrok', label: 'Môj pokrok' },
          ].map((odkaz) => (
            <NavLink
              key={odkaz.to}
              to={odkaz.to}
              end={odkaz.to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                `rounded-md px-2 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
                }`
              }
            >
              {odkaz.label}
            </NavLink>
          ))}
        </div>
      </Sekcia>

      <Sekcia titulok="Ročník">
        {ROCNIKY.map((r) => (
          <Checkbox
            key={r}
            label={`${r}. ročník`}
            pocet={pocetPreRocnik(r)}
            checked={filtre.rocniky.includes(r)}
            onChange={() => setFiltre({ ...filtre, rocniky: prepni(filtre.rocniky, r) })}
          />
        ))}
      </Sekcia>

      <Sekcia titulok="Literárny druh">
        {DRUHY.map((d) => (
          <Checkbox
            key={d.id}
            label={d.nazov}
            pocet={pocetPreDruh(d.id)}
            checked={filtre.druhy.includes(d.id)}
            onChange={() => setFiltre({ ...filtre, druhy: prepni(filtre.druhy, d.id) })}
          />
        ))}
      </Sekcia>

      <Sekcia titulok="Literatúra">
        {LITERATURY.map((l) => (
          <Checkbox
            key={l.id}
            label={l.nazov}
            pocet={pocetPreLit(l.id)}
            checked={filtre.literatury.includes(l.id)}
            onChange={() => setFiltre({ ...filtre, literatury: prepni(filtre.literatury, l.id) })}
          />
        ))}
      </Sekcia>

      <Sekcia titulok="Iné">
        <Checkbox
          label="Iba štandardizované (ŠVP)"
          checked={filtre.ibaStandardizovane}
          onChange={() => setFiltre({ ...filtre, ibaStandardizovane: !filtre.ibaStandardizovane })}
        />
      </Sekcia>

      <Sekcia titulok="Autor">
        <select
          value={filtre.autorId ?? ''}
          onChange={(event) => setFiltre({ ...filtre, autorId: event.target.value || null })}
          className="w-full rounded-md border border-stone-300 bg-white px-2 py-1.5 text-sm text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
        >
          <option value="">Všetci autori</option>
          {autori.map(({ autor, pocet }) => (
            <option key={autor.id} value={autor.id}>
              {autor.meno} ({pocet})
            </option>
          ))}
        </select>
      </Sekcia>

      {jeAktivny(filtre) && (
        <button
          type="button"
          onClick={() => setFiltre(PRAZDNE_FILTRE)}
          className="rounded-md border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800"
        >
          Zrušiť všetky filtre
        </button>
      )}
    </nav>
  )
}

/** Aplikuje filtre na zoznam diel. */
export function filtruj(zoznam: typeof diela, filtre: Filtre) {
  return zoznam.filter((d) => {
    if (filtre.rocniky.length > 0 && !filtre.rocniky.includes(d.rocnik)) return false
    if (filtre.druhy.length > 0 && !filtre.druhy.includes(d.druh)) return false
    if (filtre.literatury.length > 0 && !filtre.literatury.includes(d.literatura)) return false
    if (filtre.autorId && d.autorId !== filtre.autorId) return false
    if (filtre.ibaStandardizovane && !d.standardizovane) return false
    return true
  })
}
