type Column<T> = { key: keyof T; header: string }
type Props<T> = { columns: Column<T>[]; rows: T[] }

export default function Table<T extends Record<string, unknown>>({ columns, rows }: Props<T>) {
	return (
		<div className="overflow-x-auto rounded-xl border border-white/5">
			<table className="min-w-full divide-y divide-white/10">
				<thead className="bg-[#0B1220]">
					<tr>
						{columns.map((c) => (
							<th key={String(c.key)} className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								{c.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-white/10 bg-[#111827]">
					{rows.map((r, idx) => (
						<tr key={idx} className="hover:bg-white/5">
							{columns.map((c) => (
								<td key={String(c.key)} className="px-4 py-3 text-sm text-gray-300">
									{String(r[c.key] ?? '')}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

