export default function Footer() {
	return (
		<footer className="mt-16 border-t border-border/50 bg-card/30">
			<div className="bg-dots opacity-30">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						<div>
							<div className="rounded-lg bg-gradient-primary w-8 h-8 mb-3" />
							<div className="text-white font-semibold">AIStudyHub</div>
							<p className="mt-2 text-sm text-gray-400">Curated guides and tools for students using AI to learn faster.</p>
						</div>
						<div>
							<div className="text-sm font-semibold uppercase tracking-wider text-gray-400">Resources</div>
							<ul className="mt-3 space-y-2 text-sm">
								<li><a href="/blog" className="hover:text-primary">Blog</a></li>
								<li><a href="/tools" className="hover:text-primary">Tools</a></li>
								<li><a href="/sitemap.xml" className="hover:text-primary">Sitemap</a></li>
							</ul>
						</div>
						<div>
							<div className="text-sm font-semibold uppercase tracking-wider text-gray-400">Topics</div>
							<ul className="mt-3 space-y-2 text-sm">
								<li><a href="/blog" className="hover:text-primary">Note‑taking</a></li>
								<li><a href="/blog" className="hover:text-primary">Summarization</a></li>
								<li><a href="/blog" className="hover:text-primary">Productivity</a></li>
							</ul>
						</div>
						<div>
							<div className="text-sm font-semibold uppercase tracking-wider text-gray-400">Project</div>
							<ul className="mt-3 space-y-2 text-sm">
								<li><a href="/robots.txt" className="hover:text-primary">Robots</a></li>
								<li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></li>
							</ul>
						</div>
					</div>
					<div className="neural-line mt-12 mb-6" />
					<div className="flex items-center justify-between text-xs text-gray-500">
						<p>&copy; {new Date().getFullYear()} AIStudyHub. All rights reserved.</p>
						<p>Built with React + Tailwind</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

