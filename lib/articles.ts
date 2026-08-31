export interface Article {
  id: string
  slug: string
  category: string
  title: string
  summary?: string
  content: string
  author: string
  views: number
  publishedAt: string
  updatedAt: string
  imageUrl?: string
  imageCaption?: string
  relatedArticles?: string[]
  isDeleted?: boolean
  hasGlitch?: boolean
}

export const articles: Record<string, Article> = {
  'hs03-signal-loss': {
    id: '1',
    slug: 'hs03-signal-loss',
    category: '종합',
    title: 'HS-03 해양시설 통신 두절…관리청 "단순 설비 이상"',
    summary: '지난 19일 오후 동해상 해양시설 HS-03과의 통신이 두절됐다. 국가해양시설관리청은 노후 통신장비에서 발생한 일시적인 장애로 보인다며 인명 피해 가능성을 부인했다.',
    content: `국가해양시설관리청 소속 해양시설 HS-03과의 정기 통신이 지난 19일 오후 11시 48분을 기점으로 중단됐다.

관리청은 '시설 내부 통신장비의 전력 이상으로 추정된다'며 '비상 전력은 정상 작동 중이고 근무자들의 안전에도 문제가 없는 것으로 확인됐다'고 밝혔다.

그러나 인근 어민들은 사고 발생 직후 시설 방향에서 붉은 불빛과 여러 차례의 경보음을 들었다고 주장했다.

해경은 기상 악화를 이유로 민간 선박의 시설 인근 접근을 제한했다. 관리청 관계자는 구조 인력이나 헬기가 투입됐다는 보도에 대해 사실이 아니라고 답했다.

한편 HS-03은 해양 관측과 통신 중계 업무를 수행하는 시설로 알려졌지만, 구체적인 내부 구조와 근무 인원은 공개되지 않았다.`,
    author: '박정우 기자',
    views: 1842,
    publishedAt: '2006-11-20 08:12',
    updatedAt: '2006-11-20 11:40',
    imageUrl: '/hs03-platform.png',
    imageCaption: '통신이 두절된 HS-03 해양시설. 사진은 사고 발생 이전 촬영된 자료사진.',
    relatedArticles: ['hs03-worker-list', 'hs03-medical-equipment', 'deleted-hs03-report'],
  },
  'hs03-worker-list': {
    id: '2',
    slug: 'hs03-worker-list',
    category: '사회',
    title: '"분명 17명이었습니다"…공식 근무자 수와 다른 가족 증언',
    content: `관리청은 사고 당시 시설 내 근무자가 총 12명이었다고 발표했다.

그러나 근무자 가족이 보관하고 있던 교대근무표에는 최소 17명의 이름이 기재되어 있었던 것으로 확인됐다. 일부 이름은 검은색으로 지워져 있었으며 정비 인력으로 분류된 한 명의 기록은 사고 직후 공식 명단에서 사라졌다.

한 가족은 '사고 당일 밤에도 분명 통화를 했다'며 '현재 관리청이 공개한 명단에는 가족의 이름이 없다'고 주장했다.

해동일보가 입수한 근무표에는 연구동, 냉동실, 격리구역 등 일반적인 해양 관측시설과 관련성이 확인되지 않는 구역명이 포함되어 있었다.

관리청은 해당 문서가 공식 자료인지 확인할 수 없다고 답했다.`,
    author: '최민석 기자',
    views: 3461,
    publishedAt: '2006-11-21 16:04',
    updatedAt: '2006-11-21 18:22',
    relatedArticles: ['hs03-signal-loss', 'hs03-medical-equipment'],
  },
  'hs03-medical-equipment': {
    id: '3',
    slug: 'hs03-medical-equipment',
    category: '경제',
    title: '사고 사흘 전 HS-03에 의료용 냉동장비 대량 반입',
    content: `사고 발생 사흘 전 의료 폐기물 운송 표시가 부착된 차량 여러 대가 HS-03 보급 선착장으로 진입했다는 증언이 나왔다.

관리청은 해당 물품이 '해양 생물 표본 보관을 위한 연구 장비'라고 해명했다. 그러나 공개된 시설 운영계획에는 관련 연구 항목이 존재하지 않는다.

현장 작업자는 반입된 장비 가운데 일부가 일반적인 표본 보관용 장비보다 훨씬 큰 규모였으며 군 관계자로 보이는 인원들이 운송 과정을 통제했다고 말했다.

취재진이 반입 기록과 연구계획서 공개를 요청했지만 관리청은 국가시설 보안 규정을 이유로 답변을 거부했다.`,
    author: '윤서진 기자',
    views: 5027,
    publishedAt: '2006-11-22 09:31',
    updatedAt: '2006-11-22 10:07',
    imageUrl: '/medical-transport.png',
    imageCaption: '사고 사흘 전 보급 선착장으로 이동한 운송 차량. 상자 측면에서 "BIOLOGICAL MATERIAL"과 "UNIT 04" 표기가 확인된다.',
    relatedArticles: ['hs03-signal-loss', 'hs03-worker-list'],
  },
  'deleted-hs03-report': {
    id: '4',
    slug: 'deleted-hs03-report',
    category: '특집',
    title: 'HS-03 내부 근무자의 마지막 제보',
    content: `이건 통신장비 고장이 아닙니다.

연구동 전체가 봉쇄됐고 격리실의 전원이 차단됐습니다. 관리청에서 발표한 명단에 없는 사람들이 시설 안에 있습니다.

04번 구역에서 계속 구조 신호가 들어오고 있습니다. 누군가 살아 있습니다.

사고가 발생하기 전부터 시설 외부 통신은 차단되어 있었습니다. 이 내용을 받으면 절대 관리청에 연락하지 마십시오.

비상구는 연구동 서쪽 ████ 구역에 있습니다.

그 아이를 밖으로 █████████

[SIGNAL LOST]`,
    author: '신원 미상',
    views: 0,
    publishedAt: '2006-11-23 02:17',
    updatedAt: '2006-11-23 02:17',
    isDeleted: true,
    hasGlitch: true,
    relatedArticles: ['hs03-signal-loss', 'hs03-worker-list', 'hs03-medical-equipment'],
  },
  // 일반 기사들
  'donghaean-windwarning': {
    id: '100',
    slug: 'donghaean-windwarning',
    category: '지역',
    title: '동해안 일부 지역 강풍주의보',
    summary: '기상청, 동해안 일부 지역에 강풍주의보 발령',
    content: '기상청은 20일 오후부터 동해안 일부 지역에 강풍주의보를 발령했다. 최대 풍속이 초속 14~16m에 달할 것으로 예상된다.',
    author: '이준호 기자',
    views: 342,
    publishedAt: '2006-11-20 14:30',
    updatedAt: '2006-11-20 14:30',
  },
  'fishing-vessel-safety': {
    id: '101',
    slug: 'fishing-vessel-safety',
    category: '해양',
    title: '겨울철 어선 안전점검 실시',
    summary: '해양청, 겨울철 어선 안전점검 시작',
    content: '국가해양시설관리청은 겨울철을 앞두고 해상 어선 안전점검을 실시한다고 밝혔다. 점검 대상은 총 2,340척이다.',
    author: '박영민 기자',
    views: 251,
    publishedAt: '2006-11-20 13:45',
    updatedAt: '2006-11-20 13:45',
  },
  'undersea-cable-project': {
    id: '102',
    slug: 'undersea-cable-project',
    category: '과학·기술',
    title: '해저 통신케이블 교체 사업 착수',
    summary: '동해 해저 통신케이블 노후 교체 프로젝트 시작',
    content: '국토교통부와 해양청은 동해 해저 통신케이블 교체 사업을 정식으로 착수했다고 발표했다. 총 사업비는 약 340억 원이다.',
    author: '김준석 기자',
    views: 198,
    publishedAt: '2006-11-19 10:20',
    updatedAt: '2006-11-19 10:20',
  },
  'port-cargo-increase': {
    id: '103',
    slug: 'port-cargo-increase',
    category: '경제',
    title: '지역 항만 물동량 전년 대비 증가',
    summary: '해동항 올해 상반기 물동량 15% 증가',
    content: '해동항의 올해 상반기 물동량이 전년 동기 대비 15% 증가했다고 관계 기관이 발표했다. 총 물동량은 약 1,240만 톤이다.',
    author: '최현우 기자',
    views: 167,
    publishedAt: '2006-11-18 11:30',
    updatedAt: '2006-11-18 11:30',
  },
  'maritime-agency-new-chief': {
    id: '104',
    slug: 'maritime-agency-new-chief',
    category: '정치',
    title: '해양시설관리청 정기 인사 발표',
    summary: '국가해양시설관리청 신임 청장 취임식 개최',
    content: '국가해양��설관리청의 신임 청장 이재훈 준장이 20일 오전 서울에서 취임식을 가졌다.',
    author: '장경민 기자',
    views: 289,
    publishedAt: '2006-11-20 09:15',
    updatedAt: '2006-11-20 09:15',
  },
  'coastal-passenger-ship': {
    id: '105',
    slug: 'coastal-passenger-ship',
    category: '지역',
    title: '연안 여객선 운항 시간 일부 변경',
    summary: '겨울철 해상 안전을 위해 여객선 운항 시간 조정',
    content: '해동항 운영업체는 겨울철 해상 기상 악화를 대비해 일부 여객선의 운항 시간을 변경한다고 공지했다.',
    author: '정수진 기자',
    views: 124,
    publishedAt: '2006-11-19 15:40',
    updatedAt: '2006-11-19 15:40',
  },
  'fishery-market-inspection': {
    id: '106',
    slug: 'fishery-market-inspection',
    category: '사회',
    title: '지역 수산시장 겨울철 특별 점검',
    summary: '식품의약품안전청, 지역 수산시장 위생 점검 실시',
    content: '식품의약품안전청이 겨울철 식중독 예방을 위해 지역 수산시장에 대한 특별 위생 점검을 실시했다. 점검 대상은 총 47개 점포다.',
    author: '한영희 기자',
    views: 156,
    publishedAt: '2006-11-20 12:00',
    updatedAt: '2006-11-20 12:00',
  },
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles[slug]
}

export function getAllArticles(): Article[] {
  return Object.values(articles)
}

export function getFeaturedArticles(): Article[] {
  return [
    articles['hs03-signal-loss'],
    articles['hs03-worker-list'],
    articles['hs03-medical-equipment'],
  ]
}

export function getGeneralArticles(): Article[] {
  return [
    articles['donghaean-windwarning'],
    articles['fishing-vessel-safety'],
    articles['undersea-cable-project'],
    articles['port-cargo-increase'],
    articles['maritime-agency-new-chief'],
    articles['coastal-passenger-ship'],
    articles['fishery-market-inspection'],
  ]
}

export function getMostViewedArticles(): Article[] {
  return getAllArticles()
    .filter((a) => !a.isDeleted)
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
}
