import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getArticleImage } from '../lib/images'

type Props = {
	slug: string
	title: string
	excerpt: string
	date?: string
	tags?: string[]
}

export default function ArticleCard({ slug, title, excerpt, date, tags }: Props) {
	const img = getArticleImage(slug, tags)
	return (
		<motion.article className="glass glow-border rounded-2xl overflow-hidden group">
			<Link to={`/blog/${slug}`} className="block">
				<div className="relative overflow-hidden">
					<img src={img} alt={title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
					<div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent" />
					{tags?.slice(0, 2).map((t) => (
						<span key={t} className="absolute bottom-3 left-3 tag-pill mr-2">{t}</span>
					))}
				</div>
				<div className="p-6">
				<h3 className="text-lg font-semibold text-white">{title}</h3>
				{date ? <div className="mt-1 text-xs text-gray-400">{new Date(date).toLocaleDateString()}</div> : null}
				<p className="mt-2 text-sm text-gray-400 line-clamp-2">{excerpt}</p>
				<div className="mt-4">
					<span className="text-sm text-[#63e]">Read article →</span>
				</div>
				</div>
			</Link>
		</motion.article>
	)
}

