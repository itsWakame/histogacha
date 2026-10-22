// 读取 data/figures-seed.mjs，生成可向 figures 表 upsert 的 SQL（分批）
// 用法: node scripts/gen-seed.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FIGURES } from '../data/figures-seed.mjs'

const esc = (s) => String(s ?? '').replace(/'/g, "''")
const arr = (xs) => {
  const a = Array.isArray(xs) ? xs : []
  if (a.length === 0) return "'{}'"
  return 'ARRAY[' + a.map((x) => "'" + esc(x) + "'").join(', ') + ']'
}

const cols = [
  'id', 'name', 'name_alt', 'years', 'era', 'region', 'role', 'tags', 'bio',
  'relation', 'story', 'image', 'mds', 'dlabels', 'dkinds', 'note', 'relations', 'rel_notes',
]

function tupleSql(f) {
  const relation = (f.relations && f.relations[0]) || ''
  const note = (f.relNotes && f.relNotes[0]) || ''
  const vals = [
    f.id, `'${esc(f.name)}'`, `'${esc(f.name_alt)}'`, `'${esc(f.years)}'`, `'${esc(f.era)}'`,
    `'${esc(f.region)}'`, `'${esc(f.role)}'`, arr(f.tags), `'${esc(f.bio)}'`, `'${esc(relation)}'`,
    `'${esc(f.story)}'`, `'${esc(f.image)}'`, arr(f.mds), arr(f.dlabels), arr(f.dkinds),
    `'${esc(note)}'`, arr(f.relations), arr(f.relNotes),
  ]
  return `(${vals.join(', ')})`
}

function chunkSql(rows) {
  const updates = cols.slice(1).map((c) => `${c} = EXCLUDED.${c}`).join(', ')
  return `INSERT INTO figures (${cols.join(', ')}) VALUES
  ${rows.map(tupleSql).join(',\n  ')}
  ON CONFLICT (id) DO UPDATE SET ${updates};`
}

const sorted = [...FIGURES].sort((a, b) => a.id - b.id)
const CHUNK = 10
const parts = []
for (let i = 0; i < sorted.length; i += CHUNK) parts.push(sorted.slice(i, i + CHUNK))

const outDir = path.resolve('data')
fs.mkdirSync(outDir, { recursive: true })
parts.forEach((p, i) => {
  const sql = chunkSql(p)
  const file = path.join(outDir, `seed-part${i + 1}.sql`)
  fs.writeFileSync(file, sql)
  console.log(`WROTE ${file}  (${p.length} rows)`)
})
console.log('TOTAL', sorted.length)
