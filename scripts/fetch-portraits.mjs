// 通过百度图片搜索抓取人物肖像，下载到本地 assets/figures/
// 百度会把原图缓存到自己的 CDN（img0.baidu.com），国内可直接下载
// 用法: node scripts/fetch-portraits.mjs [id...]
import fs from 'node:fs'
import path from 'node:path'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// id -> [搜索词, 必须出现的关键词]
export const FIGURES = {
  napoleon: ['拿破仑 波拿巴 半身像 肖像 大卫 皇帝', ['拿破仑', 'Napoleon', 'Bonaparte']],
  caesar: ['凯撒 画像 雕塑 罗马', ['凯撒', 'Caesar']],
  alexander: ['亚历山大大帝 画像', ['亚历山大', 'Alexander']],
  joan: ['圣女贞德 画像 油画', ['贞德', 'Joan', 'Arc']],
  elizabeth1: ['伊丽莎白一世 画像 油画', ['伊丽莎白', 'Elizabeth']],
  louis14: ['路易十四 画像 油画 太阳王', ['路易十四', 'Louis XIV']],
  catherine2: ['叶卡捷琳娜二世 画像', ['叶卡捷琳娜', 'Catherine']],
  victoria: ['维多利亚女王 画像', ['维多利亚', 'Victoria']],
  washington: ['乔治华盛顿 画像 油画', ['华盛顿', 'Washington']],
  lincoln: ['亚伯拉罕林肯 肖像 照片', ['林肯', 'Lincoln']],
  churchill: ['温斯顿丘吉尔 肖像 照片', ['丘吉尔', 'Churchill']],
  nero: ['尼禄 罗马 皇帝 雕像 胸像', ['尼禄', 'Nero']],
  copernicus: ['哥白尼 画像', ['哥白尼', 'Copernicus']],
  galileo: ['伽利略 画像 油画', ['伽利略', 'Galileo']],
  newton: ['艾萨克牛顿 画像 油画', ['牛顿', 'Newton']],
  darwin: ['达尔文 肖像 照片', ['达尔文', 'Darwin']],
  pasteur: ['巴斯德 肖像 照片', ['巴斯德', 'Pasteur']],
  tesla: ['特斯拉 肖像 照片', ['特斯拉', 'Tesla']],
  curie: ['玛丽居里 肖像 照片', ['居里', 'Curie']],
  einstein: ['爱因斯坦 肖像 照片', ['爱因斯坦', 'Einstein']],
  turing: ['艾伦图灵 肖像 照片', ['图灵', 'Turing']],
  ada: ['阿达洛芙莱斯 画像', ['洛芙莱斯', 'Lovelace', 'Ada']],
  franklin: ['罗莎琳德富兰克林 照片', ['富兰克林', 'Franklin']],
  leonardo: ['达芬奇 肖像 中年男子 画像', ['达芬奇', 'Leonardo']],
  michelangelo: ['米开朗基罗 画像', ['米开朗基罗', 'Michelangelo']],
  caravaggio: ['卡拉瓦乔 自画像', ['卡拉瓦乔', 'Caravaggio']],
  rembrandt: ['伦勃朗 自画像', ['伦勃朗', 'Rembrandt']],
  vangogh: ['梵高 自画像 油画', ['梵高', '梵谷', 'Van Gogh', 'Gogh']],
  monet: ['莫奈 自画像 印象派', ['莫奈', 'Monet']],
  picasso: ['毕加索 肖像 照片', ['毕加索', 'Picasso']],
  kahlo: ['弗里达卡罗 自画像', ['弗里达', 'Kahlo']],
  mozart: ['莫扎特 画像 油画', ['莫扎特', 'Mozart']],
  beethoven: ['贝多芬 画像 油画', ['贝多芬', 'Beethoven']],
  freddie: [' Freddie Mercury 皇后乐队 照片', ['Freddie', 'Mercury']],
  shakespeare: ['莎士比亚 画像', ['莎士比亚', 'Shakespeare']],
  austen: ['简奥斯汀 画像', ['奥斯汀', 'Austen']],
  poe: ['爱伦坡 肖像 照片', ['爱伦坡', '坡', 'Poe']],
  dickens: ['狄更斯 肖像 照片', ['狄更斯', 'Dickens']],
  hugo: ['雨果 肖像 照片 维克多', ['雨果', 'Hugo']],
  wilde: ['奥斯卡王尔德 肖像 照片', ['王尔德', 'Wilde']],
  dostoevsky: ['陀思妥耶夫斯基 肖像', ['陀思妥耶夫斯基', 'Dostoevsky']],
  tolstoy: ['列夫托尔斯泰 肖像 照片', ['托尔斯泰', 'Tolstoy']],
  dickinson: ['艾米莉狄金森 肖像 照片', ['狄金森', 'Dickinson']],
  woolf: ['弗吉尼亚伍尔夫 黑白照片', ['伍尔夫', 'Virginia', 'Woolf']],
  hemingway: ['海明威 肖像 照片', ['海明威', 'Hemingway']],
  caligula: ['卡利古拉 罗马 皇帝 胸像', ['卡利古拉', 'Caligula']],
  bathory: ['Elizabeth Báthory 伯爵夫人 油画 肖像 历史', ['巴托里', 'Bathory']],
  robespierre: ['罗伯斯庇尔 画像', ['罗伯斯庇尔', 'Robespierre']],
  borgia: ['切萨雷波吉亚 画像', ['波吉亚', 'Borgia']],
  merrick: ['象人 约瑟夫梅里克 照片', ['象人', '梅里克', 'Merrick']],
  // ===== 新增 51-100 =====
  augustus: ['奥古斯都 雕像 胸像 罗马皇帝', ['奥古斯都', 'Augustus', '屋大维']],
  tiberius: ['提比略 罗马 皇帝 雕像 胸像', ['提比略', 'Tiberius']],
  claudius: ['克劳狄乌斯 罗马 皇帝 雕像 胸像', ['克劳狄', 'Claudius']],
  galba: ['加尔巴 罗马 皇帝 雕像 胸像', ['加尔巴', 'Galba']],
  otho: ['奥托 罗马 皇帝 雕像 胸像', ['奥托', 'Otho']],
  vitellius: ['维特里乌斯 罗马 皇帝 雕像 胸像', ['维特里乌斯', 'Vitellius']],
  vespasian: ['韦斯巴芗 罗马 皇帝 雕像 斗兽场', ['韦斯巴芗', 'Vespasian']],
  titus: ['提图斯 罗马 皇帝 雕像 凯旋门', ['提图斯', 'Titus']],
  domitian: ['图密善 罗马 皇帝 雕像 胸像', ['图密善', 'Domitian']],
  charlemagne: ['查理曼 画像 雕塑 皇帝 加冕', ['查理曼', 'Charlemagne']],
  barbarossa: ['腓特烈 巴巴罗萨 画像 雕塑 红胡子', ['巴巴罗萨', 'Barbarossa']],
  peter: ['彼得大帝 画像 肖像 雕塑 俄国', ['彼得大帝', 'Peter the Great']],
  frederick2: ['腓特烈大帝 画像 肖像 雕塑 普鲁士', ['腓特烈大帝', 'Frederick the Great']],
  william1: ['征服者威廉 画像 雕塑 贝叶挂毯', ['征服者威廉', 'William the Conqueror']],
  henry8: ['亨利八世 画像 肖像 油画 都铎', ['亨利八世', 'Henry VIII']],
  cicero: ['西塞罗 雕像 胸像 罗马 演说家', ['西塞罗', 'Cicero']],
  pericles: ['伯里克利 雕像 胸像 雅典 黄金时代', ['伯里克利', 'Pericles']],
  jefferson: ['托马斯 杰斐逊 画像 肖像 美国', ['杰斐逊', 'Jefferson']],
  benfranklin: ['本杰明 富兰克林 肖像 照片 风筝', ['富兰克林', 'Franklin']],
  bismarck: ['俾斯麦 画像 肖像 照片 铁血', ['俾斯麦', 'Bismarck']],
  rooseveltT: ['西奥多 罗斯福 肖像 照片 眼镜', ['西奥多罗斯福', 'Theodore Roosevelt']],
  archimedes: ['阿基米德 画像 雕塑 雕像 数学', ['阿基米德', 'Archimedes']],
  kepler: ['开普勒 画像 肖像 天文学家', ['开普勒', 'Kepler']],
  lavoisier: ['拉瓦锡 画像 肖像 化学家 天平', ['拉瓦锡', 'Lavoisier']],
  faraday: ['法拉第 肖像 照片 科学家 线圈', ['法拉第', 'Faraday']],
  maxwell: ['麦克斯韦 肖像 照片 科学家 电磁', ['麦克斯韦', 'Maxwell']],
  mendel: ['孟德尔 肖像 照片 修道士 豌豆', ['孟德尔', 'Mendel']],
  raphael: ['拉斐尔 自画像 画像 文艺复兴 圣母', ['拉斐尔', 'Raphael']],
  titian: ['提香 画像 肖像 威尼斯 画家', ['提香', 'Titian']],
  vermeer: ['维米尔 画像 戴珍珠耳环 自画像', ['维米尔', 'Vermeer']],
  goya: ['戈雅 自画像 画像 西班牙 画家', ['戈雅', 'Goya']],
  turner: ['透纳 自画像 画像 英国 风景 画家', ['透纳', 'Turner']],
  munch: ['蒙克 自画像 呐喊 画家 挪威', ['蒙克', 'Munch']],
  homer: ['荷马 雕像 盲诗人 雕塑 希腊', ['荷马', 'Homer']],
  dante: ['但丁 画像 雕塑 神曲 诗人', ['但丁', 'Dante']],
  cervantes: ['塞万提斯 画像 雕塑 唐吉诃德', ['塞万提斯', 'Cervantes']],
  goethe: ['歌德 画像 肖像 魏玛 诗人', ['歌德', 'Goethe']],
  twain: ['马克 吐温 肖像 照片 胡须 作家', ['马克吐温', 'Twain', 'Mark Twain']],
  christie: ['阿加莎 克里斯蒂 照片 肖像 侦探', ['阿加莎', '克里斯蒂', 'Christie', 'Agatha']],
  kafka: ['卡夫卡 肖像 照片 作家 布拉格', ['卡夫卡', 'Kafka']],
  bach: ['巴赫 画像 肖像 雕塑 作曲家', ['巴赫', 'Bach']],
  chopin: ['肖邦 画像 肖像 钢琴家 波兰', ['肖邦', 'Chopin']],
  tchaikovsky: ['柴可夫斯基 画像 肖像 作曲家 芭蕾', ['柴可夫斯基', 'Tchaikovsky']],
  hannibal: ['汉尼拔 迦太基 雕像 大象 统帅', ['汉尼拔', 'Hannibal']],
  richard1: ['理查一世 狮心王 画像 雕塑 十字军', ['理查一世', 'Richard', 'Lionheart']],
  wellington: ['威灵顿公爵 画像 雕塑 滑铁卢', ['威灵顿', 'Wellington']],
  jesus: ['耶稣 画像 雕塑 基督 圣经', ['耶稣', 'Jesus', 'Christ']],
  augustine: ['奥古斯丁 画像 雕塑 主教 希波', ['奥古斯丁', 'Augustine']],
  aquinas: ['托马斯 阿奎那 画像 雕塑 经院哲学', ['阿奎那', 'Aquinas', 'Thomas']],
  luther: ['马丁 路德 画像 雕塑 宗教改革', ['马丁路德', 'Luther', 'Martin']],
}

const OUT_DIR = 'assets/figures'
const COOKIE_FILE = 'data/tmp/baidu-cookie.txt'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

let cookie = ''
async function warmCookie() {
  fs.mkdirSync('data/tmp', { recursive: true })
  try {
    const res = await fetch('https://image.baidu.com/', {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(20000),
    })
    const raw = res.headers.getSetCookie?.() || []
    cookie = raw.map((c) => c.split(';')[0]).join('; ')
    if (cookie) fs.writeFileSync(COOKIE_FILE, cookie)
  } catch { /* 用空 cookie 也能试 */ }
}

async function search(word, rn = 30) {
  const url =
    'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=1&ipn=rj&ct=201326592' +
    '&is=&fp=result&fr=&word=' + encodeURIComponent(word) +
    '&queryWord=' + encodeURIComponent(word) +
    '&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&' +
    's=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=0&rn=' + rn + '&gsm=1e&'
  const res = await fetch(url, {
    headers: {
      'User-Agent': UA,
      Referer: 'https://image.baidu.com/search/index?tn=baiduimage&word=' + encodeURIComponent(word),
      Accept: 'application/json, text/plain, */*',
    },
    signal: AbortSignal.timeout(30000),
  })
  const text = await res.text()
  if (!text.trim().startsWith('{')) throw new Error('blocked: ' + text.slice(0, 60))
  const list = extractData(text)
  if (!list.length) throw new Error('no data')
  return list
}

// 百度返回的 JSON 常含未转义控制字符，直接 JSON.parse 会失败。
// 改为逐条抽取 data 数组中的对象，容错解析。
function extractData(text) {
  try {
    const j = JSON.parse(text)
    if (Array.isArray(j.data)) return j.data
  } catch { /* 走容错分支 */ }

  const start = text.indexOf('"data"')
  if (start < 0) return []
  const arrStart = text.indexOf('[', start)
  if (arrStart < 0) return []

  const out = []
  let depth = 0
  let inStr = false
  let esc = false
  let objStart = -1

  for (let i = arrStart; i < text.length; i++) {
    const c = text[i]
    if (inStr) {
      if (esc) { esc = false; continue }
      if (c === '\\') { esc = true; continue }
      if (c === '"') { inStr = false; continue }
      continue
    }
    if (c === '"') { inStr = true; continue }
    if (c === '{') {
      if (depth === 0) objStart = i
      depth++
      continue
    }
    if (c === '}') {
      depth--
      if (depth === 0 && objStart >= 0) {
        const chunk = text.slice(objStart, i + 1)
        try {
          out.push(JSON.parse(chunk))
        } catch {
          try {
            out.push(JSON.parse(chunk.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, ' ')))
          } catch { /* 跳过坏条目 */ }
        }
        objStart = -1
      }
      if (depth < 0) break
      continue
    }
  }
  return out
}

async function download(url, tries = 3) {
  let last
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': UA, Referer: 'https://image.baidu.com/', Cookie: cookie },
        signal: AbortSignal.timeout(30000),
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.length < 6000) throw new Error('too small ' + buf.length)
      if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not jpeg')
      return buf
    } catch (e) {
      last = e
      await sleep(1500 * (i + 1))
    }
  }
  throw last
}

// 结果相关性：标题或来源里必须含人物关键词
function relevant(item, keys) {
  const hay = ((item.fromURL || '') + ' ' + (item.fromPageTitleEnc || '') + ' ' + (item.title || '')).toLowerCase()
  return keys.some((k) => hay.includes(k.toLowerCase()))
}

// 从结果里挑出尺寸较好的原图地址
function pickUrl(item) {
  const raw = item.middleURL || item.thumbURL || item.replaceUrl || ''
  if (!raw) return ''
  // 百度 CDN 支持 &w=&h= 控制输出尺寸
  const base = raw.replace(/&w=\d+/, '').replace(/&h=\d+/, '')
  return base + '&w=900&h=1200'
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const manifestPath = 'data/portraits.json'
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : {}

  // 支持 NAP_SKIP 环境变量跳过前 N 个候选，用于挑选更合适的图
  const skip = Number(process.env.NAP_SKIP || 0)
  const only = process.argv.slice(2)
  const ids = only.length ? only : Object.keys(FIGURES)

  await warmCookie()

  let ok = 0
  let fail = 0
  let consecutiveErr = 0

  for (const id of ids) {
    if (manifest[id] && fs.existsSync(path.join(OUT_DIR, manifest[id].file))) {
      ok++
      console.log(`SKIP ${id}`)
      continue
    }
    const [word, keys] = FIGURES[id]
    let saved = false
    try {
      const list = await search(word)
      consecutiveErr = 0
      const cands = list.filter((it) => relevant(it, keys))
      console.log(`  ${id}: ${list.length} results, ${cands.length} relevant`)
      for (const it of cands.slice(skip, skip + 5)) {
        const u = pickUrl(it)
        if (!u) continue
        try {
          const buf = await download(u)
          const file = `${id}.jpg`
          fs.writeFileSync(path.join(OUT_DIR, file), buf)
          manifest[id] = {
            file,
            bytes: buf.length,
            src: (it.fromURL || '').slice(0, 160),
            word,
          }
          fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
          console.log(`OK   ${id}  ${(buf.length / 1024).toFixed(0)}KB`)
          saved = true
          break
        } catch { /* next */ }
      }
    } catch (e) {
      consecutiveErr++
      console.log(`ERR  ${id}  ${e.message}`)
      // 触发风控就退避更久，并重新拿 cookie
      const backoff = Math.min(30000, 4000 * consecutiveErr)
      console.log(`     backoff ${(backoff / 1000).toFixed(0)}s`)
      await sleep(backoff)
      await warmCookie()
    }
    if (!saved) {
      fail++
      console.log(`FAIL ${id}`)
    }
    // 控制请求频率，避免反爬
    await sleep(1600 + Math.floor(Math.random() * 1400))
  }
  console.log(`\nDONE ok=${ok} fail=${fail} total=${ids.length}`)
}

main()
