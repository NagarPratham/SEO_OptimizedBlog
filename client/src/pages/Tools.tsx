import { Helmet } from 'react-helmet-async'
import GlassCard from '../components/GlassCard'

const tools = [
	{ name: 'Perplexity', desc: 'Research assistant with citations', href: 'https://perplexity.ai' },
	{ name: 'Notion AI', desc: 'Notes + planning with AI', href: 'https://www.notion.so' },
	{ name: 'UPDF AI', desc: 'Ask questions inside PDFs', href: 'https://updf.com' },
	{ name: 'Grammarly', desc: 'Tone & clarity checks', href: 'https://grammarly.com' }
]

export default function Tools() {
	return (
		<>
			<Helmet>
				<title>Recommended Tools | AIStudyHub</title>
				<meta name="description" content="Curated AI tools for students: research, notes, PDFs, writing. Replace with affiliate links when ready." />
				<link rel="canonical" href="https://your-domain.com/tools" />
			</Helmet>
			<h1 className="text-2xl font-bold text-white">Recommended Tools</h1>
			<p className="mt-2 text-gray-400">These are safe defaults. You can replace these links with your affiliate URLs later.</p>
			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{tools.map((t) => (
					<GlassCard key={t.name} className="p-5">
						<div className="text-white font-semibold">{t.name}</div>
						<p className="text-sm text-gray-400 mt-1">{t.desc}</p>
						<a href={t.href} target="_blank" rel="noreferrer" className="inline-block mt-3 rounded-lg bg-[#6366F1] px-4 py-2 text-white hover:bg-indigo-500 transition">
							Visit
						</a>
					</GlassCard>
				))}
			</div>
		</>
	)
}

