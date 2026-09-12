import { useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { PRAZDNE_FILTRE, type Filtre } from './lib/filters'
import { Domov } from './pages/Domov'
import { DielaPrehlad } from './pages/DielaPrehlad'
import { DieloDetail } from './pages/DieloDetail'
import { Precvicovanie } from './pages/Precvicovanie'
import { Pokrok } from './pages/Pokrok'
import { ProgressProvider } from './lib/progress'
import { ThemeProvider } from './lib/theme'

export default function App() {
  // Filtre žijú nad routerom, aby sa nestratili pri prechode na detail a späť.
  const [filtre, setFiltre] = useState<Filtre>(PRAZDNE_FILTRE)

  return (
    <ThemeProvider>
      <ProgressProvider>
        {/* HashRouter — GitHub Pages nedokáže prepisovať cesty na index.html. */}
        <HashRouter>
          <Routes>
            <Route element={<Layout filtre={filtre} setFiltre={setFiltre} />}>
              <Route path="/" element={<Domov />} />
              <Route
                path="/diela"
                element={<DielaPrehlad filtre={filtre} setFiltre={setFiltre} />}
              />
              <Route path="/dielo/:id" element={<DieloDetail />} />
              <Route path="/precvicovanie" element={<Precvicovanie />} />
              <Route path="/pokrok" element={<Pokrok />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </ProgressProvider>
    </ThemeProvider>
  )
}
