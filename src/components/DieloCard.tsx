import { Link } from 'react-router-dom'
import { nazovDruhu, type DieloPrehlad } from '../data'
import { Badge } from './Badge'
import { StavButton } from './StavButton'
import { useProgress } from '../lib/progress'

export function DieloCard({ dielo }: { dielo: DieloPrehlad }) {
  const { skore } = useProgress()
  const najlepsieSkore = skore[dielo.id]

  return (
    <Link
      to={`/dielo/${dielo.id}`}
      className="group flex h-full flex-col gap-3 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-700/60"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <Badge variant="rocnik">{dielo.rocnik}. ročník</Badge>
        <Badge variant={dielo.druh}>{nazovDruhu(dielo.druh)}</Badge>
        {dielo.standardizovane && (
          <Badge variant="std" title="Štandardizované literárne dielo podľa ŠVP">
            ŠVP
          </Badge>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-serif text-lg/tight font-semibold text-stone-900 group-hover:text-amber-700 dark:text-stone-100 dark:group-hover:text-amber-400">
          {dielo.nazov}
        </h3>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{dielo.autor}</p>
        <p className="mt-2.5 line-clamp-3 text-sm/relaxed text-stone-600 dark:text-stone-400">
          {dielo.anotacia}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-stone-100 pt-3 dark:border-stone-800">
        <StavButton dieloId={dielo.id} />
        <span className="text-xs text-stone-400 dark:text-stone-500">
          {najlepsieSkore === undefined
            ? `${dielo.pocetUloh} cvičení`
            : `kvíz ${najlepsieSkore} %`}
        </span>
      </div>
    </Link>
  )
}
