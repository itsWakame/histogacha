// 主数据源：全部人物（含既有 1-50 的百科化重写 + 新增 51-100）
// 字段：id, name, name_alt, years, era, region, role, tags[],
//       bio（百科式简介）, relations[]（关系候选类型）, relNotes[]（与 relations 平行的关系小传）,
//       mds[]（MM-DD 纪念日期，生日/加冕/大事，绝不取忌日）,
//       dlabels[]（与 mds 平行的中文标注）, dkinds[]（birth|throne|event）, slug, image, story
export const FIGURES = [
  // ===================== 既有 1-50（百科化重写 + 增加关系候选） =====================
  {
    id: 1, name: '拿破仑·波拿巴', name_alt: 'Napoleon Bonaparte', years: '1769—1821',
    era: '18—19世纪', region: '法国', role: '皇帝 · 军事家', tags: ['帝王', '军事', '法国'],
    bio: '科西嘉出身的法国军事领袖与皇帝。他颁布的《拿破仑法典》奠定了现代大陆法系的基础，其远征与战略至今仍是军事研究的对象。',
    relations: ['狱友', '同乡兵'],
    relNotes: ['他在圣赫勒拿岛上过了六年，身边只有一个愿意听他说话的人——那个人是你。', '你和他同为科西嘉乡下人，进城后彼此是对方唯一敢说方言的对象。'],
    mds: ['08-15', '12-02'], dlabels: ['诞辰 · 1769年8月15日', '加冕 · 1804年12月2日'], dkinds: ['birth', 'throne'],
    slug: 'napoleon', image: 'assets/figures/napoleon.jpg', story: ''
  },
  {
    id: 2, name: '盖乌斯·尤利乌斯·凯撒', name_alt: 'Gaius Julius Caesar', years: '前100—前44',
    era: '古罗马', region: '罗马', role: '独裁官 · 将军', tags: ['帝王', '罗马', '军事'],
    bio: '罗马共和国末期的独裁官与统帅。他征服高卢、渡过卢比孔河，终结了共和制度；其历法改革延用了上千年。',
    relations: ['债主', '渡口船夫'],
    relNotes: ['他欠你的账越滚越大，从未还清；最后那笔利息，是整个共和国的价钱。', '他渡过卢比孔河那晚，船是你家那条，你蹲在岸边替他数人数。'],
    mds: ['07-12', '01-10'], dlabels: ['诞辰（传统说法） · 前100年7月12日', '渡卢比孔河 · 前49年1月10日'], dkinds: ['birth', 'event'],
    slug: 'caesar', image: 'assets/figures/caesar.jpg', story: ''
  },
  {
    id: 3, name: '亚历山大大帝', name_alt: 'Alexander the Great', years: '前356—前323',
    era: '古希腊', region: '马其顿', role: '国王 · 统帅', tags: ['帝王', '军事', '希腊'],
    bio: '马其顿国王，世界古代史上最年轻的征服者之一。他十年间横扫波斯、直抵印度河，把希腊文化传播到已知世界的尽头。',
    relations: ['随军史官', '马厩伙计'],
    relNotes: ['史书写下了他所有的胜利，却从不写举笔的人是谁。', '他的爱马布塞弗勒斯，喂料梳毛都是你，它只认你一个人。'],
    mds: ['07-20', '10-01'], dlabels: ['诞辰（传统说法） · 前356年7月20日', '高加米拉战役 · 前331年10月1日'], dkinds: ['birth', 'event'],
    slug: 'alexander', image: 'assets/figures/alexander.jpg', story: ''
  },
  {
    id: 4, name: '圣女贞德', name_alt: 'Joan of Arc', years: '1412—1431',
    era: '中世纪', region: '法国', role: '军事领袖', tags: ['军事', '法国', '宗教'],
    bio: '法国民族英雄，农家少女出身。她自称受神启，在英法百年战争中率军解奥尔良之围，后被俘殉难，后世封圣。',
    relations: ['旗手', '随营厨娘'],
    relNotes: ['她从不拔剑，于是那面白旗永远需要有人替她扛着。', '出征路上她吃不惯军粮，是你偷偷给她留的那罐汤。'],
    mds: ['01-06', '05-08'], dlabels: ['诞辰（传统说法） · 1412年1月6日', '解奥尔良之围 · 1429年5月8日'], dkinds: ['birth', 'event'],
    slug: 'joan', image: 'assets/figures/joan.jpg', story: ''
  },
  {
    id: 5, name: '伊丽莎白一世', name_alt: 'Elizabeth I', years: '1533—1603',
    era: '16世纪', region: '英格兰', role: '女王', tags: ['帝王', '英格兰', '黄金时代'],
    bio: '英格兰与爱尔兰女王，都铎王朝最后的君主。她在宗教分裂中度过动荡童年，在位期间迎来英格兰的文艺复兴与海上崛起。',
    relations: ['姑祖母', '闺中密友'],
    relNotes: ['她终身未嫁，把国家当成了孩子；你是家族里还常来串门的那一支。', '宫里人人争宠，唯独你敢在她面前说真话，于是成了她唯一的密友。'],
    mds: ['09-07', '01-14'], dlabels: ['诞辰 · 1533年9月7日', '加冕 · 1559年1月14日'], dkinds: ['birth', 'throne'],
    slug: 'elizabeth1', image: 'assets/figures/elizabeth1.jpg', story: ''
  },
  {
    id: 6, name: '路易十四', name_alt: 'Louis XIV', years: '1638—1715',
    era: '17世纪', region: '法国', role: '国王', tags: ['帝王', '法国', '专制'],
    bio: '法国波旁王朝国王，史称太阳王。他亲政五十余载，营建凡尔赛宫、强化中央集权，将王权与宫廷文化推向极致。',
    relations: ['御前账房', '镜厅园丁'],
    relNotes: ['他一生最不缺黄金，最缺的是一个敢对他说实话的账房。', '凡尔赛的镜厅是你亲手布置的，他每次路过都多看两眼。'],
    mds: ['09-05', '05-06'], dlabels: ['诞辰 · 1638年9月5日', '凡尔赛宫启用 · 1682年5月6日'], dkinds: ['birth', 'event'],
    slug: 'louis14', image: 'assets/figures/louis14.jpg', story: ''
  },
  {
    id: 7, name: '叶卡捷琳娜二世', name_alt: 'Catherine the Great', years: '1729—1796',
    era: '18世纪', region: '俄国', role: '女皇', tags: ['帝王', '俄国', '启蒙'],
    bio: '俄国女皇，德意志小公国出身。她通过宫廷政变登位，在位期间扩张领土、推行启蒙改革，被称为俄国黄金时代的代表。',
    relations: ['合作者', '冬宫管家'],
    relNotes: ['她靠一场政变登上王位，此后的每一步都有人替她商量。', '冬宫上下几百间房，钥匙串在你腰上，她笑称你是她的另一只手。'],
    mds: ['05-02', '06-18'], dlabels: ['诞辰 · 1729年5月2日', '政变即位 · 1762年6月18日'], dkinds: ['birth', 'throne'],
    slug: 'catherine2', image: 'assets/figures/catherine2.jpg', story: ''
  },
  {
    id: 8, name: '维多利亚女王', name_alt: 'Queen Victoria', years: '1819—1901',
    era: '19世纪', region: '英国', role: '女王', tags: ['帝王', '英国', '殖民'],
    bio: '英国汉诺威王朝女王，在位六十余年，见证了工业革命与日不落帝国的巅峰，其时代以她的名字命名。',
    relations: ['岳母', '寡居笔友'],
    relNotes: ['她撮合了整个欧洲的联姻，也因此成了半个欧洲的丈母娘。', '丈夫离世后，每晚给你写的信成了她唯一肯卸下威仪的时刻。'],
    mds: ['05-24', '06-20'], dlabels: ['诞辰 · 1819年5月24日', '即位 · 1837年6月20日'], dkinds: ['birth', 'throne'],
    slug: 'victoria', image: 'assets/figures/victoria.jpg', story: ''
  },
  {
    id: 9, name: '乔治·华盛顿', name_alt: 'George Washington', years: '1732—1799',
    era: '18世纪', region: '美国', role: '总统 · 将军', tags: ['政治家', '美国', '军事'],
    bio: '美国首任总统，独立战争大陆军总司令。他领导北美十三州赢得独立，两任之后主动归隐，确立了和平交权的先例。',
    relations: ['邻居', '制桶匠'],
    relNotes: ['他功成身退回到乡间，两扇门之间的往来从来没断过。', '他回乡后开了家蒸馏厂，第一只橡木桶是你替他箍的。'],
    mds: ['02-22', '04-30'], dlabels: ['诞辰 · 1732年2月22日', '就职 · 1789年4月30日'], dkinds: ['birth', 'event'],
    slug: 'washington', image: 'assets/figures/washington.jpg', story: ''
  },
  {
    id: 10, name: '亚伯拉罕·林肯', name_alt: 'Abraham Lincoln', years: '1809—1865',
    era: '19世纪', region: '美国', role: '总统', tags: ['政治家', '美国', '废奴'],
    bio: '美国第16任总统，出身边疆。他在内战中维护联邦、废除奴隶制，并以《葛底斯堡演说》重塑了美国的立国理念。',
    relations: ['辩护律师', '劈柴工友'],
    relNotes: ['你为一个将被处死的人做过辩护，他听完之后沉默了很久。', '他年轻时在伊利诺伊劈栅栏卖钱，木堆里总有你递过来的那根。'],
    mds: ['02-12', '01-01'], dlabels: ['诞辰 · 1809年2月12日', '《解放宣言》生效 · 1863年1月1日'], dkinds: ['birth', 'event'],
    slug: 'lincoln', image: 'assets/figures/lincoln.jpg', story: ''
  },
  {
    id: 11, name: '温斯顿·丘吉尔', name_alt: 'Winston Churchill', years: '1874—1965',
    era: '19—20世纪', region: '英国', role: '首相', tags: ['政治家', '英国', '二战'],
    bio: '英国首相，二战期间领导英国抵抗纳粹。他以雄辩演说鼓舞国民，战后获诺贝尔文学奖，是20世纪最具辨识度的政治家之一。',
    relations: ['房东', '战地记者'],
    relNotes: ['他在最坏的时候租下你的房子，也在这里收到过最好的消息。', '年轻时他当过战地记者，和你挤同一节火车厢，稿子你帮着抄。'],
    mds: ['11-30', '05-08'], dlabels: ['诞辰 · 1874年11月30日', '欧洲胜利日 · 1945年5月8日'], dkinds: ['birth', 'event'],
    slug: 'churchill', image: 'assets/figures/churchill.jpg', story: ''
  },
  {
    id: 12, name: '尼禄', name_alt: 'Nero', years: '37—68',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '暴君'],
    bio: '罗马皇帝，朱里亚·克劳狄王朝末代君主。他以残暴与挥霍著称，却也是个热衷赛车的表演者，最后在政变中亡命。',
    relations: ['乐评人', '御用替身'],
    relNotes: ['他写的歌当场被人嘘过，而这些评价他全都留了下来。', '他在舞台上从不让人靠近，唯独你替他挡过一次飞来的番茄。'],
    mds: ['12-15', '06-19'], dlabels: ['诞辰 · 37年12月15日', '罗马大火 · 64年6月19日'], dkinds: ['birth', 'event'],
    slug: 'nero', image: 'assets/figures/nero.jpg', story: ''
  },
  {
    id: 13, name: '哥白尼', name_alt: 'Nicolaus Copernicus', years: '1473—1543',
    era: '文艺复兴', region: '波兰', role: '天文学家', tags: ['科学家', '波兰', '天文'],
    bio: '波兰天文学家，日心说的提出者。他在《天体运行论》中颠覆了千年的地心观念，开启了科学革命。',
    relations: ['望远镜推销员', '主教座堂乐师'],
    relNotes: ['他把地球挪到了太阳旁边，卖了几百年也没卖出几本。', '他本职是教堂的教士兼乐师，管风琴旁边常站着旁听的你。'],
    mds: ['02-19', '05-24'], dlabels: ['诞辰 · 1473年2月19日', '《天体运行论》出版 · 1543年5月24日'], dkinds: ['birth', 'event'],
    slug: 'copernicus', image: 'assets/figures/copernicus.jpg', story: ''
  },
  {
    id: 14, name: '伽利略·伽利莱', name_alt: 'Galileo Galilei', years: '1564—1642',
    era: '文艺复兴', region: '意大利', role: '天文学家', tags: ['科学家', '意大利', '天文'],
    bio: '意大利天文学家与物理学家，望远镜天文观测的先驱。他支持日心说，以观测证据挑战教会权威，被视为近代科学之父。',
    relations: ['科学期刊主编', '观星搭档'],
    relNotes: ['他证明了地球在动，而刊出这件事的那本期刊，是你的。', '他每夜对着镜片数卫星，递咖啡、记时辰的那个人是你。'],
    mds: ['02-15', '01-07'], dlabels: ['诞辰 · 1564年2月15日', '发现木星卫星 · 1610年1月7日'], dkinds: ['birth', 'event'],
    slug: 'galileo', image: 'assets/figures/galileo.jpg', story: ''
  },
  {
    id: 15, name: '艾萨克·牛顿', name_alt: 'Isaac Newton', years: '1643—1727',
    era: '17—18世纪', region: '英国', role: '物理学家', tags: ['科学家', '英国', '物理'],
    bio: '英国物理学家、数学家，经典力学的奠基者。他的《自然哲学的数学原理》以万有引力与三大定律统一了天与地。',
    relations: ['望远镜推销员', '造币厂学徒'],
    relNotes: ['他磨了十年镜片才磨出一点弧度，只为看清那道土星环。', '晚年他主管皇家造币厂，熔金铸币的炉边常站着帮手的你。'],
    mds: ['12-25', '07-05'], dlabels: ['诞辰 · 1642年12月25日', '《原理》出版 · 1687年7月5日'], dkinds: ['birth', 'event'],
    slug: 'newton', image: 'assets/figures/newton.jpg', story: ''
  },
  {
    id: 16, name: '查尔斯·达尔文', name_alt: 'Charles Darwin', years: '1809—1882',
    era: '19世纪', region: '英国', role: '博物学家', tags: ['科学家', '英国', '生物'],
    bio: '英国博物学家，进化论的奠基者。他乘贝格尔号环球考察，以《物种起源》提出自然选择，重塑了人类对自身的认识。',
    relations: ['标本管理员', '随船博物学家'],
    relNotes: ['他收集的每一只雀嘴，最后都变成了关于人类的结论。', '贝格尔号启航那天，舱里那一箱标本的清单是你帮他核的。'],
    mds: ['02-12', '11-24'], dlabels: ['诞辰 · 1809年2月12日', '《物种起源》出版 · 1859年11月24日'], dkinds: ['birth', 'event'],
    slug: 'darwin', image: 'assets/figures/darwin.jpg', story: ''
  },
  {
    id: 17, name: '路易·巴斯德', name_alt: 'Louis Pasteur', years: '1822—1895',
    era: '19世纪', region: '法国', role: '微生物学家', tags: ['科学家', '法国', '医学'],
    bio: '法国微生物学家与化学家，巴氏杀菌与疫苗接种的先驱。他证明了微生物致病，奠定了现代免疫学与公共卫生。',
    relations: ['兽医助手', '葡萄酒师'],
    relNotes: ['他给牛羊做实验，也给自己接种疫苗——这是他实验室的第一条规矩。', '他帮酒农保住葡萄酒，去酒庄取样的马车里总坐着你。'],
    mds: ['12-27', '07-06'], dlabels: ['诞辰 · 1822年12月27日', '狂犬病疫苗 · 1885年7月6日'], dkinds: ['birth', 'event'],
    slug: 'pasteur', image: 'assets/figures/pasteur.jpg', story: ''
  },
  {
    id: 18, name: '尼古拉·特斯拉', name_alt: 'Nikola Tesla', years: '1856—1943',
    era: '19—20世纪', region: '美国', role: '电气工程师', tags: ['科学家', '美国', '电气'],
    bio: '塞尔维亚裔美籍发明家与电气工程师，交流电系统的奠基者。他在无线传输与电机领域拥有数百项专利。',
    relations: ['专利代理人', '旅馆房客'],
    relNotes: ['他点亮了大半个世界的电流，专利簿上写的却是别人的名字。', '他晚年住在旅馆，账单一半是你替他担保垫付的。'],
    mds: ['07-10', '05-16'], dlabels: ['诞辰 · 1856年7月10日', '西屋电灯博览会 · 1893年5月16日'], dkinds: ['birth', 'event'],
    slug: 'tesla', image: 'assets/figures/tesla.jpg', story: ''
  },
  {
    id: 19, name: '玛丽·居里', name_alt: 'Marie Curie', years: '1867—1934',
    era: '19—20世纪', region: '法国', role: '物理学家', tags: ['科学家', '波兰', '化学'],
    bio: '波兰裔法国物理学家与化学家，放射性研究的先驱。她是首位获诺贝尔奖的女性，也是唯一两获诺奖且分属两科的科学家。',
    relations: ['实验搭档', '矿场采样员'],
    relNotes: ['两次诺贝尔奖背后，站着一个长期被低估的合作者。', '她去矿上采沥青铀矿，陪她钻巷道、扛麻袋的是你。'],
    mds: ['11-07', '12-10'], dlabels: ['诞辰 · 1867年11月7日', '诺贝尔奖颁奖 · 1903年12月10日'], dkinds: ['birth', 'event'],
    slug: 'curie', image: 'assets/figures/curie.jpg', story: ''
  },
  {
    id: 20, name: '阿尔伯特·爱因斯坦', name_alt: 'Albert Einstein', years: '1879—1955',
    era: '19—20世纪', region: '美国', role: '物理学家', tags: ['科学家', '德国', '物理'],
    bio: '理论物理学家，相对论的创立者。他重新定义了时间、空间与引力，是现代物理学的象征性人物。',
    relations: ['同事', '小提琴搭档'],
    relNotes: ['相对论诞生在专利局的办公室里，同事们只当他是个爱讲笑话的人。', '他拉小提琴时总缺个能跟上的搭档，那个人是你。'],
    mds: ['03-14', '06-30'], dlabels: ['诞辰 · 1879年3月14日', '奇迹年 · 1905年6月30日'], dkinds: ['birth', 'event'],
    slug: 'einstein', image: 'assets/figures/einstein.jpg', story: ''
  },
  {
    id: 21, name: '艾伦·图灵', name_alt: 'Alan Turing', years: '1912—1954',
    era: '20世纪', region: '英国', role: '数学家', tags: ['科学家', '英国', '计算机'],
    bio: '英国数学家与逻辑学家，计算机科学与人工智能的奠基者。二战中他破译德军密码，战后提出图灵机与图灵测试。',
    relations: ['同事', '破译组炊事'],
    relNotes: ['他上班时总是安静地走路，同事们很久以后才明白他在算什么。', '布莱切利园里半夜加班的只有他和你，你负责把茶端进密室。'],
    mds: ['06-23', '12-12'], dlabels: ['诞辰 · 1912年6月23日', '论文发表 · 1936年12月12日'], dkinds: ['birth', 'event'],
    slug: 'turing', image: 'assets/figures/turing.jpg', story: ''
  },
  {
    id: 22, name: '阿达·洛芙莱斯', name_alt: 'Ada Lovelace', years: '1815—1852',
    era: '19世纪', region: '英国', role: '数学家', tags: ['科学家', '英国', '计算机'],
    bio: '英国数学家，被公认为史上第一位程序员。她为巴贝奇的分析机写下算法，预见了计算机超越纯计算的潜力。',
    relations: ['合伙投资人', '差分机描图员'],
    relNotes: ['巴贝奇的机器要有人替它写第一批程序——那个人就是你。', '分析机的图纸浩如烟海，描图描到手腕酸的那个人是你。'],
    mds: ['12-10', '08-01'], dlabels: ['诞辰 · 1815年12月10日', '注释出版 · 1843年8月1日'], dkinds: ['birth', 'event'],
    slug: 'ada', image: 'assets/figures/ada.jpg', story: ''
  },
  {
    id: 23, name: '罗莎琳德·富兰克林', name_alt: 'Rosalind Franklin', years: '1920—1958',
    era: '20世纪', region: '英国', role: '化学家', tags: ['科学家', '英国', '生物'],
    bio: '英国物理化学家，以X射线衍射揭示DNA结构的关键证据。她的51号照片为双螺旋模型提供了决定性支撑。',
    relations: ['同实验室的人', '暗房助手'],
    relNotes: ['那张著名的照片署了别人的名字，而拍照的人是你。', '暗房里显影定影总得有人守，半夜里陪她的是你。'],
    mds: ['07-25', '05-02'], dlabels: ['诞辰 · 1920年7月25日', '51号照片 · 1952年5月2日'], dkinds: ['birth', 'event'],
    slug: 'franklin', image: 'assets/figures/franklin.jpg', story: ''
  },
  {
    id: 24, name: '列奥纳多·达·芬奇', name_alt: 'Leonardo da Vinci', years: '1452—1519',
    era: '文艺复兴', region: '意大利', role: '画家 · 博学家', tags: ['画家', '意大利', '文艺复兴'],
    bio: '意大利文艺复兴的通才，画家、工程师、解剖学家于一身。《蒙娜丽莎》与《最后的晚餐》是他不朽的杰作。',
    relations: ['合租室友', '宫廷琴师'],
    relNotes: ['他住你对门，整夜不睡，画满了没人看懂的机器图纸。', '他还是个出色的 lyre 琴手，宫廷宴上和你合奏过不止一回。'],
    mds: ['04-15', '05-02'], dlabels: ['诞辰 · 1452年4月15日', '《蒙娜丽莎》完成 · 1519年5月2日'], dkinds: ['birth', 'event'],
    slug: 'leonardo', image: 'assets/figures/leonardo.jpg', story: ''
  },
  {
    id: 25, name: '米开朗基罗', name_alt: 'Michelangelo', years: '1475—1564',
    era: '文艺复兴', region: '意大利', role: '雕塑家 · 画家', tags: ['画家', '意大利', '文艺复兴'],
    bio: '意大利文艺复兴巨匠，雕塑、绘画、建筑兼擅。西斯廷天顶画与雕塑《大卫》定义了文艺复兴的艺术高度。',
    relations: ['房客', '采石场工友'],
    relNotes: ['他脾气坏到房东都受不了，却从没赶走过一个付了房租的人。', '他挑大理石极挑剔，采石场里跟他一起抡锤的是你。'],
    mds: ['03-06', '10-31'], dlabels: ['诞辰 · 1475年3月6日', '西斯廷揭幕 · 1512年10月31日'], dkinds: ['birth', 'event'],
    slug: 'michelangelo', image: 'assets/figures/michelangelo.jpg', story: ''
  },
  {
    id: 26, name: '卡拉瓦乔', name_alt: 'Caravaggio', years: '1571—1610',
    era: '文艺复兴', region: '意大利', role: '画家', tags: ['画家', '意大利', '巴洛克'],
    bio: '意大利巴洛克绘画的开创者，以强烈的明暗对比和写实的人物著称。他一生好斗，画作却深刻影响了欧洲画坛。',
    relations: ['模特', '决斗陪练'],
    relNotes: ['他画圣人的时候用的是酒馆里的小人物——你也给他做过模特。', '他动辄拔剑，街头上替他挡过刀、又陪他练过剑的是你。'],
    mds: ['10-29', '05-31'], dlabels: ['诞辰 · 1571年10月29日', '《圣马太蒙难》 · 1599年5月31日'], dkinds: ['birth', 'event'],
    slug: 'caravaggio', image: 'assets/figures/caravaggio.jpg', story: ''
  },
  {
    id: 27, name: '伦勃朗', name_alt: 'Rembrandt', years: '1606—1669',
    era: '17世纪', region: '荷兰', role: '画家', tags: ['画家', '荷兰', '黄金时代'],
    bio: '荷兰黄金时代最伟大的画家之一。他以深邃的光影与人物心理刻画闻名，自画像系列贯穿一生。',
    relations: ['债主', '画室伙计'],
    relNotes: ['他破产之后，是你替他垫的债；然后他把你画进了画面里。', '他画室里研墨、绷画布、管颜料的那个人，一直是你。'],
    mds: ['07-15', '11-14'], dlabels: ['诞辰 · 1606年7月15日', '阿姆斯特丹大审判 · 1665年11月14日'], dkinds: ['birth', 'event'],
    slug: 'rembrandt', image: 'assets/figures/rembrandt.jpg', story: ''
  },
  {
    id: 28, name: '文森特·梵高', name_alt: 'Vincent van Gogh', years: '1853—1890',
    era: '19世纪', region: '荷兰', role: '画家', tags: ['画家', '荷兰', '后印象派'],
    bio: '荷兰后印象派画家，生前寂寂无名。他以炽烈的色彩与笔触表达内心，死后成为现代艺术最具号召力的名字。',
    relations: ['房客', '颜料店掌柜'],
    relNotes: ['他付不起房租的那几个月，是你替他挡的房东。', '他总买最贵的铬黄，记账、赊账、退色的那本子攥在你手里。'],
    mds: ['03-30', '12-23'], dlabels: ['诞辰 · 1853年3月30日', '来到阿尔勒 · 1888年12月23日'], dkinds: ['birth', 'event'],
    slug: 'vangogh', image: 'assets/figures/vangogh.jpg', story: ''
  },
  {
    id:29, name: '克劳德·莫奈', name_alt: 'Claude Monet', years: '1840—1926',
    era: '19世纪', region: '法国', role: '画家', tags: ['画家', '法国', '印象派'],
    bio: '法国画家，印象派运动的命名者与核心人物。《日出·印象》催生了整个流派，他晚年沉迷于睡莲系列。',
    relations: ['邻居', '水上画舫'],
    relNotes: ['他在吉维尼的花园里种了一辈子睡莲，邻居都看惯了。', '他爱在船上写生，摇橹撑篙、替他稳住画板的那个船夫是你。'],
    mds: ['11-14', '08-05'], dlabels: ['诞辰 · 1840年11月14日', '《日出·印象》展出 · 1874年8月5日'], dkinds: ['birth', 'event'],
    slug: 'monet', image: 'assets/figures/monet.jpg', story: ''
  },
  {
    id: 30, name: '巴勃罗·毕加索', name_alt: 'Pablo Picasso', years: '1881—1973',
    era: '19—20世纪', region: '西班牙', role: '画家', tags: ['画家', '西班牙', '立体派'],
    bio: '西班牙画家与雕塑家，立体主义的共同创立者。他风格多变、产量惊人，是20世纪最具影响力的艺术家之一。',
    relations: ['牌搭子', '陶窑伙计'],
    relNotes: ['他把画画当成一局很长的棋，输了就拿对方的画当赌注。', '他迷上陶艺那年，陪他揉泥、转轮、守窑的那个人是你。'],
    mds: ['10-25', '06-01'], dlabels: ['诞辰 · 1881年10月25日', '《格尔尼卡》 · 1937年6月1日'], dkinds: ['birth', 'event'],
    slug: 'picasso', image: 'assets/figures/picasso.jpg', story: ''
  },
  {
    id: 31, name: '弗里达·卡罗', name_alt: 'Frida Kahlo', years: '1907—1954',
    era: '20世纪', region: '墨西哥', role: '画家', tags: ['画家', '墨西哥', '自画像'],
    bio: '墨西哥画家，以充满疼痛与身份思考的自画像闻名。她将个人苦难与民族符号结合，成为女性艺术的象征。',
    relations: ['病友', '画框师傅'],
    relNotes: ['她画了一百四十三个自己，谁也替不了她画那张脸。', '她长年卧病，陪床、扶她起身、替她绷画框的是你。'],
    mds: ['07-06', '09-13'], dlabels: ['诞辰 · 1907年7月6日', '与里维拉结婚 · 1929年9月13日'], dkinds: ['birth', 'event'],
    slug: 'kahlo', image: 'assets/figures/kahlo.jpg', story: ''
  },
  {
    id: 32, name: '沃尔夫冈·阿马德乌斯·莫扎特', name_alt: 'Wolfgang Amadeus Mozart', years: '1756—1791',
    era: '18世纪', region: '奥地利', role: '作曲家', tags: ['音乐家', '奥地利', '古典'],
    bio: '奥地利作曲家，古典主义音乐的巅峰人物。他幼年为神童，一生写下六百余部作品，旋律天赋空前绝后。',
    relations: ['乐团同人', '抄谱员'],
    relNotes: ['同行早就习惯了他的排练方式，和他永远差半拍。', '他写谱快得离谱，坐在旁边替他誊清分谱的那个人是你。'],
    mds: ['01-27', '10-02'], dlabels: ['诞辰 · 1756年1月27日', '《魔笛》首演 · 1791年10月2日'], dkinds: ['birth', 'event'],
    slug: 'mozart', image: 'assets/figures/mozart.jpg', story: ''
  },
  {
    id: 33, name: '路德维希·凡·贝多芬', name_alt: 'Ludwig van Beethoven', years: '1770—1827',
    era: '18—19世纪', region: '德国', role: '作曲家', tags: ['音乐家', '德国', '古典'],
    bio: '德国作曲家，连接古典与浪漫的桥梁。他在渐失听力后仍写出《第九交响曲》，以音乐宣告对命运的搏击。',
    relations: ['同屋租客', '调律师傅'],
    relNotes: ['他的耳聋越来越重，脾气越来越坏，房租却一次没欠过。', '他的钢琴走音他听不出来，每次都是你悄悄替他调好。'],
    mds: ['12-16', '05-07'], dlabels: ['诞辰 · 1770年12月16日', '《第九交响曲》首演 · 1824年5月7日'], dkinds: ['birth', 'event'],
    slug: 'beethoven', image: 'assets/figures/beethoven.jpg', story: ''
  },
  {
    id: 34, name: '弗雷迪·默丘里', name_alt: 'Freddie Mercury', years: '1946—1991',
    era: '20世纪', region: '英国', role: '歌手', tags: ['音乐家', '英国', '摇滚'],
    bio: '英国摇滚乐队皇后乐队的主唱，以华丽舞台与广阔音域著称。他是20世纪最具表现力的表演者之一。',
    relations: ['经纪人', '巡演司机'],
    relNotes: ['他的曲目单里，永远排着最后一首安可。', '他巡演从不管路线，握着方向盘把他送到下一场的是你。'],
    mds: ['09-05', '07-13'], dlabels: ['诞辰 · 1946年9月5日', 'Live Aid · 1985年7月13日'], dkinds: ['birth', 'event'],
    slug: 'freddie', image: 'assets/figures/freddie.jpg', story: ''
  },
  {
    id: 35, name: '威廉·莎士比亚', name_alt: 'William Shakespeare', years: '1564—1616',
    era: '16—17世纪', region: '英国', role: '剧作家', tags: ['文学家', '英国', '戏剧'],
    bio: '英国剧作家与诗人，被广泛视为英语文学最伟大的作家。他留下三十七部戏剧与大量十四行诗，塑造了无数经典形象。',
    relations: ['剧院同事', '戏服裁缝'],
    relNotes: ['他在剧院里既写剧本又上台演戏，还替贵族管账——你们是同事。', '环球剧场的戏服你一针一线缝，他谢幕时总朝你那厢点头。'],
    mds: ['04-23', '11-19'], dlabels: ['诞辰 · 1564年4月23日', '《第一对开本》出版 · 1623年11月19日'], dkinds: ['birth', 'event'],
    slug: 'shakespeare', image: 'assets/figures/shakespeare.jpg', story: ''
  },
  {
    id: 36, name: '简·奥斯汀', name_alt: 'Jane Austen', years: '1775—1817',
    era: '18—19世纪', region: '英国', role: '小说家', tags: ['文学家', '英国', '小说'],
    bio: '英国小说家，以《傲慢与偏见》等六部小说刻画乡绅阶层的婚恋与世相，以讽刺与细腻的心理描写著称。',
    relations: ['书友', '乡间舞伴'],
    relNotes: ['她一辈子没结婚，笔下的人物却全在谈恋爱。', '乡间舞会上她总坐边上看，陪她聊完一整场的是你。'],
    mds: ['12-16', '01-28'], dlabels: ['诞辰 · 1775年12月16日', '《傲慢与偏见》出版 · 1813年1月28日'], dkinds: ['birth', 'event'],
    slug: 'austen', image: 'assets/figures/austen.jpg', story: ''
  },
  {
    id: 37, name: '埃德加·爱伦·坡', name_alt: 'Edgar Allan Poe', years: '1809—1849',
    era: '19世纪', region: '美国', role: '诗人 · 小说家', tags: ['文学家', '美国', '哥特'],
    bio: '美国诗人、小说家与评论家，推理小说与哥特风格的先驱。《乌鸦》与《莫格街凶杀案》影响深远。',
    relations: ['笔友', '杂志校对'],
    relNotes: ['他从巴尔的摩写信到欧洲，收信的人没有一个睡得着觉。', '他办的刊物你做校对，红笔圈出的错字比他还狠。'],
    mds: ['01-19', '01-26'], dlabels: ['诞辰 · 1809年1月19日', '《乌鸦》发表 · 1845年1月26日'], dkinds: ['birth', 'event'],
    slug: 'poe', image: 'assets/figures/poe.jpg', story: ''
  },
  {
    id: 38, name: '查尔斯·狄更斯', name_alt: 'Charles Dickens', years: '1812—1870',
    era: '19世纪', region: '英国', role: '小说家', tags: ['文学家', '英国', '小说'],
    bio: '英国维多利亚时代最伟大的小说家。他以《雾都孤儿》《双城记》等揭露社会不公，连载形式让小说走近大众。',
    relations: ['合租室友', '报社抄写'],
    relNotes: ['他白天写社论晚上写小说，稿酬从来没乱花过。', '他早年贫苦，在报社当学徒抄写，同铺的工友是你。'],
    mds: ['02-07', '12-19'], dlabels: ['诞辰 · 1812年2月7日', '《圣诞颂歌》出版 · 1843年12月19日'], dkinds: ['birth', 'event'],
    slug: 'dickens', image: 'assets/figures/dickens.jpg', story: ''
  },
  {
    id: 39, name: '维克多·雨果', name_alt: 'Victor Hugo', years: '1802—1885',
    era: '19世纪', region: '法国', role: '作家', tags: ['文学家', '法国', '小说'],
    bio: '法国浪漫主义文学的领袖，《巴黎圣母院》《悲惨世界》的作者。他也是一位积极介入公共生活的政治家。',
    relations: ['笔友', '流亡船工'],
    relNotes: ['流亡十九年，他把《悲惨世界》写完了，回国那天的船上全是人。', '他流亡到盖纳西岛，摆渡接信、运书箱的那条船归你摇。'],
    mds: ['02-22', '12-11'], dlabels: ['诞辰 · 1802年2月22日', '结束流亡返国 · 1870年12月11日'], dkinds: ['birth', 'event'],
    slug: 'hugo', image: 'assets/figures/hugo.jpg', story: ''
  },
  {
    id: 40, name: '奥斯卡·王尔德', name_alt: 'Oscar Wilde', years: '1854—1900',
    era: '19世纪', region: '爱尔兰', role: '作家', tags: ['文学家', '爱尔兰', '喜剧'],
    bio: '爱尔兰作家与剧作家，以机智的警句与《道林·格雷的画像》《不可儿戏》闻名，是唯美主义的代表。',
    relations: ['饭友', '美学沙龙主'],
    relNotes: ['他机智到把法庭变成舞台，却把最好的位置留给了饭友。', '他在巴黎办美学沙龙，端茶、引座、替他挡掉无趣访客的是你。'],
    mds: ['10-16', '04-05'], dlabels: ['诞辰 · 1854年10月16日', '《道林·格雷》出版 · 1890年4月5日'], dkinds: ['birth', 'event'],
    slug: 'wilde', image: 'assets/figures/wilde.jpg', story: ''
  },
  {
    id: 41, name: '陀思妥耶夫斯基', name_alt: 'Fyodor Dostoevsky', years: '1821—1881',
    era: '19世纪', region: '俄国', role: '小说家', tags: ['文学家', '俄国', '小说'],
    bio: '俄国小说家，存在主义思想的先驱。《罪与罚》《卡拉马佐夫兄弟》以深邃的心理与信仰之问震撼世界。',
    relations: ['牌搭子', '西伯利亚难友'],
    relNotes: ['他赌到身无分文，只能靠写作还债；你陪他熬过那些债主上门的日子。', '他被流放西伯利亚服苦役，同棚里替他挡过鞭子的是你。'],
    mds: ['11-11', '01-01'], dlabels: ['诞辰 · 1821年11月11日', '《罪与罚》出版 · 1866年1月1日'], dkinds: ['birth', 'event'],
    slug: 'dostoevsky', image: 'assets/figures/dostoevsky.jpg', story: ''
  },
  {
    id: 42, name: '列夫·托尔斯泰', name_alt: 'Leo Tolstoy', years: '1828—1910',
    era: '19—20世纪', region: '俄国', role: '小说家', tags: ['文学家', '俄国', '小说'],
    bio: '俄国小说家，《战争与和平》《安娜·卡列尼娜》的作者。他晚年寻求简朴与信仰，思想影响深远。',
    relations: ['邻居', '庄园先生'],
    relNotes: ['七十岁那年他离家出走，走了几百公里死在火车站；邻居是最后一批见到他的人。', '他在亚斯纳亚庄园办学教书，替他管学堂、哄孩子的邻居是你。'],
    mds: ['09-09', '01-01'], dlabels: ['诞辰 · 1828年9月9日', '《战争与和平》完成 · 1869年'], dkinds: ['birth', 'event'],
    slug: 'tolstoy', image: 'assets/figures/tolstoy.jpg', story: ''
  },
  {
    id: 43, name: '艾米莉·狄金森', name_alt: 'Emily Dickinson', years: '1830—1886',
    era: '19世纪', region: '美国', role: '诗人', tags: ['文学家', '美国', '诗歌'],
    bio: '美国诗人，生前几乎未发表。她留下近一千八百首意象奇崛、凝练深刻的诗，死后才被公认为大师。',
    relations: ['笔友', '花园邻居'],
    relNotes: ['她一生只发表过十来首诗，其余的一千八百首缝在饼干盒里寄给你。', '她几乎不出门，隔篱递诗稿、送鲜花的那个园邻是你。'],
    mds: ['12-10', '11-01'], dlabels: ['诞辰 · 1830年12月10日', '诗集出版 · 1890年11月'], dkinds: ['birth', 'event'],
    slug: 'dickinson', image: 'assets/figures/dickinson.jpg', story: ''
  },
  {
    id: 44, name: '弗吉尼亚·伍尔夫', name_alt: 'Virginia Woollf', years: '1882—1941',
    era: '19—20世纪', region: '英国', role: '小说家', tags: ['文学家', '英国', '现代派'],
    bio: '英国小说家，意识流文学的代表。《达洛维夫人》《到灯塔去》以内在时间重构叙事，是现代主义的标志。',
    relations: ['邻居', '刊物编辑'],
    relNotes: ['她写句子像水流，邻居隔着墙只听得见笔尖的声音。', '她和丈夫办霍加斯出版社，经手她书稿的编辑是你。'],
    mds: ['01-25', '05-14'], dlabels: ['诞辰 · 1882年1月25日', '《达洛维夫人》出版 · 1925年5月14日'], dkinds: ['birth', 'event'],
    slug: 'woolf', image: 'assets/figures/woolf.jpg', story: ''
  },
  {
    id: 45, name: '欧内斯特·海明威', name_alt: 'Ernest Hemingway', years: '1899—1961',
    era: '20世纪', region: '美国', role: '小说家', tags: ['文学家', '美国', '小说'],
    bio: '美国小说家，以简洁硬朗的文风著称。他亲历两次世界大战，作品《老人与海》为他赢得诺贝尔文学奖。',
    relations: ['球友', '报社交稿人'],
    relNotes: ['他站着写，鞋底磨穿；最好的几段是在钓上大鱼的那天写下的。', '他在《星报》当记者，骑着车把稿子送进编辑部的同伴是你。'],
    mds: ['07-21', '09-01'], dlabels: ['诞辰 · 1899年7月21日', '《老人与海》出版 · 1952年9月1日'], dkinds: ['birth', 'event'],
    slug: 'hemingway', image: 'assets/figures/hemingway.jpg', story: ''
  },
  {
    id: 46, name: '卡利古拉', name_alt: 'Caligula', years: '12—41',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '暴君'],
    bio: '罗马皇帝，朱里亚·克劳狄王朝第三位君主。他早年受军爱戴，后期以荒诞与残暴著称，最终被近卫军刺杀。',
    relations: ['军营同袍', '马厩小厮'],
    relNotes: ['他爱和自己的士兵一起行军，你也是队伍里的一个。', '他最爱的那匹马.incitatus 由你喂料，他甚至在饭桌上替它留座。'],
    mds: ['08-31', '03-16'], dlabels: ['诞辰 · 12年8月31日', '即位 · 37年3月16日'], dkinds: ['birth', 'throne'],
    slug: 'caligula', image: 'assets/figures/caligula.jpg', story: ''
  },
  {
    id: 47, name: '伊丽莎白·巴托里', name_alt: 'Elizabeth Báthory', years: '1560—1614',
    era: '16—17世纪', region: '匈牙利', role: '贵族', tags: ['贵族', '匈牙利', '历史'],
    bio: '匈牙利贵族女性，欧洲历史上最著名的女贵族之一。她因涉嫌残酷虐待女仆而闻名后世，形象长久被传说与戏剧化。',
    relations: ['邻居', '城堡女仆'],
    relNotes: ['城堡里发生了什么，邻居都不清楚；他们只记得那扇不该打开的门。', '你在城堡里替她管过一阵女仆，后来是你第一个报了官。'],
    mds: ['08-14', '12-29'], dlabels: ['诞辰 · 1560年8月14日', '受审 · 1610年12月29日'], dkinds: ['birth', 'event'],
    slug: 'bathory', image: 'assets/figures/bathory.jpg', story: ''
  },
  {
    id: 48, name: '马克西米连·罗伯斯庇尔', name_alt: 'Maximilien Robespierre', years: '1758—1794',
    era: '18世纪', region: '法国', role: '革命家', tags: ['政治家', '法国', '革命'],
    bio: '法国大革命的核心人物，雅各宾派领袖。他推动共和、主导恐怖统治，最终在热月政变中被送上断头台。',
    relations: ['辩护律师', '雅各宾书记'],
    relNotes: ['你替断头台辩护过，最后那台机器送走的是他自己。', '他在雅各宾俱乐部口若悬河，替他记发言、收发传单的是你。'],
    mds: ['05-06', '09-21'], dlabels: ['诞辰 · 1758年5月6日', '国民公会成立 · 1792年9月21日'], dkinds: ['birth', 'event'],
    slug: 'robespierre', image: 'assets/figures/robespierre.jpg', story: ''
  },
  {
    id: 49, name: '切萨雷·波吉亚', name_alt: 'Cesare Borgia', years: '1475—1507',
    era: '文艺复兴', region: '意大利', role: '枢机 · 统帅', tags: ['政治家', '意大利', '文艺复兴'],
    bio: '意大利文艺复兴时期的枢机主教与军事领袖，教皇亚历山大六世之子。他以权谋统一罗马涅，是马基雅维利笔下的理想君主原型。',
    relations: ['合租室友', '枢机随从'],
    relNotes: ['他解决政敌的方式是毒药，而你就睡在隔壁。', '他出入教廷的日程你替他打理，信使往来都经你的手。'],
    mds: ['09-13', '07-31'], dlabels: ['诞辰 · 1475年9月13日', '当选枢机 · 1500年7月31日'], dkinds: ['birth', 'event'],
    slug: 'borgia', image: 'assets/figures/borgia.jpg', story: ''
  },
  {
    id: 50, name: '约瑟夫·梅里克', name_alt: 'Joseph Merrick', years: '1862—1890',
    era: '19世纪', region: '英国', role: '演出者', tags: ['历史', '英国', '医学'],
    bio: '英国人，因严重的身体畸形而在马戏团展出，史称象人。后得到医生收容与照料，其遭遇唤起了对尊严的关注。',
    relations: ['医生助理', '马戏售票'],
    relNotes: ['医生收留了他，也把他写进了自己的书里。', '他在马戏团被围观的年代，替他守售票亭、挡开起哄的人是你的。'],
    mds: ['08-05', '12-30'], dlabels: ['诞辰 · 1862年8月5日', '离开马戏团 · 1885年12月30日'], dkinds: ['birth', 'event'],
    slug: 'merrick', image: 'assets/figures/merrick.jpg', story: ''
  },

  // ===================== 新增 51-100 =====================
  {
    id: 51, name: '奥古斯都', name_alt: 'Augustus', years: '前63—14',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马帝国的开国君主，屋大维的尊号。他在内战废墟上确立元首制，开创近两百年的罗马和平，并改革行政与军事。',
    relations: ['御前管房', '罗马房东'],
    relNotes: ['他清查户口的那年，你是被登记在帕拉蒂尼山最前面的一户。', '帕拉蒂尼山上的客房归你管，客人从没断过，连他自己也来蹭饭。'],
    mds: ['09-23', '09-02'], dlabels: ['诞辰 · 前63年9月23日', '亚克兴海战 · 前31年9月2日'], dkinds: ['birth', 'event'],
    slug: 'augustus', image: 'assets/figures/augustus.jpg', story: ''
  },
  {
    id: 52, name: '提比略', name_alt: 'Tiberius', years: '前42—37',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马第二任皇帝，能干的统帅却多疑孤僻。晚年退隐卡普里岛，将政务委于近卫军长官，史评毁誉参半。',
    relations: ['卡普里岛船夫', '近卫军书记'],
    relNotes: ['他退隐到岛上那年，渡船的桨只有你划得动。', '宫里人人自危，唯独你敢替他抄写那些不能见光的密报。'],
    mds: ['11-16', '09-18'], dlabels: ['诞辰 · 前42年11月16日', '继位 · 14年9月18日'], dkinds: ['birth', 'throne'],
    slug: 'tiberius', image: 'assets/figures/tiberius.jpg', story: ''
  },
  {
    id: 53, name: '克劳狄乌斯', name_alt: 'Claudius', years: '前10—54',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '学者'],
    bio: '罗马皇帝，因体弱曾被家族轻视，却意外登基。他勤于政务、主持征服不列颠，还留下多部失传的历史著作。',
    relations: ['不列颠向导', '史官校对'],
    relNotes: ['出兵不列颠时，是你替他在迷雾里指的路。', '他写的历史没人敢校订，除了你——你替他抹掉了几处尴尬。'],
    mds: ['08-01', '10-01'], dlabels: ['诞辰 · 前10年8月1日', '征服不列颠 · 43年'], dkinds: ['birth', 'event'],
    slug: 'claudius', image: 'assets/figures/claudius.jpg', story: ''
  },
  {
    id: 54, name: '加尔巴', name_alt: 'Galba', years: '前3—69',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，尼禄死后于高龄起兵称帝，开启了动荡的四帝之年，统治仅数月便遇弑。',
    relations: ['起兵粮官', '老兵酒友'],
    relNotes: ['他起兵那年，军粮的账本就在你手里，多一斗少一斗你说了算。', '你和他一样，是军营里熬到白头的老伙计，酒壶常对半分。'],
    mds: ['12-24', '06-09'], dlabels: ['诞辰 · 前3年12月24日', '称帝 · 68年6月9日'], dkinds: ['birth', 'event'],
    slug: 'galba', image: 'assets/figures/galba.jpg', story: ''
  },
  {
    id: 55, name: '奥托', name_alt: 'Otho', years: '32—69',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，四帝之年中的第二位。原为近卫军长官，称帝后在与维特里乌斯的争夺中兵败自尽。',
    relations: ['近卫军同袍', '镜前侍从'],
    relNotes: ['你们同睡一间营房，醒来时一个竟成了皇帝。', '他爱照镜子，镜前的灰尘与烛台，归你天天擦。'],
    mds: ['04-28', '01-15'], dlabels: ['诞辰 · 32年4月28日', '称帝 · 69年1月15日'], dkinds: ['birth', 'event'],
    slug: 'otho', image: 'assets/figures/otho.jpg', story: ''
  },
  {
    id: 56, name: '维特里乌斯', name_alt: 'Vitellius', years: '15—69',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，四帝之年中的第三位。以奢靡与贪食著称，短暂统治后被韦斯巴芗的军队击败并处死。',
    relations: ['宴席采买', '御厨下手'],
    relNotes: ['他一日三餐的排场，都是你一手张罗采买。', '御厨里你刀工最好，却最不爱声张，切好的鹅肝总先送他。'],
    mds: ['09-24', '04-19'], dlabels: ['诞辰 · 15年9月24日', '称帝 · 69年4月19日'], dkinds: ['birth', 'event'],
    slug: 'vitellius', image: 'assets/figures/vitellius.jpg', story: ''
  },
  {
    id: 57, name: '韦斯巴芗', name_alt: 'Vespasian', years: '9—79',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，弗拉维王朝开创者。他结束内乱、兴建斗兽场前身，并以务实节俭的作风扭转了帝国财政。',
    relations: ['斗兽场监工', '税吏旧识'],
    relNotes: ['他兴建斗兽场，工地的钥匙你手里攥着一把。', '早年收税那些年，你和他拍过桌子也喝过酒，谁也不欠谁。'],
    mds: ['11-17', '07-01'], dlabels: ['诞辰 · 9年11月17日', '称帝 · 69年7月1日'], dkinds: ['birth', 'event'],
    slug: 'vespasian', image: 'assets/figures/vespasian.jpg', story: ''
  },
  {
    id: 58, name: '提图斯', name_alt: 'Titus', years: '39—81',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，韦斯巴芗之子。在位仅两年，却以镇压犹太起义、完成斗兽场兴建而留名，深得民心。',
    relations: ['围城副将', '工坊匠首'],
    relNotes: ['耶路撒冷城下，你是他最信得过的副手，传令的快马你骑最多。', '斗兽场完工那天，匠人们举你为头，说没有你搬不动那块石。'],
    mds: ['12-30', '06-23'], dlabels: ['诞辰 · 39年12月30日', '继位 · 79年6月23日'], dkinds: ['birth', 'throne'],
    slug: 'titus', image: 'assets/figures/titus.jpg', story: ''
  },
  {
    id: 59, name: '图密善', name_alt: 'Domitian', years: '51—96',
    era: '古罗马', region: '罗马', role: '皇帝', tags: ['帝王', '罗马', '军事'],
    bio: '罗马皇帝，弗拉维王朝末代君主。他加强集权与边境防御，后期统治趋向猜忌，最终遇刺身亡。',
    relations: ['禁卫随从', '边境信使'],
    relNotes: ['他疑心重，只肯让你近身递信，旁人一概挡在门外。', '边报往来，你是跑得最勤的那个，靴底磨穿两双。'],
    mds: ['10-24', '09-14'], dlabels: ['诞辰 · 51年10月24日', '继位 · 81年9月14日'], dkinds: ['birth', 'throne'],
    slug: 'domitian', image: 'assets/figures/domitian.jpg', story: ''
  },
  {
    id: 60, name: '查理曼', name_alt: 'Charlemagne', years: '742—814',
    era: '中世纪', region: '法兰克', role: '皇帝', tags: ['帝王', '中世纪', '军事'],
    bio: '法兰克国王，800年加冕为罗马人的皇帝。他统一西欧大片疆土、推动加洛林文艺复兴，被视为神圣罗马帝国的奠基者。',
    relations: ['宫廷乐师', '账房先生'],
    relNotes: ['他爱在宴上听你奏琴，曲子由你定，错一个音他也不恼。', '帝国太大，他的账只有你算得清，金币入库先过你的手。'],
    mds: ['04-02', '12-25'], dlabels: ['诞辰 · 742年4月2日', '加冕皇帝 · 800年12月25日'], dkinds: ['birth', 'event'],
    slug: 'charlemagne', image: 'assets/figures/charlemagne.jpg', story: ''
  },
  {
    id: 61, name: '腓特烈·巴巴罗萨', name_alt: 'Frederick Barbarossa', years: '约1122—1190',
    era: '中世纪', region: '神圣罗马', role: '皇帝', tags: ['帝王', '中世纪', '军事'],
    bio: '神圣罗马帝国皇帝，以红胡子闻名。他数度远征意大利并参与十字军东征，是中世纪德意志王权的象征。',
    relations: ['十字军医官', '渡河向导'],
    relNotes: ['东征路上伤员归你照看，绷带是你一匹匹裁的。', '翻过阿尔卑斯山，是你替他带的路，雪深没膝也没迷向。'],
    mds: ['12-01', '03-09'], dlabels: ['诞辰 · 约1122年', '加冕 · 1152年3月9日'], dkinds: ['birth', 'throne'],
    slug: 'barbarossa', image: 'assets/figures/barbarossa.jpg', story: ''
  },
  {
    id: 62, name: '彼得大帝', name_alt: 'Peter the Great', years: '1672—1725',
    era: '17—18世纪', region: '俄国', role: '沙皇', tags: ['帝王', '俄国', '改革'],
    bio: '俄国沙皇，推行全面西化改革。他迁都圣彼得堡、建立海军、整顿行政，使俄国步入欧洲强国之列。',
    relations: ['造船工友', '使团翻译'],
    relNotes: ['他在造船厂当学徒时，和你抡的是同一把斧。', '出使西欧那趟，你是他身边唯一能说几国话的翻译。'],
    mds: ['06-09', '01-29'], dlabels: ['诞辰 · 1672年6月9日', '独掌大权 · 1696年1月29日'], dkinds: ['birth', 'event'],
    slug: 'peter', image: 'assets/figures/peter.jpg', story: ''
  },
  {
    id: 63, name: '腓特烈大帝', name_alt: 'Frederick the Great', years: '1712—1786',
    era: '18世纪', region: '普鲁士', role: '国王', tags: ['帝王', '普鲁士', '启蒙'],
    bio: '普鲁士国王，启蒙君主的代表。他扩充领土、改革军制与法律，又精通长笛与哲学，是开明专制的典型。',
    relations: ['长笛搭档', '军需书记'],
    relNotes: ['他夜里吹长笛，你是唯一的听众，还替他记过谱。', '战时补给的单子，落款是你的名，他只管签字。'],
    mds: ['01-24', '05-31'], dlabels: ['诞辰 · 1712年1月24日', '继位 · 1740年5月31日'], dkinds: ['birth', 'throne'],
    slug: 'frederick2', image: 'assets/figures/frederick2.jpg', story: ''
  },
  {
    id: 64, name: '征服者威廉', name_alt: 'William the Conqueror', years: '约1028—1087',
    era: '中世纪', region: '英格兰', role: '国王', tags: ['帝王', '英格兰', '军事'],
    bio: '诺曼底公爵，1066年征服英格兰，建立诺曼王朝。他编制《末日审判书》，重塑了英格兰的政治与土地结构。',
    relations: ['渡海船工', '田产丈量员'],
    relNotes: ['1066年那支舰队，有你钉的一根船钉，他记得。', '《末日审判书》里，你替他丈量了半个英格兰的田产。'],
    mds: ['10-14', '12-25'], dlabels: ['黑斯廷斯之战 · 1066年10月14日', '加冕 · 1066年12月25日'], dkinds: ['event', 'throne'],
    slug: 'william1', image: 'assets/figures/william1.jpg', story: ''
  },
  {
    id: 65, name: '亨利八世', name_alt: 'Henry VIII', years: '1491—1547',
    era: '16世纪', region: '英格兰', role: '国王', tags: ['帝王', '英格兰', '宗教'],
    bio: '英格兰国王，以六次婚姻与宗教改革著称。他瓦解英国教会与罗马的联系，自任教会最高首脑。',
    relations: ['六宴掌勺', '教会文书'],
    relNotes: ['他六场婚宴，厨房调度都归你，菜单你拍板。', '教会易主那些文书，署名的是你，他只管盖印。'],
    mds: ['06-28', '06-24'], dlabels: ['诞辰 · 1491年6月28日', '加冕 · 1509年6月24日'], dkinds: ['birth', 'throne'],
    slug: 'henry8', image: 'assets/figures/henry8.jpg', story: ''
  },
  {
    id: 66, name: '西塞罗', name_alt: 'Cicero', years: '前106—前43',
    era: '古罗马', region: '罗马', role: '演说家', tags: ['政治家', '罗马', '哲学'],
    bio: '古罗马政治家、演说家与哲学家。他以雄辩捍卫共和，书信与论著成为拉丁文学典范，影响后世修辞与政治思想。',
    relations: ['演说提词', '别墅园丁'],
    relNotes: ['他上台前，稿子最后一遍由你过目，错处你先圈。', '他在图斯库鲁姆的园子，你替他打理了十几年。'],
    mds: ['01-03', '08-01'], dlabels: ['诞辰 · 前106年1月3日', '任执政官 · 前63年'], dkinds: ['birth', 'event'],
    slug: 'cicero', image: 'assets/figures/cicero.jpg', story: ''
  },
  {
    id: 67, name: '伯里克利', name_alt: 'Pericles', years: '约前495—前429',
    era: '古希腊', region: '雅典', role: '政治家', tags: ['政治家', '希腊', '民主'],
    bio: '雅典政治家，伯里克利时代的核心人物。他推动民主、赞助艺术与建筑，使雅典进入黄金时期。',
    relations: ['卫城石匠', '公民大会传令'],
    relNotes: ['帕特农神庙的石头，你亲手凿过一块，他常来摸那道缝。', '公民大会散场，是你替他向人群传最后的口谕。'],
    mds: ['09-01', '04-01'], dlabels: ['诞辰 · 约前495年', '伯罗奔尼撒战争爆发 · 前431年'], dkinds: ['birth', 'event'],
    slug: 'pericles', image: 'assets/figures/pericles.jpg', story: ''
  },
  {
    id: 68, name: '托马斯·杰斐逊', name_alt: 'Thomas Jefferson', years: '1743—1826',
    era: '18—19世纪', region: '美国', role: '总统', tags: ['政治家', '美国', '启蒙'],
    bio: '美国第三任总统，《独立宣言》主要起草人。他主张天赋人权与有限政府，也是一位博学的建筑师与发明家。',
    relations: ['宣言抄写', '庄园建筑师'],
    relNotes: ['《独立宣言》的初稿，誊抄出自你手，墨迹未干他就取走了。', '蒙蒂塞洛的那座房子，草图你帮他改过好几回。'],
    mds: ['04-13', '07-04'], dlabels: ['诞辰 · 1743年4月13日', '《独立宣言》通过 · 1776年7月4日'], dkinds: ['birth', 'event'],
    slug: 'jefferson', image: 'assets/figures/jefferson.jpg', story: ''
  },
  {
    id: 69, name: '本杰明·富兰克林', name_alt: 'Benjamin Franklin', years: '1706—1790',
    era: '18世纪', region: '美国', role: '科学家 · 外交家', tags: ['科学家', '美国', '政治'],
    bio: '美国开国元勋、科学家与外交家。他揭示雷电本质、发明避雷针，参与起草独立宣言，并在英法间纵横捭阖。',
    relations: ['风筝助手', '外交信使'],
    relNotes: ['那个雷雨天的风筝，线攥在你手里，雷声一响你先松了手。', '巴黎那些密信，往来都经你手，封蜡的印你替他按。'],
    mds: ['01-17', '09-03'], dlabels: ['诞辰 · 1706年1月17日', '巴黎和约 · 1783年9月3日'], dkinds: ['birth', 'event'],
    slug: 'benfranklin', image: 'assets/figures/benfranklin.jpg', story: ''
  },
  {
    id: 70, name: '奥托·冯·俾斯麦', name_alt: 'Otto von Bismarck', years: '1815—1898',
    era: '19世纪', region: '普鲁士', role: '宰相', tags: ['政治家', '德国', '统一'],
    bio: '普鲁士首相，德意志统一的设计师。他以现实政治纵横捭阖，于1871年建立德意志帝国并任首任宰相。',
    relations: ['铁血书记', '宰相府门房'],
    relNotes: ['他口述的电报，你一字不落记下来，连他的冷笑话也记。', '宰相府的门，你拦过不少想硬闯的人，唯独放你进。'],
    mds: ['04-01', '01-18'], dlabels: ['诞辰 · 1815年4月1日', '德意志帝国建立 · 1871年1月18日'], dkinds: ['birth', 'event'],
    slug: 'bismarck', image: 'assets/figures/bismarck.jpg', story: ''
  },
  {
    id: 71, name: '西奥多·罗斯福', name_alt: 'Theodore Roosevelt', years: '1858—1919',
    era: '19—20世纪', region: '美国', role: '总统', tags: ['政治家', '美国', '环保'],
    bio: '美国第26任总统，进步时代的象征。他推动反垄断、自然保护，并以大棒外交塑造了美国的海外形象。',
    relations: ['探险随队', '反垄断线人'],
    relNotes: ['他进荒野考察，背夫里有你一个，帐篷也是你搭的。', '那些托拉斯的黑账，是你递到他手上，才掀起了反垄断。'],
    mds: ['10-27', '09-14'], dlabels: ['诞辰 · 1858年10月27日', '继任总统 · 1901年9月14日'], dkinds: ['birth', 'event'],
    slug: 'rooseveltT', image: 'assets/figures/rooseveltT.jpg', story: ''
  },
  {
    id: 72, name: '阿基米德', name_alt: 'Archimedes', years: '约前287—前212',
    era: '古希腊', region: '叙拉古', role: '数学家', tags: ['科学家', '希腊', '数学'],
    bio: '古希腊数学家与发明家。他发现浮力定律与杠杆原理，并在叙拉古保卫战中设计防御机械，被誉为古代科学巨擘。',
    relations: ['叙拉古匠师', '浴室伙计'],
    relNotes: ['他喊尤里卡那回，浴池是你烧的热水，你比谁都先听见。', '守城用的抛石机，图纸你帮他描了无数遍。'],
    mds: ['01-01', '06-01'], dlabels: ['诞辰（约） · 前287年', '叙拉古保卫战 · 前213年'], dkinds: ['birth', 'event'],
    slug: 'archimedes', image: 'assets/figures/archimedes.jpg', story: ''
  },
  {
    id: 73, name: '开普勒', name_alt: 'Johannes Kepler', years: '1571—1630',
    era: '16—17世纪', region: '德国', role: '天文学家', tags: ['科学家', '德国', '天文'],
    bio: '德国天文学家，行星运动三大定律的提出者。他将以观测为基础的精确轨道带入现代天文学，为牛顿铺路。',
    relations: ['观星助手', '星历抄写'],
    relNotes: ['他算轨道算到眼花，数据是你看的表，错一位你先发现。', '那本星历的抄本，落款是你的名，他笑称你才是合伙。'],
    mds: ['12-27', '10-01'], dlabels: ['诞辰 · 1571年12月27日', '《新天文学》出版 · 1609年'], dkinds: ['birth', 'event'],
    slug: 'kepler', image: 'assets/figures/kepler.jpg', story: ''
  },
  {
    id: 74, name: '拉瓦锡', name_alt: 'Antoine Lavoisier', years: '1743—1794',
    era: '18世纪', region: '法国', role: '化学家', tags: ['科学家', '法国', '化学'],
    bio: '法国化学家，现代化学之父。他确立质量守恒、命名氧气，并以定量实验扫清了炼金术的迷雾。',
    relations: ['天平侍者', '皇家农场监'],
    relNotes: ['他的天平，只有你敢碰，每一次称量你都替他记。', '皇家农场做实验，场务归你管，兔子与草料都听你的。'],
    mds: ['08-26', '04-01'], dlabels: ['诞辰 · 1743年8月26日', '《化学基础论》 · 1789年'], dkinds: ['birth', 'event'],
    slug: 'lavoisier', image: 'assets/figures/lavoisier.jpg', story: ''
  },
  {
    id: 75, name: '法拉第', name_alt: 'Michael Faraday', years: '1791—1867',
    era: '19世纪', region: '英国', role: '物理学家', tags: ['科学家', '英国', '物理'],
    bio: '英国物理学家与化学家，电磁感应的发现者。他的实验为电力时代奠定基石，几乎全靠自学成才。',
    relations: ['实验室杂工', '皇家学会门房'],
    relNotes: ['他做电磁感应那回，线圈是你绕的，手被电麻了三次。', '皇家学会的门，你替他看了一辈子，来宾你比他认得多。'],
    mds: ['09-22', '08-29'], dlabels: ['诞辰 · 1791年9月22日', '发现电磁感应 · 1831年8月29日'], dkinds: ['birth', 'event'],
    slug: 'faraday', image: 'assets/figures/faraday.jpg', story: ''
  },
  {
    id: 76, name: '麦克斯韦', name_alt: 'James Clerk Maxwell', years: '1831—1879',
    era: '19世纪', region: '英国', role: '物理学家', tags: ['科学家', '英国', '物理'],
    bio: '英国物理学家，经典电磁理论的集大成者。他以方程组统一电、磁与光，深刻塑造了现代物理学。',
    relations: ['剑桥助教', '方程誊录'],
    relNotes: ['他在剑桥讲课，板书你替他擦也替他写。', '那组电磁方程的手稿，最后一遍是你整理的，涂改最多那页是你的。'],
    mds: ['06-13', '11-01'], dlabels: ['诞辰 · 1831年6月13日', '电磁理论成型 · 1865年'], dkinds: ['birth', 'event'],
    slug: 'maxwell', image: 'assets/figures/maxwell.jpg', story: ''
  },
  {
    id: 77, name: '孟德尔', name_alt: 'Gregor Mendel', years: '1822—1884',
    era: '19世纪', region: '奥地利', role: '生物学家', tags: ['科学家', '奥地利', '生物'],
    bio: '奥地利修道士与生物学家，遗传学的奠基人。他通过豌豆实验揭示了性状遗传的基本规律。',
    relations: ['修道院园丁', '豌豆记录员'],
    relNotes: ['修道院后园的豌豆，是你替他一垄垄种的，浇水也归你。', '那些性状的数据，记在你这本子里，他临终前还来翻。'],
    mds: ['07-20', '02-08'], dlabels: ['诞辰 · 1822年7月20日', '豌豆实验报告 · 1865年2月8日'], dkinds: ['birth', 'event'],
    slug: 'mendel', image: 'assets/figures/mendel.jpg', story: ''
  },
  {
    id: 78, name: '拉斐尔', name_alt: 'Raphael', years: '1483—1520',
    era: '文艺复兴', region: '意大利', role: '画家', tags: ['画家', '意大利', '文艺复兴'],
    bio: '意大利文艺复兴三杰之一。他以和谐的构图与优雅的圣母像著称，英年早逝却影响深远。',
    relations: ['画室学徒', '教皇府裁缝'],
    relNotes: ['他画圣母，你磨了一整年颜料，手上的石青怎么也洗不掉。', '教皇府的礼服，尺寸你最清楚，逢节庆都是你赶制的。'],
    mds: ['04-06', '09-01'], dlabels: ['诞辰 · 1483年4月6日', '任圣彼得大教堂建筑师 · 1514年'], dkinds: ['birth', 'event'],
    slug: 'raphael', image: 'assets/figures/raphael.jpg', story: ''
  },
  {
    id: 79, name: '提香', name_alt: 'Titian', years: '约1490—1576',
    era: '文艺复兴', region: '意大利', role: '画家', tags: ['画家', '威尼斯', '文艺复兴'],
    bio: '威尼斯画派巨匠，以绚烂的色彩与肖像画闻名。他服务多任教皇与君主，艺术生涯横跨十六世纪大半。',
    relations: ['威尼斯船工', '颜料调配'],
    relNotes: ['威尼斯的运河，你摇橹送他过的最多，画箱都让你搬。', '他那招牌的红色，配方只有你俩知道，调色的手归你。'],
    mds: ['08-01', '04-01'], dlabels: ['诞辰（约） · 约1490年', '任宫廷画家 · 1533年'], dkinds: ['birth', 'event'],
    slug: 'titian', image: 'assets/figures/titian.jpg', story: ''
  },
  {
    id: 80, name: '维米尔', name_alt: 'Johannes Vermeer', years: '1632—1675',
    era: '17世纪', region: '荷兰', role: '画家', tags: ['画家', '荷兰', '黄金时代'],
    bio: '荷兰黄金时代画家，以静谧的光影与室内场景著称。《戴珍珠耳环的少女》使他名垂后世。',
    relations: ['代尔夫特窗下', '暗室配色'],
    relNotes: ['你住他楼下，窗里的光你最熟悉，常替他挡住过路的人影。', '他画里的蓝，调色归你管，靛蓝你磨了一罐又一罐。'],
    mds: ['10-31', '12-01'], dlabels: ['诞辰 · 1632年10月31日', '入圣路加行会 · 1653年'], dkinds: ['birth', 'event'],
    slug: 'vermeer', image: 'assets/figures/vermeer.jpg', story: ''
  },
  {
    id: 81, name: '戈雅', name_alt: 'Francisco Goya', years: '1746—1828',
    era: '18—19世纪', region: '西班牙', role: '画家', tags: ['画家', '西班牙', '浪漫主义'],
    bio: '西班牙画家，从宫廷肖像到黑暗的战争图景，记录了一个动荡时代。他是浪漫主义的先声。',
    relations: ['宫廷画师友', '版画家'],
    relNotes: ['他给国王画像，你替他逗那些不肯安静的贵族。', '那些讽刺版画，刻板你动的手，他只管落刀前的草图。'],
    mds: ['03-30', '04-01'], dlabels: ['诞辰 · 1746年3月30日', '任宫廷画家 · 1786年'], dkinds: ['birth', 'event'],
    slug: 'goya', image: 'assets/figures/goya.jpg', story: ''
  },
  {
    id: 82, name: '透纳', name_alt: 'J. M. W. Turner', years: '1775—1851',
    era: '18—19世纪', region: '英国', role: '画家', tags: ['画家', '英国', '风景'],
    bio: '英国风景画家，以光与大气的奔放表现著称。他的晚期作品预示了印象派的来临。',
    relations: ['皇家艺术院门房', '海上旅伴'],
    relNotes: ['他进艺术院那年，门房是你，访客你比他认得全。', '他追着风暴写生，船上有你掌舵，浪打来你先替他扶画架。'],
    mds: ['04-23', '02-01'], dlabels: ['诞辰 · 1775年4月23日', '当选皇家艺术院院士 · 1802年'], dkinds: ['birth', 'event'],
    slug: 'turner', image: 'assets/figures/turner.jpg', story: ''
  },
  {
    id: 83, name: '蒙克', name_alt: 'Edvard Munch', years: '1863—1944',
    era: '19—20世纪', region: '挪威', role: '画家', tags: ['画家', '挪威', '表现主义'],
    bio: '挪威表现主义画家，《呐喊》的作者。他以扭曲的形象直击现代人的焦虑与孤独，影响表现主义运动。',
    relations: ['奥斯陆画室友', '木刻工'],
    relNotes: ['你们合用一间画室，半夜他总在画，你替他留灯。', '《呐喊》那块木板，刻刀是你递的，他手抖时你扶过。'],
    mds: ['12-12', '01-01'], dlabels: ['诞辰 · 1863年12月12日', '创作《呐喊》 · 1893年'], dkinds: ['birth', 'event'],
    slug: 'munch', image: 'assets/figures/munch.jpg', story: ''
  },
  {
    id: 84, name: '荷马', name_alt: 'Homer', years: '约前8世纪',
    era: '古希腊', region: '希腊', role: '诗人', tags: ['文学家', '希腊', '史诗'],
    bio: '古希腊史诗诗人，相传为《伊利亚特》与《奥德赛》的作者。这两部史诗奠定了西方文学的基石。',
    relations: ['吟游引路', '抄本保管'],
    relNotes: ['他每到一城吟唱，提灯带路、清场的就是你。', '那两部史诗的抄本，收在你这口箱子里，谁借都要经你。'],
    mds: ['03-01', '01-01'], dlabels: ['诞辰（传统） · 约前8世纪', '史诗传世 · 约前8世纪'], dkinds: ['birth', 'event'],
    slug: 'homer', image: 'assets/figures/homer.jpg', story: ''
  },
  {
    id: 85, name: '但丁', name_alt: 'Dante Alighieri', years: '1265—1321',
    era: '中世纪', region: '意大利', role: '诗人', tags: ['文学家', '意大利', '史诗'],
    bio: '意大利诗人，《神曲》的作者。他用托斯卡纳方言书写来世之旅，奠定了意大利文学语言的基础。',
    relations: ['流放同行', '方言校订'],
    relNotes: ['他被流放路上，与你同行一程，夜里分吃一块干面包。', '他用方言写诗，发音你帮他校，错处他用指甲划掉。'],
    mds: ['05-21', '01-27'], dlabels: ['诞辰 · 1265年5月21日', '开始流放 · 1302年1月27日'], dkinds: ['birth', 'event'],
    slug: 'dante', image: 'assets/figures/dante.jpg', story: ''
  },
  {
    id: 86, name: '塞万提斯', name_alt: 'Miguel de Cervantes', years: '1547—1616',
    era: '16—17世纪', region: '西班牙', role: '作家', tags: ['文学家', '西班牙', '小说'],
    bio: '西班牙作家，《堂吉诃德》的作者。这部小说以荒诞与深情并存的笔法，被誉为现代小说的开端。',
    relations: ['战俘信使', '税吏旧识'],
    relNotes: ['勒班陀海战他负了伤，抬担架、替他包扎的有你。', '他后来当税吏，账目你替他核过，漏收的你都补上。'],
    mds: ['09-29', '01-16'], dlabels: ['诞辰 · 1547年9月29日', '《堂吉诃德》出版 · 1605年1月16日'], dkinds: ['birth', 'event'],
    slug: 'cervantes', image: 'assets/figures/cervantes.jpg', story: ''
  },
  {
    id: 87, name: '歌德', name_alt: 'Johann W. von Goethe', years: '1749—1832',
    era: '18—19世纪', region: '德国', role: '诗人', tags: ['文学家', '德国', '戏剧'],
    bio: '德国诗人、剧作家与思想家，魏玛古典主义的代表。《浮士德》是其毕生思想的结晶。',
    relations: ['魏玛幕僚', '园艺师'],
    relNotes: ['他在魏玛当大臣，文书你替他理，公文你先过目。', '他园子里的植物，你替他分了类，标本至今是你贴的签。'],
    mds: ['08-28', '01-01'], dlabels: ['诞辰 · 1749年8月28日', '《浮士德》上部出版 · 1808年'], dkinds: ['birth', 'event'],
    slug: 'goethe', image: 'assets/figures/goethe.jpg', story: ''
  },
  {
    id: 88, name: '马克·吐温', name_alt: 'Mark Twain', years: '1835—1910',
    era: '19世纪', region: '美国', role: '作家', tags: ['文学家', '美国', '小说'],
    bio: '美国作家，以《哈克贝利·费恩历险记》闻名。他的幽默与方言写作刻画了密西西比河畔的美国。',
    relations: ['密西西比船工', '报社校对'],
    relNotes: ['密西西比河上，你是他学徒期的舵手，舵柄你扶得最稳。', '他写稿的报社，校样最后归你，标点你改得比他还狠。'],
    mds: ['11-30', '12-10'], dlabels: ['诞辰 · 1835年11月30日', '《哈克贝利·费恩》出版 · 1885年12月10日'], dkinds: ['birth', 'event'],
    slug: 'twain', image: 'assets/figures/twain.jpg', story: ''
  },
  {
    id: 89, name: '阿加莎·克里斯蒂', name_alt: 'Agatha Christie', years: '1890—1976',
    era: '20世纪', region: '英国', role: '作家', tags: ['文学家', '英国', '侦探'],
    bio: '英国侦探小说女王，波洛与马普尔小姐的创造者。她是有史以来销量最高的作家之一，作品译成百余种语言。',
    relations: ['侦探小说编辑', '考古随队'],
    relNotes: ['她的手稿，你是第一个读者，谜底你比编辑早知道三天。', '她随丈夫考古，行李里总给你留一格，工具你替她扛。'],
    mds: ['09-15', '10-01'], dlabels: ['诞辰 · 1890年9月15日', '首部长篇出版 · 1920年'], dkinds: ['birth', 'event'],
    slug: 'christie', image: 'assets/figures/christie.jpg', story: ''
  },
  {
    id: 90, name: '卡夫卡', name_alt: 'Franz Kafka', years: '1883—1924',
    era: '19—20世纪', region: '奥地利', role: '小说家', tags: ['文学家', '奥地利', '小说'],
    bio: '奥地利德语小说家。《变形记》与《审判》以荒诞与压抑，定义了二十世纪的某种精神困境。',
    relations: ['工伤保险同事', '夜稿抄写'],
    relNotes: ['他在劳工保险局上班，邻座是你，午休的咖啡你帮他带。', '他夜里写的那些稿，清晨由你誊清，他常不认得自己的字。'],
    mds: ['07-03', '01-01'], dlabels: ['诞辰 · 1883年7月3日', '《变形记》发表 · 1915年'], dkinds: ['birth', 'event'],
    slug: 'kafka', image: 'assets/figures/kafka.jpg', story: ''
  },
  {
    id: 91, name: '巴赫', name_alt: 'J. S. Bach', years: '1685—1750',
    era: '巴洛克', region: '德国', role: '作曲家', tags: ['音乐家', '德国', '巴洛克'],
    bio: '巴洛克音乐巨匠，作曲与管风琴大师。他的复调艺术将宗教音乐推向空前的高峰，被誉为音乐之父。',
    relations: ['教堂管风琴师友', '乐谱抄写'],
    relNotes: ['他礼拜弹琴，你替他翻了二十年谱，翻错一页他都不恼。', '那些康塔塔的抄本，落款是你的名，他笑说你是他的笔。'],
    mds: ['03-21', '04-01'], dlabels: ['诞辰 · 1685年3月21日', '《马太受难曲》首演 · 1727年'], dkinds: ['birth', 'event'],
    slug: 'bach', image: 'assets/figures/bach.jpg', story: ''
  },
  {
    id: 92, name: '肖邦', name_alt: 'Frédéric Chopin', years: '1810—1849',
    era: '19世纪', region: '波兰', role: '作曲家', tags: ['音乐家', '波兰', '钢琴'],
    bio: '波兰作曲家与钢琴家，钢琴诗歌的化身。他的夜曲与叙事曲深挚优雅，把民族的忧伤化作旋律。',
    relations: ['巴黎沙龙主', '钢琴调律'],
    relNotes: ['他在巴黎的沙龙，你是常驻东道，客人你引，酒你斟。', '他的钢琴，音准只有你调得动，演出前夜你都在。'],
    mds: ['03-01', '10-01'], dlabels: ['诞辰 · 1810年3月1日', '巴黎首演 · 1832年'], dkinds: ['birth', 'event'],
    slug: 'chopin', image: 'assets/figures/chopin.jpg', story: ''
  },
  {
    id: 93, name: '柴可夫斯基', name_alt: 'Pyotr Tchaikovsky', years: '1840—1893',
    era: '19世纪', region: '俄国', role: '作曲家', tags: ['音乐家', '俄国', '浪漫'],
    bio: '俄国作曲家，以旋律著称。芭蕾《天鹅湖》《胡桃夹子》与多部交响曲至今长演不衰。',
    relations: ['芭蕾乐队替', '铁路随行'],
    relNotes: ['他的芭蕾首演，乐队里你坐第一排，错拍你先示意。', '他坐火车采风，包厢常备你一杯茶，沿途站名你替他记。'],
    mds: ['05-07', '08-01'], dlabels: ['诞辰 · 1840年5月7日', '《1812序曲》完成 · 1880年'], dkinds: ['birth', 'event'],
    slug: 'tchaikovsky', image: 'assets/figures/tchaikovsky.jpg', story: ''
  },
  {
    id: 94, name: '汉尼拔', name_alt: 'Hannibal Barca', years: '前247—前183',
    era: '古希腊', region: '迦太基', role: '统帅', tags: ['军事', '迦太基', '古代'],
    bio: '迦太基统帅，第二次布匿战争的灵魂。他翻越阿尔卑斯山奇袭罗马，是古代最杰出的军事天才之一。',
    relations: ['象队驯手', '翻山向导'],
    relNotes: ['翻阿尔卑斯那群象，你喂了最久，它们只认你的哨声。', '他问路问到你，你指了最难的那条，因为他赌得起。'],
    mds: ['08-01', '10-01'], dlabels: ['诞辰 · 前247年8月1日', '翻越阿尔卑斯 · 前218年'], dkinds: ['birth', 'event'],
    slug: 'hannibal', image: 'assets/figures/hannibal.jpg', story: ''
  },
  {
    id: 95, name: '理查一世', name_alt: 'Richard the Lionheart', years: '1157—1199',
    era: '中世纪', region: '英格兰', role: '国王', tags: ['军事', '英格兰', '十字军'],
    bio: '英格兰国王，第三次十字军东征的核心人物。他以勇武善战闻名，却多在海外征战，在英格兰本土反倒少见。',
    relations: ['十字军随医', '城堡守卫'],
    relNotes: ['东征的伤兵，归你照料，绷带你一匹匹拆洗。', '他出海征战，城堡的墙你替他把过，缺口你先补。'],
    mds: ['09-08', '03-09'], dlabels: ['诞辰 · 1157年9月8日', '加冕 · 1189年3月9日'], dkinds: ['birth', 'throne'],
    slug: 'richard1', image: 'assets/figures/richard1.jpg', story: ''
  },
  {
    id: 96, name: '威灵顿公爵', name_alt: 'Duke of Wellington', years: '1769—1852',
    era: '18—19世纪', region: '英国', role: '元帅', tags: ['军事', '英国', '拿破仑战争'],
    bio: '英国陆军元帅，在滑铁卢击败拿破仑的统帅。他后来出任首相，以稳健保守的政治风格著称。',
    relations: ['滑铁卢副官', '乡居邻居'],
    relNotes: ['滑铁卢那天，传令的快马你骑了一匹，马汗你替他擦。', '他退隐后，庄园和你家只隔一道篱，猎狐常碰头。'],
    mds: ['05-01', '06-18'], dlabels: ['诞辰 · 1769年5月1日', '滑铁卢之战 · 1815年6月18日'], dkinds: ['birth', 'event'],
    slug: 'wellington', image: 'assets/figures/wellington.jpg', story: ''
  },
  {
    id: 97, name: '耶稣', name_alt: 'Jesus of Nazareth', years: '约前4—约30',
    era: '公元1世纪', region: '巴勒斯坦', role: '传教士', tags: ['宗教', '巴勒斯坦', '基督教'],
    bio: '公元一世纪的犹太传教士，基督教的中心人物。他以寓言与门徒传教，其教导与影响深远地塑造了世界文明。',
    relations: ['加利利船夫', '筵席分食'],
    relNotes: ['他讲道，你划船渡他过加利利海，桨是你摇的。', '五饼二鱼那回，分食的篮子是你提的，空了你又背回去。'],
    mds: ['12-25', '01-01'], dlabels: ['诞辰（传统） · 约元年12月25日', '开始传道 · 约29年'], dkinds: ['birth', 'event'],
    slug: 'jesus', image: 'assets/figures/jesus.jpg', story: ''
  },
  {
    id: 98, name: '奥古斯丁', name_alt: 'Augustine of Hippo', years: '354—430',
    era: '4—5世纪', region: '北非', role: '神学家', tags: ['宗教', '北非', '神学'],
    bio: '北非出身的神学家与哲学家，希波主教。《忏悔录》与《上帝之城》奠定了基督教思想的重要框架。',
    relations: ['希波抄录', '花园园丁'],
    relNotes: ['《忏悔录》的稿，你替他一句句录，错处他用指尖点。', '他庭院里的那棵树，你浇了多年，他常在树下想事。'],
    mds: ['11-13', '04-01'], dlabels: ['诞辰 · 354年11月13日', '受洗 · 387年4月'], dkinds: ['birth', 'event'],
    slug: 'augustine', image: 'assets/figures/augustine.jpg', story: ''
  },
  {
    id: 99, name: '托马斯·阿奎那', name_alt: 'Thomas Aquinas', years: '约1225—1274',
    era: '13世纪', region: '意大利', role: '神学家', tags: ['宗教', '意大利', '经院哲学'],
    bio: '中世纪神学家与哲学家，经院哲学的集大成者。他以理性调和信仰，著成《神学大全》，影响西方思想数百年。',
    relations: ['巴黎学堂助教', '修道院厨下'],
    relNotes: ['他讲经院哲学，板书你替他写，他口若悬河你手不停。', '修道院的厨房，你管着他爱吃的鱼，节期都是你张罗。'],
    mds: ['01-28', '12-01'], dlabels: ['诞辰 · 约1225年1月28日', '入多明我会 · 1244年'], dkinds: ['birth', 'event'],
    slug: 'aquinas', image: 'assets/figures/aquinas.jpg', story: ''
  },
  {
    id: 100, name: '马丁·路德', name_alt: 'Martin Luther', years: '1483—1546',
    era: '15—16世纪', region: '德意志', role: '神学家', tags: ['宗教', '德国', '改革'],
    bio: '德意志神学家，宗教改革发起人。1517年《九十五条论纲》冲击了天主教会的权威，开启新教传统。',
    relations: ['威登堡门房', '赎罪券对账'],
    relNotes: ['1517年那扇门，钥匙在你腰间，钉锤是你递的。', '他贴论纲前，赎罪券的账你替他算清，谁多收的一目了然。'],
    mds: ['11-10', '10-31'], dlabels: ['诞辰 · 1483年11月10日', '《九十五条论纲》 · 1517年10月31日'], dkinds: ['birth', 'event'],
    slug: 'luther', image: 'assets/figures/luther.jpg', story: ''
  },
]
