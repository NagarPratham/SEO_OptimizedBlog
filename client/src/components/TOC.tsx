type Item = { id: string; text: string; level: number }
type Props = { items: Item[] }

export default function TOC({ items }: Props) {
	return (
		<nav className="text-sm text-gray-400">
			<div className="font-semibold text-white mb-2">On this page</div>
			<ul className="space-y-1">
				{items.map((i) => (
					<li key={i.id} className={i.level > 2 ? 'pl-4' : ''}>
						<a href={`#${i.id}`} className="hover:text-white">
							{i.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

