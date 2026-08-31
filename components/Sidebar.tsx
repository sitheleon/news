import Link from 'next/link'
import { getMostViewedArticles } from '@/lib/articles'

export function Sidebar() {
  return <aside className="sidebar">
    <section className="side-box"><h2>많이 본 뉴스</h2><ol>{getMostViewedArticles().map((article, i) => <li key={article.slug}><b>{i + 1}</b><Link href={`/article/${article.slug}`}>{article.title}</Link></li>)}</ol></section>
    <section className="side-box weather"><h2>오늘의 해동 날씨</h2><div><strong>12℃</strong><span>맑음<br />북서풍 3m/s</span></div><p>내일: 구름 조금, 최저 4℃</p></section>
    <section className="side-ad"><small>해동항 개항 25주년</small><strong>바다를 잇고<br />내일을 엽니다</strong><span>국가해양시설관리청</span></section>
    <section className="side-box archive-box"><h2>해동일보 자료실</h2><p>지역의 기록을 찾으시나요?</p><Link href="/article/deleted-hs03-report">2006년 11월 사건 자료 보기 &gt;</Link></section>
  </aside>
}
