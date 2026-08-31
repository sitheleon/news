import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { ArticleTools } from '@/components/ArticleTools'
import { Comments, PhotoViewer, ReporterLink, RevisionHistory } from '@/components/ArticleExtras'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

export function generateStaticParams() { return getAllArticles().map((article) => ({ slug: article.slug })) }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()
  const related = (article.relatedArticles || []).map(getArticleBySlug).filter(Boolean)
  const isSignal = slug === 'hs03-signal-loss'
  const isFamily = slug === 'hs03-worker-list'
  return <><Header /><main className={`site-width page-shell ${article.hasGlitch ? 'glitch-page' : ''}`}><div className="breadcrumb">홈 &gt; {article.category} &gt; 기사</div><div className="content-grid"><article className="article-page"><span className="category">[{article.category}]</span><h1>{isSignal ? <>{article.title}</> : article.title}</h1><div className="article-meta">입력 {article.publishedAt}　|　수정 {article.updatedAt}　|　{article.isDeleted ? <ReporterLink>{article.author}</ReporterLink> : article.author}　|　조회 {article.views.toLocaleString()} {isSignal && <RevisionHistory />}</div>{article.isDeleted && <div className="deleted-notice">이 기사는 편집국 요청으로 삭제된 기사입니다. 임시 저장본을 열람할 수 없습니다.</div>}{article.imageUrl && <figure><img src={article.imageUrl} alt={article.imageCaption || article.title} />{isSignal && <PhotoViewer src="/medical-transport.png" caption="사고 사흘 전 HS-03 보급 선착장으로 이동한 운송 차량. 해동일보 독자 제공." />}<figcaption>{article.imageCaption}</figcaption></figure>}<div className="article-body">{article.content.split('\n\n').map((paragraph, i) => <p key={i}>{article.isDeleted && i === 2 ? <>{paragraph.slice(0, 20)}<span className="redaction">████████</span></> : paragraph}</p>)}</div><ArticleTools />{(isSignal || isFamily) && <Comments />}{related.length > 0 && <section className="related"><h2>관련 기사</h2>{related.map((item) => item && <Link key={item.slug} href={`/article/${item.slug}`}>[{item.category}] {item.title}</Link>)}</section>}</article><Sidebar /></div></main><Footer /></>
}
