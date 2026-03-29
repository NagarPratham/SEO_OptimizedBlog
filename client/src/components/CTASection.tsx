export default function CTASection() {
	return (
		<section className="py-24">
			<div className="glass glow-border rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
				<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass glow-border-accent text-sm text-amber-300">
					<span>⚡</span>
					<span className="font-medium">Stay ahead with AI</span>
				</div>
				<h2 className="mt-4 text-3xl md:text-4xl font-bold">
					Never Miss the <span className="text-gradient-accent">Latest AI Tools</span>
				</h2>
				<p className="section-subtext mt-3 max-w-xl mx-auto">
					We review and compare new AI tools every week. Bookmark our blog or check back for fresh guides.
				</p>
				<a href="/blog" className="inline-block mt-6 rounded-full bg-gradient-primary text-[#0B1220] font-semibold btn-glow px-8 py-3.5">
					Browse All Articles →
				</a>
				<div className="neural-line mt-8 mx-auto max-w-xs" />
			</div>
		</section>
	)
}

