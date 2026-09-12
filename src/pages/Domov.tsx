import { Link } from 'react-router-dom'
import { ROCNIKY, diela, pocetUloh, zoradeneDiela } from '../data'
import { useProgress } from '../lib/progress'
import { ProgressBar } from '../components/ProgressBar'
import { DieloCard } from '../components/DieloCard'

function Statistika({ hodnota, popis }: { hodnota: string | number; popis: string }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
      <div className="font-serif text-2xl font-semibold text-stone-900 tabular-nums dark:text-stone-100">
        {hodnota}
      </div>
      <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{popis}</div>
    </div>
  )
}

export function Domov() {
  const { stavy } = useProgress()
  const nastudovane = diela.filter((d) => stavy[d.id] === 'nastudovane')
  const standardizovane = diela.filter((d) => d.standardizovane)

  // Ponúkni ako „pokračuj“ prvé rozčítané dielo, inak prvé neprečítané ŠVP dielo.
  const rozcitane = zoradeneDiela(diela).filter((d) => stavy[d.id] === 'citam')
  const naDalsie = zoradeneDiela(standardizovane)
    .filter((d) => (stavy[d.id] ?? 'neprecitane') === 'neprecitane')
    .slice(0, 3)

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="font-serif text-3xl/tight font-semibold text-stone-900 sm:text-4xl/tight dark:text-stone-100">
          Maturita zo slovenského jazyka a literatúry
        </h1>
        <p className="mt-3 max-w-2xl text-base/relaxed text-stone-600 dark:text-stone-400">
          Povinné literárne diela podľa ŠVP — rozpísané na dej, postavy, témy a jazykové
          prostriedky, s kvízmi a cvičeniami ku každému dielu. Pokrok aj poznámky zostávajú v
          tvojom prehliadači.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/diela"
            className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500"
          >
            Prehľad diel
          </Link>
          <Link
            to="/precvicovanie"
            className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            Náhodné precvičovanie
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Statistika hodnota={diela.length} popis="literárnych diel" />
        <Statistika hodnota={standardizovane.length} popis="štandardizovaných (ŠVP)" />
        <Statistika hodnota={pocetUloh} popis="cvičení a otázok" />
        <Statistika hodnota={`${nastudovane.length}`} popis="naštudovaných diel" />
      </section>

      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
          Pokrok podľa ročníka
        </h2>
        <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
          {ROCNIKY.map((rocnik) => {
            const vRocniku = diela.filter((d) => d.rocnik === rocnik)
            const hotove = vRocniku.filter((d) => stavy[d.id] === 'nastudovane').length
            return (
              <ProgressBar
                key={rocnik}
                label={`${rocnik}. ročník`}
                hotovo={hotove}
                celkom={vRocniku.length}
              />
            )
          })}
        </div>
      </section>

      {rozcitane.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            Rozčítané
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {rozcitane.slice(0, 3).map((dielo) => (
              <DieloCard key={dielo.id} dielo={dielo} />
            ))}
          </div>
        </section>
      )}

      {naDalsie.length > 0 && (
        <section>
          <h2 className="mb-1 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            Čím pokračovať
          </h2>
          <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
            Štandardizované diela, ktoré máš ešte pred sebou.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {naDalsie.map((dielo) => (
              <DieloCard key={dielo.id} dielo={dielo} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
