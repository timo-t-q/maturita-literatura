import type { ReactNode } from 'react'

type Variant = 'neutral' | 'poezia' | 'proza' | 'drama' | 'std' | 'rocnik'

const STYLY: Record<Variant, string> = {
  neutral: 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400',
  poezia: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  proza: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  drama: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
  std: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  rocnik: 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-200',
}

export function Badge({
  variant = 'neutral',
  children,
  title,
}: {
  variant?: Variant
  children: ReactNode
  title?: string
}) {
  return (
    <span
      title={title}
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${STYLY[variant]}`}
    >
      {children}
    </span>
  )
}
