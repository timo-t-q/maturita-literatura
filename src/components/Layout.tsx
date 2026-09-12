import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SearchBox } from './SearchBox'
import { ThemeToggle } from './ThemeToggle'
import { Sidebar, type Filtre } from './Sidebar'

export function Layout({
  filtre,
  setFiltre,
}: {
  filtre: Filtre
  setFiltre: (f: Filtre) => void
}) {
  const [panelOtvoreny, setPanelOtvoreny] = useState(false)
  const { pathname } = useLocation()

  // Po prechode na inú stránku odroluj nahor a zatvor mobilný panel.
  useEffect(() => {
    setPanelOtvoreny(false)
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="min-h-dvh">
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-amber-500 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Preskočiť na obsah
      </a>

      <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 sm:px-5">
          <button
            type="button"
            onClick={() => setPanelOtvoreny((v) => !v)}
            aria-label="Otvoriť menu"
            aria-expanded={panelOtvoreny}
            className="rounded-md p-2 text-stone-600 hover:bg-stone-200 lg:hidden dark:text-stone-400 dark:hover:bg-stone-800"
          >
            <span aria-hidden="true">☰</span>
          </button>

          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span aria-hidden="true" className="text-lg">
              📖
            </span>
            <span className="hidden font-serif text-base font-semibold text-stone-900 sm:inline dark:text-stone-100">
              Maturita z literatúry
            </span>
          </Link>

          <div className="ml-auto flex flex-1 items-center justify-end gap-3">
            <SearchBox />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Bočný panel: fixný na desktope, výsuvný na mobile. */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 shrink-0 border-r border-stone-200 bg-stone-50 pt-14 transition-transform duration-200 lg:sticky lg:top-14 lg:h-[calc(100dvh-3.5rem)] lg:translate-x-0 lg:pt-0 dark:border-stone-800 dark:bg-stone-950 ${
            panelOtvoreny ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar
            filtre={filtre}
            setFiltre={setFiltre}
            onNavigate={() => setPanelOtvoreny(false)}
          />
        </aside>

        {panelOtvoreny && (
          <button
            type="button"
            aria-label="Zatvoriť menu"
            onClick={() => setPanelOtvoreny(false)}
            className="fixed inset-0 z-30 bg-stone-900/40 lg:hidden"
          />
        )}

        <main id="obsah" className="min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <Outlet />
        </main>
      </div>

      <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-400 dark:border-stone-800 dark:text-stone-500">
        Príprava na maturitu zo slovenského jazyka a literatúry · obsah podľa ŠVP ·
        pokrok sa ukladá do prehliadača
      </footer>
    </div>
  )
}
