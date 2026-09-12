const fs = require('fs')
const target = 'src/data/works/rocnik1.ts'
const batch = process.argv[2]
const MARKER = '  // === DOPLNIT_DIELA ==='
const src = fs.readFileSync(target, 'utf8')
if (!src.includes(MARKER)) throw new Error('marker not found')
const body = fs.readFileSync(batch, 'utf8').replace(/\s*$/, '')
const out = src.replace(MARKER, () => body + '\n' + MARKER)
fs.writeFileSync(target, out)
console.log('spliced ' + batch + ' (+' + body.split('\n').length + ' lines)')
