/** Fisher–Yates — vracia novú premiešanú kópiu, pôvodné pole nemení. */
export function premiesaj<T>(pole: readonly T[]): T[] {
  const kopia = [...pole]
  for (let i = kopia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[kopia[i], kopia[j]] = [kopia[j], kopia[i]]
  }
  return kopia
}
