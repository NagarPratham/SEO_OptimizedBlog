import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ArticleCard from '../components/ArticleCard'
import all from '../data/articles.json'

function useQuery() {
	const { search } = useLocation()
	return useMemo(() => new URLSearchParams(search), [search])
}

export default function Blog() {
	const query = useQuery()
	const initial = query.get('q') || ''
	const [q, setQ] = useState(initial)
	const [activeTags, setActiveTags] = useState<string[]>([])

	const tags = useMemo(() => {
		const t = new Set<string>()
		all.forEach((a) => a.tags?.forEach((x) => t.add(x)))
		return Array.from(t).sort()
	}, [])

	const filtered = all
		.filter((a) => {
			const hay = `${a.title} ${a.excerpt} ${a.tags?.join(' ')}`.toLowerCase()
			return hay.includes(q.toLowerCase())
		})
		.filter((a) => {
			if (!activeTags.length) return true
			const at = new Set(a.tags || [])
			return activeTags.every((t) => at.has(t))
		})
		.sort((a, b) => (b.date || '').localeCompare(a.date || ''))

	return (
		<>
			<Helmet>
				<title>Blog | AIStudyHub</title>
				<meta name="description" content="Browse guides and reviews of AI tools for studying, note‑taking, research, and productivity." />
				<link rel="canonical" href="https://your-domain.com/blog" />
			</Helmet>
			<div className="flex items-center justify-between gap-4">
				<h1 className="text-2xl font-bold text-white">All articles</h1>
				<input
					value={q}
					onChange={(e) => setQ(e.target.value)}
					placeholder="Search or filter posts…"
					className="rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none"
				/>
			</div>
			{/* Tag filters */}
			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((t) => {
					const on = activeTags.includes(t)
					return (
						<button
							key={t}
							onClick={() =>
								setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
							}
							className={on ? 'text-xs rounded-full px-3 py-1 bg-[#6366F1] text-white' : 'text-xs rounded-full px-3 py-1 border border-white/10 text-gray-300 hover:border-white/20'}
						>
							{t}
						</button>
					)
				})}
				{activeTags.length ? (
					<button onClick={() => setActiveTags([])} className="text-xs rounded-full px-3 py-1 border border-white/10 text-gray-300 hover:border-white/20">
						Clear
					</button>
				) : null}
			</div>
			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filtered.map((a) => (
					<motion.div
						key={a.slug}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.35, delay: 0.05 }}
					>
						<ArticleCard slug={a.slug} title={a.title} excerpt={a.excerpt} date={a.date} tags={a.tags} />
					</motion.div>
				))}
			</div>
		</>
	)
}

