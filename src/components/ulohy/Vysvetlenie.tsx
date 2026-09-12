export function Vysvetlenie({ spravne, text }: { spravne: boolean; text?: string }) {
  return (
    <div
      role="status"
      className={`mt-3 rounded-lg border-l-3 px-3 py-2.5 text-sm/relaxed ${
        spravne
          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200'
          : 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200'
      }`}
    >
      <strong className="font-semibold">{spravne ? 'Správne. ' : 'Nesprávne. '}</strong>
      {text}
    </div>
  )
}
