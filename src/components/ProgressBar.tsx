export function ProgressBar({
  hotovo,
  celkom,
  label,
  compact = false,
}: {
  hotovo: number
  celkom: number
  label?: string
  compact?: boolean
}) {
  const percent = celkom === 0 ? 0 : Math.round((hotovo / celkom) * 100)

  return (
    <div>
      {label && (
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{label}</span>
          <span className="text-xs tabular-nums text-stone-500 dark:text-stone-400">
            {hotovo}/{celkom} · {percent} %
          </span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Pokrok'}
        className={`w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800 ${
          compact ? 'h-1.5' : 'h-2.5'
        }`}
      >
        <div
          className="h-full rounded-full bg-amber-500 transition-[width] duration-500 dark:bg-amber-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
