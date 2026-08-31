import Link from 'next/link'
import type { Article } from '@/lib/articles'

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return <article className={featured ? 'article-card featured-card' : 'article-card'}>
    {article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || article.title} />}
    <div className="article-card-copy"><span className="category">[{article.category}]</span><Link href={`/article/${article.slug}`}><h2>{article.title}</h2></Link>{article.summary && <p>{article.summary}</p>}<small>{article.author}　|　{article.publishedAt}　|　조회 {article.views.toLocaleString()}</small></div>
  </article>
}
