import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { getFeaturedArticles, getGeneralArticles } from '@/lib/articles'

export default function Page() {
  const featured = getFeaturedArticles()
  const general = getGeneralArticles()
  return <><Header /><main className="site-width page-shell"><div className="breadcrumb">홈 &gt; 종합</div><div className="content-grid"><section className="main-content"><div className="section-heading"><h1>오늘의 주요 뉴스</h1><span>2006. 11. 23 목요일</span></div><article className="hero-story"><div className="hero-copy"><span className="category">[종합]　사건·사고</span><Link href={`/article/${featured[0].slug}`}><h2>{featured[0].title}</h2></Link><p>{featured[0].summary}</p><small>{featured[0].author}　|　조회 {featured[0].views.toLocaleString()}</small></div><img src={featured[0].imageUrl!} alt={featured[0].imageCaption} /></article><div className="sub-feature-grid">{featured.slice(1).map((article) => <ArticleCard key={article.slug} article={article} />)}</div><div className="section-heading general-heading"><h1>지역 종합</h1><Link href="/?category=지역">전체보기 &gt;</Link></div><div className="general-list">{general.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section><Sidebar /></div></main><Footer /></>
}
