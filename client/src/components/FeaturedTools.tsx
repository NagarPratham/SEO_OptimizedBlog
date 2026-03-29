type Tool = {
	name: string
	desc: string
	href: string
	badge?: string
}

const tools: Tool[] = [
	{ name: 'Notion AI', desc: 'Notes + planning with templates', href: 'https://notion.so', badge: 'Student' },
	{ name: 'Perplexity', desc: 'Research assistant with citations', href: 'https://perplexity.ai' },
	{ name: 'Obsidian', desc: 'Local-first markdown & plugins', href: 'https://obsidian.md' },
	{ name: 'Tana AI', desc: 'Advanced structure & supertags', href: 'https://tana.inc' }
]

export default function FeaturedTools() {
	return (
		<section className="mt-10">
			<h2 className="text-xl font-semibold text-white">Recommended Tools</h2>
			<div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{tools.map((t) => (
					<a key={t.name} href={t.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/5 bg-[#111827] p-5 hover:border-white/10 transition">
						<div className="flex items-center justify-between">
							<div className="text-white font-semibold">{t.name}</div>
							{t.badge ? <span className="text-xs rounded-md bg-indigo-500/20 text-indigo-300 px-2 py-0.5">{t.badge}</span> : null}
						</div>
						<p className="text-sm text-gray-400 mt-1">{t.desc}</p>
					</a>
				))}
			</div>
		</section>
	)
}

