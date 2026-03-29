import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TOC from '../components/TOC'
import StickySidebar from '../components/StickySidebar'
import articles from '../data/articles.json'
import ArticleCard from '../components/ArticleCard'
import { getArticleImage } from '../lib/images'

export default function Article() {
	const { slug } = useParams()
	const article = articles.find((a) => a.slug === slug)
	if (!article) {
		return <div className="text-gray-400">Article not found.</div>
	}
	const related = articles
		.filter((a) => a.slug !== slug && a.tags?.some((t: string) => article.tags?.includes(t)))
		.slice(0, 4)
	const cover = getArticleImage(article.slug, article.tags)

	return (
		<>
			<Helmet>
				<title>{article.title} | AIStudyHub</title>
				<meta name="description" content={article.metaDescription} />
				<link rel="canonical" href={`https://your-domain.com/blog/${article.slug}`} />
			</Helmet>
			<div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_384px] gap-10">
				<article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-p:leading-7">
					<div className="mb-6 rounded-2xl overflow-hidden">
						<img src={cover} alt={article.title} className="w-full h-64 md:h-96 object-cover" loading="eager" />
					</div>
					<h1 className="text-3xl font-bold text-white">{article.title}</h1>
					<div className="mt-4 text-sm text-gray-400">{article.date} • {article.readingTime} min read</div>
					<div className="mt-6 space-y-6">
						{article.content.map((block, idx) => {
							if (block.type === 'h2') return <h2 id={block.id} key={idx} className="text-2xl font-semibold text-white">{block.text}</h2>
							if (block.type === 'h3') return <h3 id={block.id} key={idx} className="text-xl font-semibold text-white">{block.text}</h3>
							if (block.type === 'p') return <p key={idx} className="text-gray-300">{block.text}</p>
							if (block.type === 'ul') return (
								<ul key={idx} className="list-disc pl-6 space-y-2">
									{block.items.map((li: string) => <li key={li}>{li}</li>)}
								</ul>
							)
							if (block.type === 'cta') return (
								<div key={idx} className="rounded-xl border border-white/10 bg-[#111827] p-5">
									<div className="text-white font-semibold">{block.title}</div>
									<p className="text-gray-400">{block.text}</p>
									<a href={block.href} className="inline-block mt-3 rounded-lg bg-[#6366F1] px-4 py-2 text-white hover:bg-indigo-500 transition">
										{block.cta}
									</a>
								</div>
							)
							return null
						})}
					</div>
					{/* Inline CTA (affiliate-ready) */}
					<div className="mt-10 rounded-xl border border-white/10 bg-[#111827] p-6">
						<div className="text-white font-semibold">Recommended Tools</div>
						<p className="text-gray-400 mt-1">Curated picks to speed up your study workflow.</p>
						<div className="mt-3 flex flex-wrap gap-3">
							{article.recommended?.map((r) => {
								const link = r.href && r.href.includes('your-affiliate-link.com') ? '/tools' : r.href
								return (
									<a key={r.title} href={link} target={link?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="rounded-lg bg-[#6366F1] px-4 py-2 text-white hover:bg-indigo-500 transition">
										{r.title}
									</a>
								)
							})}
						</div>
					</div>
					{/* Related articles */}
					{related.length ? (
						<section className="mt-10">
							<h2 className="text-xl font-semibold text-white">Related articles</h2>
							<div className="mt-4 grid gap-6 sm:grid-cols-2">
								{related.map((a) => (
									<ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} date={a.date} tags={a.tags} />
								))}
							</div>
						</section>
					) : null}
				</article>
				<StickySidebar>
					<div className="rounded-xl border border-white/10 bg-[#111827] p-5">
						<TOC items={article.toc} />
					</div>
					<div className="mt-6 rounded-xl border border-white/10 bg-[#111827] p-5">
						<div className="font-semibold text-white mb-2">Recommended Tools</div>
						<ul className="space-y-2 text-sm">
							{article.recommended?.map((r) => (
								<li key={r.title}>
									<a className="text-[#6366F1] hover:text-indigo-400" href={r.href} target="_blank" rel="noreferrer">{r.title}</a>
									<span className="text-gray-400"> — {r.note}</span>
								</li>
							))}
						</ul>
					</div>
				</StickySidebar>
			</div>
		</>
	)
}

