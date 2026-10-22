// 通过元数据服务解析 en.wikipedia 页面主图，输出 id -> 图片地址
import fs from 'node:fs'

const titles = [
  ['napoleon', 'Napoleon'],
  ['caesar', 'Julius_Caesar'],
  ['alexander', 'Alexander_the_Great'],
  ['joan', 'Joan_of_Arc'],
  ['elizabeth1', 'Elizabeth_I'],
  ['louis14', 'Louis_XIV'],
  ['catherine2', 'Catherine_the_Great'],
  ['victoria', 'Queen_Victoria'],
  ['washington', 'George_Washington'],
  ['lincoln', 'Abraham_Lincoln'],
  ['churchill', 'Winston_Churchill'],
  ['nero', 'Nero'],
  ['copernicus', 'Nicolaus_Copernicus'],
  ['galileo', 'Galileo_Galilei'],
  ['newton', 'Isaac_Newton'],
  ['darwin', 'Charles_Darwin'],
  ['pasteur', 'Louis_Pasteur'],
  ['tesla', 'Nikola_Tesla'],
  ['curie', 'Marie_Curie'],
  ['einstein', 'Albert_Einstein'],
  ['turing', 'Alan_Turing'],
  ['ada', 'Ada_Lovelace'],
  ['franklin', 'Rosalind_Franklin'],
  ['leonardo', 'Leonardo_da_Vinci'],
  ['michelangelo', 'Michelangelo'],
  ['caravaggio', 'Caravaggio'],
  ['rembrandt', 'Rembrandt'],
  ['vangogh', 'Vincent_van_Gogh'],
  ['monet', 'Claude_Monet'],
  ['picasso', 'Pablo_Picasso'],
  ['kahlo', 'Frida_Kahlo'],
  ['mozart', 'Wolfgang_Amadeus_Mozart'],
  ['beethoven', 'Ludwig_van_Beethoven'],
  ['freddie', 'Freddie_Mercury'],
  ['shakespeare', 'William_Shakespeare'],
  ['austen', 'Jane_Austen'],
  ['poe', 'Edgar_Allan_Poe'],
  ['dickens', 'Charles_Dickens'],
  ['hugo', 'Victor_Hugo'],
  ['wilde', 'Oscar_Wilde'],
  ['dostoevsky', 'Fyodor_Dostoevsky'],
  ['tolstoy', 'Leo_Tolstoy'],
  ['dickinson', 'Emily_Dickinson'],
  ['woolf', 'Virginia_Woolf'],
  ['hemingway', 'Ernest_Hemingway'],
  ['caligula', 'Caligula'],
  ['bathory', 'Elizabeth_B%C3%A1thory'],
  ['robespierre', 'Maximilien_Robespierre'],
  ['borgia', 'Cesare_Borgia'],
  ['merrick', 'Joseph_Merrick'],
]

const out = {}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

for (const [id, title] of titles) {
  if (out[id]) continue
  const api = `https://api.microlink.io/?url=${encodeURIComponent(
    'https://en.wikipedia.org/wiki/' + title
  )}&meta=true`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(api, { signal: AbortSignal.timeout(30000) })
      const json = await res.json()
      const url = json?.data?.image?.url || json?.data?.logo?.url || ''
      if (url) {
        out[id] = url.split('?')[0]
        console.log(`OK   ${id}  ${out[id].slice(0, 100)}`)
        break
      }
      console.log(`MISS ${id} ${json?.status || res.status}`)
    } catch (e) {
      console.log(`ERR  ${id} ${e.message}`)
    }
    await sleep(2000)
  }
  fs.writeFileSync('data/images.json', JSON.stringify(out, null, 2))
  await sleep(1200)
}

console.log(`\nDONE ${Object.keys(out).length}/${titles.length}`)
