type Props = { label: string; value: string; delta?: string }

export default function KpiCard({ label, value, delta }: Props) {
	return (
		<div className="rounded-xl border border-white/5 bg-[#111827] p-5">
			<div className="text-sm text-gray-400">{label}</div>
			<div className="mt-1 text-2xl font-semibold text-white">{value}</div>
			{delta ? <div className="mt-1 text-xs text-emerald-400">▲ {delta}</div> : null}
		</div>
	)
}

