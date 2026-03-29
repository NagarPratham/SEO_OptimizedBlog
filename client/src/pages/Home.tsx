import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ArticleCard from '../components/ArticleCard'
import FeaturedTools from '../components/FeaturedTools'
import featured from '../data/articles.json'
import Container from '../components/Container'
import CTASection from '../components/CTASection'
import { getArticleImage } from '../lib/images'

export default function Home() {
	const pillar = featured.find((a) => a.slug === 'ai-tools-for-students')
	const latest = [...featured].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 6)
	return (
		<>
			<Helmet>
				<title>AI Tools for Students & Beginners | AIStudyHub</title>
				<meta name="description" content="Discover the best AI tools for students and beginners: notes, research, math, planning, and more. Curated guides, reviews, and study prompts." />
				<link rel="canonical" href="https://your-domain.com/" />
			</Helmet>
			<Container className="py-10">
				<Hero />
			</Container>
			<Container>
				{pillar ? (
					<section className="mt-4">
						<h2 className="section-heading">Featured Guide</h2>
						<div className="mt-4 glass glow-border rounded-2xl overflow-hidden grid md:grid-cols-2">
							<img src={getArticleImage(pillar.slug, pillar.tags)} alt={pillar.title} className="h-64 md:h-full w-full object-cover" />
							<div className="p-6 md:p-8 flex flex-col justify-center">
								<div className="flex gap-2">
									<span className="tag-pill">Guides</span>
									<span className="tag-pill">Featured</span>
								</div>
								<h3 className="mt-3 text-2xl md:text-3xl font-bold">{pillar.title}</h3>
								<p className="mt-2 text-sm text-gray-400">{pillar.excerpt}</p>
								<a href={`/blog/${pillar.slug}`} className="mt-4 text-primary">Read article →</a>
							</div>
						</div>
					</section>
				) : null}
			</Container>
			<Container>
				<section id="featured" className="mt-10">
					<h2 className="section-heading">Latest Articles</h2>
					<div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{latest.map((a) => (
							<ArticleCard key={a.slug} slug={a.slug} title={a.title} excerpt={a.excerpt} date={a.date} tags={a.tags} />
						))}
					</div>
				</section>
				<FeaturedTools />
				<CTASection />
			</Container>
		</>
	)
}

