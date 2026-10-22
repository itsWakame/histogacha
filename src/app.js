import { createWorkBuddyCloud } from '@tencent-ai/workbuddy-cloud-sdk'

/* ------------------------------------------------------------------
   云服务初始化（publicConfig 由云服务环境下发）
------------------------------------------------------------------ */
const cloud = createWorkBuddyCloud({
  // 云服务按 Origin 精确校验，必须与站点所在应用一致
  endpoint: 'https://daily-encounter.app.workbuddy.link',
  oauthRelayBaseUrl: 'https://www.workbuddy.cn/v2/as/genie-baas/oauth',
  publishableKey: 'wbpk_juhQ39hYjBKj7t4Ni7V3VY_RAbaxUV4TFytd8RyppKCz9d6Aw4guPAE',
})

/* ------------------------------------------------------------------
   小工具
------------------------------------------------------------------ */
const $ = (id) => document.getElementById(id)
const TZ = 'Asia/Shanghai'

const todayISO = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: TZ }).format(new Date())

const prettyDate = (iso) => {
  const d = new Date(iso + 'T12:00:00+08:00')
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: TZ, month: 'long', day: 'numeric', weekday: 'long',
  }).format(d)
}

const shortDate = (iso) => {
  const d = new Date(iso + 'T12:00:00+08:00')
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(d).replace(/\//g, '.')
}

let toastTimer
function toast(msg) {
  const el = $('toast')
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600)
}

/* ------------------------------------------------------------------
   状态
------------------------------------------------------------------ */
const TOKEN_KEY = 'hg_token'
const getToken = () => localStorage.getItem(TOKEN_KEY) || ''
const setToken = (t) => {
  if (t) localStorage.setItem(TOKEN_KEY, t)
  else localStorage.removeItem(TOKEN_KEY)
}

const state = {
  session: null,
  sessionType: null, // 'email' | 'user'
  account: null,     // 用户名登录：{ token, uid, uname, isTest }
  archive: [],
  viewDate: null,
  viewKey: null,
  drawing: false,
}

/* ------------------------------------------------------------------
   视图切换
------------------------------------------------------------------ */
function showLogin() {
  $('view-login').hidden = false
  $('view-app').hidden = true
  $('account').hidden = true
  document.body.dataset.state = 'login'
}

function showApp() {
  $('view-login').hidden = true
  $('view-app').hidden = false
  $('account').hidden = false
  document.body.dataset.state = 'app'
  const u = state.session?.user
  if (state.sessionType === 'user' && state.account) {
    $('who').textContent = state.account.uname + (state.account.isTest ? ' · 测试' : '')
  } else {
    $('who').textContent = u?.email || u?.name || '已登录'
  }
  $('today-label').textContent = prettyDate(todayISO())
}

/* ------------------------------------------------------------------
   登录：邮箱验证码
------------------------------------------------------------------ */
let pendingOtp = null
let sendCooldown = 0

function setLoginMsg(msg, ok = false) {
  const el = $('login-msg')
  el.textContent = msg || ''
  el.classList.toggle('ok', !!ok)
}

async function sendCode() {
  const email = $('email').value.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setLoginMsg('请输入正确的邮箱地址')
    return
  }
  const btn = $('send-code')
  btn.disabled = true
  setLoginMsg('正在发送…')
  const sent = await cloud.auth.sendOtp({ email })
  if (sent.error) {
    setLoginMsg(sent.error.message || '验证码发送失败，请稍后再试')
    btn.disabled = false
    return
  }
  pendingOtp = {
    email,
    verificationId: sent.data.verificationId,
    isExistingUser: sent.data.isExistingUser,
  }
  $('code-field').hidden = false
  $('submit-code').hidden = false
  $('code').focus()
  setLoginMsg('验证码已发出，请查收邮箱（含垃圾邮件箱）', true)

  sendCooldown = 60
  const tick = () => {
    if (sendCooldown <= 0) {
      btn.disabled = false
      btn.textContent = '重新获取'
      return
    }
    btn.textContent = `重新获取 (${sendCooldown}s)`
    sendCooldown -= 1
    setTimeout(tick, 1000)
  }
  tick()
}

async function submitCode(e) {
  e.preventDefault()
  const code = $('code').value.replace(/\D/g, '')
  if (!pendingOtp) { setLoginMsg('请先获取验证码'); return }
  if (code.length < 4) { setLoginMsg('请输入收到的验证码'); return }

  const btn = $('submit-code')
  btn.disabled = true
  setLoginMsg('正在验证…')
  const done = await cloud.auth.verifyOtp({
    email: pendingOtp.email,
    verificationId: pendingOtp.verificationId,
    isExistingUser: pendingOtp.isExistingUser,
    token: code,
  })
  btn.disabled = false
  if (done.error) {
    setLoginMsg(done.error.message || '验证码不正确')
    return
  }
  pendingOtp = null
  setLoginMsg('')
  await enterApp()
}

/* ------------------------------------------------------------------
   进入应用
------------------------------------------------------------------ */
async function enterApp() {
  const { data: session } = await cloud.auth.getSession()
  if (!session) { showLogin(); return }
  state.session = session
  state.sessionType = 'email'
  state.account = null
  showApp()
  await loadArchive()
}

// 用户名 + 密码登录（token 持久化在 localStorage）
async function enterUserApp(token, info) {
  let acct = info
  if (!acct) {
    const { data } = await cloud.database.rpc('me', { p_token: token })
    const row = Array.isArray(data) ? data[0] : data
    if (!row || !row.ok) return false
    acct = { uid: row.uid, uname: row.uname, isTest: !!row.is_test }
  }
  state.session = null
  state.sessionType = 'user'
  state.account = { token, ...acct }
  showApp()
  await loadArchive()
  return true
}

async function loadArchive() {
  let data, error
  if (state.sessionType === 'user' && state.account) {
    const fn = state.account.isTest ? 'archive_test' : 'my_archive'
    ;({ data, error } = await cloud.database.rpc(fn, { p_token: state.account.token }))
  } else {
    ;({ data, error } = await cloud.database.rpc('my_archive'))
  }
  if (error) {
    handleError(error)
    return
  }
  state.archive = Array.isArray(data) ? data : []
  renderArchive()
  const today = todayISO()
  const isTest = state.sessionType === 'user' && state.account?.isTest
  // 试验账号不限次数，不自动锁定/重置今日卡片
  const todayRow = isTest
    ? null
    : state.archive.find((r) => String(r.h_date).slice(0, 10) === today)
  if (todayRow) {
    renderCard(todayRow, { animate: false })
    setDrawnState()
  } else if (!isTest || !state.viewKey) {
    // 试验模式下若正在展示某张卡，不要重置它
    setWaitingState()
  }
}

function clearUserSession() {
  setToken('')
  state.account = null
  state.sessionType = null
}

function handleError(error) {
  const msg = String(error?.message || error || '')
  if (msg.includes('AUTH_REQUIRED') || error?.code === '42501' || error?.code === 'PGRST301') {
    if (state.sessionType === 'user') clearUserSession()
    else cloud.auth.signOut().catch(() => {})
    showLogin()
    return
  }
  toast('出错了：' + (error?.message || '请稍后重试'))
}

/* ------------------------------------------------------------------
   抽卡
------------------------------------------------------------------ */
function setWaitingState() {
  $('draw-btn').disabled = false
  $('draw-text').textContent = '嘟一下'
  $('stage-status').textContent =
    state.sessionType === 'user' && state.account?.isTest
      ? '试验模式 · 可重复抽取'
      : '今日尚未抽取'
  $('dossier-empty').hidden = false
  $('dossier-body').hidden = true
  $('card').classList.remove('flipped')
}

function setDrawnState() {
  $('draw-btn').disabled = true
  $('draw-text').textContent = '今日已相遇'
  $('stage-status').textContent = '明天再来'
}

const SHUFFLE_WORDS = [
  '佛罗伦萨 · 1504', '伦敦 · 1666', '巴黎 · 1793', '维也纳 · 1824',
  '罗马 · 64', '阿姆斯特丹 · 1642', '新泽西 · 1879', '奥尔良 · 1429',
]

async function draw() {
  if (state.drawing) return
  state.drawing = true

  const card = $('card')
  card.classList.add('drawing')
  $('draw-btn').disabled = true
  $('draw-text').textContent = '抽取中'
  $('stage-status').textContent = '正在抽取…'

  const line = $('shuffle-line')
  let i = 0
  line.textContent = SHUFFLE_WORDS[0]
  const spin = setInterval(() => {
    i = (i + 1) % SHUFFLE_WORDS.length
    line.textContent = SHUFFLE_WORDS[i]
  }, 240)

  const started = Date.now()
  let result
  if (state.sessionType === 'user' && state.account) {
    const fn = state.account.isTest ? 'draw_test' : 'draw_today'
    result = await cloud.database.rpc(fn, { p_token: state.account.token })
  } else {
    result = await cloud.database.rpc('draw_today')
  }
  const { data, error } = result

  const wait = Math.max(0, 1500 - (Date.now() - started))
  await new Promise((r) => setTimeout(r, wait))
  clearInterval(spin)
  card.classList.remove('drawing')

  if (error) {
    state.drawing = false
    $('draw-btn').disabled = false
    $('draw-text').textContent = '嘟一下'
    $('stage-status').textContent = ''
    handleError(error)
    return
  }

  const row = Array.isArray(data) ? data[0] : data
  if (!row) {
    state.drawing = false
    $('draw-btn').disabled = false
    toast('抽取失败，请稍后再试')
    return
  }

  renderCard(row, { animate: true })
  if (state.sessionType === 'user' && state.account?.isTest) {
    // 试验模式：可立即再次抽取
    $('draw-btn').disabled = false
    $('draw-text').textContent = '再嘟一下'
    $('stage-status').textContent = '试验模式 · 可重复抽取'
  } else {
    setDrawnState()
  }
  state.drawing = false

  await loadArchive()

  if (window.matchMedia('(max-width: 940px)').matches) {
    setTimeout(() => $('dossier').scrollIntoView({ behavior: 'smooth', block: 'start' }), 620)
  }
}

/* ------------------------------------------------------------------
   渲染
------------------------------------------------------------------ */
// 关系注解由数据库随人物一起下发，一人一签，不再按关系名共用
function bondNoteFor(note, name) {
  return String(note || '').trim() || `你与${name || '他'}的相遇，就发生在今天。`
}

// 数据库里存的是站点内相对路径
const resolveImage = (p) => {
  const s = String(p || '').trim()
  if (!s) return ''
  if (/^https?:\/\//i.test(s)) return s
  return new URL(s, location.origin + location.pathname.replace(/[^/]*$/, '')).href
}

const fields = (row) => {
  const f = {
    name: row.fig_name || row.h_name || '',
    nameAlt: row.fig_name_alt || row.h_name_alt || '',
    years: row.fig_years || row.h_years || '',
    era: row.fig_era || row.h_era || '',
    region: row.fig_region || row.h_region || '',
    role: row.fig_role || row.h_role || '',
    tags: row.fig_tags || row.h_tags || [],
    bio: row.fig_bio || row.h_bio || '',
    relation: row.fig_relation || row.h_relation || '',
    note: row.fig_note || row.h_note || '',
    image: resolveImage(row.fig_image || row.h_image || ''),
    label: row.got_match_label ?? row.h_label ?? '',
    kind: row.got_match_kind ?? row.h_kind ?? '',
    offset: row.got_match_offset ?? row.h_offset ?? 0,
    date: String(row.got_date || row.h_date || '').slice(0, 10),
    isNew: !!row.is_new,
  }
  f.rowKey = f.date + ':' + String(row.fig_id ?? '')
  f.bondNote = bondNoteFor(f.note, f.name)
  f.relations = row.fig_relations || row.h_relations || []
  // 评级 / 判决层（rngdle 风格）：本命日最稀有，越近越稀有
  if (f.kind === 'random') {
    f.tier = 'mythic'
    f.verdict = '随机之遇 · WILD'
  } else if (f.kind === 'exact') {
    f.tier = 'mythic'
    f.verdict = '本命日 · DESTINED'
  } else if (f.offset <= 3) {
    f.tier = 'rare'
    f.verdict = `近邻 · ${f.offset} 天`
  } else {
    f.tier = 'common'
    f.verdict = `擦肩 · ${f.offset} 天`
  }
  return f
}


function renderCard(row, { animate = true } = {}) {
  const f = fields(row)
  const card = $('card')
  // 同一张卡已在正面（或正在翻开）时跳过，避免重复渲染导致卡片翻回又翻开
  if (state.viewKey === f.rowKey && (card.classList.contains('flipped') || card.dataset.flipPending === '1')) return
  state.viewKey = f.rowKey
  state.viewDate = f.date

  card.classList.remove('no-img', 'flipped')

  // 肖像
  const img = $('portrait')
  img.onerror = () => card.classList.add('no-img')
  img.onload = () => card.classList.remove('no-img')
  img.src = f.image || ''
  img.alt = f.name
  $('portrait-fallback').firstElementChild.textContent =
    (f.name || '?').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('')

  $('p-era').textContent = f.era || ''
  $('p-years').textContent = f.years || ''
  $('p-name').textContent = f.name
  $('p-alt').textContent = f.nameAlt || f.role || ''

  // 档案
  const isToday = f.date === todayISO()
  $('d-kicker').textContent = isToday ? 'TODAY · 今日相遇' : `ARCHIVE · ${shortDate(f.date)}`
  $('d-name').textContent = f.name
  $('d-alt').textContent = [f.nameAlt, f.years].filter(Boolean).join(' · ')

  $('d-relation').textContent = f.relation
  $('d-link').textContent =
    f.kind === 'random'
      ? '随机相遇'
      : f.kind === 'exact'
        ? `今日正是他的${f.label}`
        : `距此 ${f.offset} 天 · 他的${f.label}`
  $('d-role').textContent = f.role

  $('d-relation-text').textContent = f.relation || '—'

  // 评级徽章
  const v = $('d-verdict')
  v.textContent = f.verdict
  v.className = 'verdict verdict-' + f.tier

  // 候选关系（今日随机落定其一，高亮抽中项）
  const relBox = $('d-relations')
  relBox.innerHTML = ''
  ;(f.relations || []).forEach((r) => {
    const s = document.createElement('span')
    s.className = 'rel-cand' + (r === f.relation ? ' is-chosen' : '')
    s.textContent = r
    relBox.appendChild(s)
  })

  $('d-bond-note').textContent = f.bondNote || ''
  $('d-bio-text').textContent = f.bio || ''

  $('dossier-empty').hidden = true
  $('dossier-body').hidden = false
  $('dossier-body').style.animation = 'none'
  void $('dossier-body').offsetWidth
  $('dossier-body').style.animation = ''

  if (animate) {
    // 先标记“正在翻开”，防止后续渲染在 60ms 动画延迟窗口内误判并翻回
    card.dataset.flipPending = '1'
    setTimeout(() => {
      delete card.dataset.flipPending
      card.classList.add('flipped')
    }, 60)
  } else {
    card.classList.add('flipped')
  }

  document.querySelectorAll('.archive-list li').forEach((li) => {
    li.classList.toggle('current', li.dataset.date === f.date)
  })
}

function renderArchive() {
  const list = $('archive-list')
  list.innerHTML = ''
  const today = todayISO()

  state.archive.forEach((r) => {
    const f = fields(r)
    const li = document.createElement('li')
    li.dataset.date = f.date
    if (f.date === today) li.classList.add('current')
    li.style.animation = 'fadeUp .35s ease both'

    const thumb = document.createElement('div')
    thumb.className = 'a-thumb'
    if (f.image) {
      const im = document.createElement('img')
      im.src = f.image
      im.alt = ''
      im.loading = 'lazy'
      thumb.appendChild(im)
    }

    const main = document.createElement('div')
    main.className = 'a-main'
    const n = document.createElement('div')
    n.className = 'a-name'
    n.textContent = f.name
    const s = document.createElement('div')
    s.className = 'a-sub'
    s.textContent = f.relation + (f.role ? ' · ' + f.role : '')
    main.append(n, s)

    const d = document.createElement('div')
    d.className = 'a-date'
    d.textContent = shortDate(f.date)

    li.append(thumb, main, d)
    li.addEventListener('click', () => {
      renderCard(r, { animate: true })
      if (window.matchMedia('(max-width: 940px)').matches) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
    list.appendChild(li)
  })

  $('archive-count').textContent = state.archive.length ? `· ${state.archive.length} 次` : ''
  const mythic = state.archive.filter((r) => (r.got_match_kind ?? r.h_kind) === 'exact').length
  $('stats-line').textContent = state.archive.length
    ? `共 ${state.archive.length} 次相遇 · 本命日 ${mythic} 次`
    : ''
  $('archive-tip').textContent = state.archive.length
    ? '点任意一条，可以重读那天的相遇。'
    : '暂无记录，完成今日抽取后会出现第一条。'
}

/* ------------------------------------------------------------------
   分享
------------------------------------------------------------------ */
function buildShareText() {
  const f = fields(
    state.archive.find((r) => String(r.h_date).slice(0, 10) === state.viewDate) || {}
  )
  if (!f.name) return ''
  return [
    `【今日与你相遇】${shortDate(f.date)}`,
    `${f.name}（${f.years}）`,
    `今日关系：${f.relation}`,
    `相遇缘由：${
      f.kind === 'random'
        ? '随机相遇'
        : f.kind === 'exact'
          ? f.label
          : `距他的${f.label}还有 ${f.offset} 天`
    }`,
    '',
    f.bio,
  ].join('\n')
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast('已复制到剪贴板')
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    toast('已复制')
  }
}

/* ------------------------------------------------------------------
   事件绑定
------------------------------------------------------------------ */
$('send-code').addEventListener('click', sendCode)
$('login-form').addEventListener('submit', submitCode)
$('draw-btn').addEventListener('click', draw)

/* 登录方式切换：邮箱（注册/登录）/ 用户名（仅登录） */
function switchAuthTab(mode) {
  const isUser = mode === 'user'
  $('tab-otp').classList.toggle('is-active', !isUser)
  $('tab-user').classList.toggle('is-active', isUser)
  $('login-form').hidden = isUser
  $('user-form').hidden = !isUser
  setLoginMsg('')
}
$('tab-otp').addEventListener('click', () => switchAuthTab('otp'))
$('tab-user').addEventListener('click', () => switchAuthTab('user'))

$('user-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const username = $('username').value.trim()
  const password = $('password').value
  if (!username || !password) { setLoginMsg('请填写用户名和密码'); return }

  const btn = $('user-submit')
  btn.disabled = true
  setLoginMsg('正在登录…')
  const { data, error } = await cloud.database.rpc('login_user', { p_username: username, p_password: password })
  btn.disabled = false

  const row = Array.isArray(data) ? data[0] : data
  if (error || !row || !row.ok) {
    setLoginMsg(row?.msg || error?.message || '操作失败，请重试')
    return
  }
  setToken(row.token)
  setLoginMsg('')
  const ok = await enterUserApp(row.token, {
    uid: row.uid, uname: row.uname, isTest: !!row.is_test,
  })
  if (!ok) setLoginMsg('登录状态校验失败，请重试')
})

$('logout').addEventListener('click', async () => {
  if (state.sessionType === 'user' && state.account) {
    try { await cloud.database.rpc('logout_user', { p_token: state.account.token }) } catch { /* 忽略 */ }
    clearUserSession()
    state.archive = []
    showLogin()
    return
  }
  await cloud.auth.signOut()
  state.session = null
  state.archive = []
  showLogin()
})

$('copy-btn').addEventListener('click', () => {
  const t = buildShareText()
  if (!t) { toast('请先完成今日抽取'); return }
  copyText(t)
})

$('share-btn').addEventListener('click', async () => {
  const t = buildShareText()
  if (!t) { toast('请先完成今日抽取'); return }
  if (navigator.share) {
    try {
      await navigator.share({ title: '今日与你相遇', text: t, url: location.origin })
      return
    } catch { /* 用户取消就退回复制 */ }
  }
  copyText(t)
})

/* ------------------------------------------------------------------
   启动
------------------------------------------------------------------ */
;(async function boot() {
  // 先尝试恢复用户名密码的登录态
  const token = getToken()
  if (token) {
    try {
      if (await enterUserApp(token)) return
    } catch { /* token 失效，走邮箱会话 */ }
    setToken('')
  }
  try {
    const { data: session } = await cloud.auth.getSession()
    if (session) {
      await enterApp()
    } else {
      showLogin()
    }
  } catch (err) {
    showLogin()
    setLoginMsg('连接服务器失败，请刷新页面重试')
  }
})()
