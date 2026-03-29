type SeriesPoint = { x: string; y: number }
type Props = { title: string; series: SeriesPoint[] }

// Placeholder sparkline-style chart (CSS-based). Replace with a chart lib if desired.
export default function Chart({ title, series }: Props) {
	const max = Math.max(...series.map((p) => p.y), 1)
	return (
		<div className="rounded-xl border border-white/5 bg-[#111827] p-5">
			<div className="text-sm text-gray-400 mb-2">{title}</div>
			<div className="h-20 flex items-end gap-1">
				{series.map((p) => (
					<div
						key={p.x}
						title={`${p.x}: ${p.y}`}
						className="w-2 bg-indigo-500 rounded-t"
						style={{ height: `${Math.round((p.y / max) * 100)}%` }}
					/>
				))}
			</div>
		</div>
	)
}

