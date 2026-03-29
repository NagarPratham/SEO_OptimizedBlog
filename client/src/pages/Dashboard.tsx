import { Helmet } from 'react-helmet-async'
import KpiCard from '../components/KpiCard'
import Chart from '../components/Chart'
import Table from '../components/Table'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

type Keyword = { keyword: string; difficulty: number; intent: string; currentRank?: number }

export default function Dashboard() {
	const [keywords, setKeywords] = useState<Keyword[]>([])
	const [form, setForm] = useState<Keyword>({ keyword: '', difficulty: 0, intent: 'Informational' })
	const [rankForm, setRankForm] = useState({ keyword: '', rank: 50 })

	useEffect(() => {
		api.get('/api/keywords').then((res) => setKeywords(res.data || [])).catch(() => setKeywords([]))
	}, [])

	const columns = useMemo(() => ([
		{ key: 'keyword', header: 'Keyword' },
		{ key: 'intent', header: 'Intent' },
		{ key: 'difficulty', header: 'KD' },
		{ key: 'currentRank', header: 'Rank' },
	] as const), [])

	return (
		<>
			<Helmet>
				<title>Analytics Dashboard | AIStudyHub</title>
				<meta name="description" content="Track keyword rankings, traffic, and CTR for AIStudyHub." />
				<link rel="canonical" href="https://your-domain.com/dashboard" />
			</Helmet>
			<h1 className="text-2xl font-bold text-white">Analytics</h1>
			<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard label="Total Keywords" value={String(keywords.length)} />
				<KpiCard label="Avg Rank" value={avgRank(keywords)} />
				<KpiCard label="Traffic (est.)" value="—" />
				<KpiCard label="Avg CTR" value="—" />
			</div>
			<div className="mt-6 grid gap-6 lg:grid-cols-2">
				<Chart title="7‑day Impressions (demo)" series={demoSeries} />
				<Chart title="7‑day Clicks (demo)" series={demoSeries2} />
			</div>
			<div className="mt-8 grid gap-6 lg:grid-cols-2">
				<div className="rounded-xl border border-white/10 bg-[#111827] p-5">
					<div className="font-semibold text-white mb-3">Add keyword</div>
					<form
						className="grid gap-3"
						onSubmit={async (e) => {
							e.preventDefault()
							await api.post('/api/keywords', form).catch(() => {})
							const res = await api.get('/api/keywords').catch(() => ({ data: [] }))
							setKeywords(res?.data || [])
						}}
					>
						<input className="rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Keyword"
							value={form.keyword} onChange={(e) => setForm({ ...form, keyword: e.target.value })} />
						<div className="grid grid-cols-2 gap-3">
							<select className="rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none"
								value={form.intent} onChange={(e) => setForm({ ...form, intent: e.target.value })}>
								<option className="bg-[#0B1220]">Informational</option>
								<option className="bg-[#0B1220]">Commercial</option>
								<option className="bg-[#0B1220]">Transactional</option>
							</select>
							<input type="number" min={0} max={100} className="rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Difficulty"
								value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: Number(e.target.value) || 0 })} />
						</div>
						<button className="rounded-lg bg-[#6366F1] hover:bg-indigo-500 transition px-4 py-2 text-white w-fit">Save</button>
					</form>
				</div>
				<div className="rounded-xl border border-white/10 bg-[#111827] p-5">
					<div className="font-semibold text-white mb-3">Post rank update</div>
					<form
						className="grid gap-3"
						onSubmit={async (e) => {
							e.preventDefault()
							await api.post('/api/rank-update', rankForm).catch(() => {})
							const res = await api.get('/api/keywords').catch(() => ({ data: [] }))
							setKeywords(res?.data || [])
						}}
					>
						<input className="rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Keyword"
							value={rankForm.keyword} onChange={(e) => setRankForm({ ...rankForm, keyword: e.target.value })} />
						<input type="number" min={1} className="rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none" placeholder="Rank (e.g., 25)"
							value={rankForm.rank} onChange={(e) => setRankForm({ ...rankForm, rank: Number(e.target.value) || 0 })} />
						<button className="rounded-lg bg-[#6366F1] hover:bg-indigo-500 transition px-4 py-2 text-white w-fit">Update</button>
					</form>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-lg font-semibold text-white mb-3">Keyword table</h2>
				<Table columns={columns as any} rows={keywords} />
			</div>
		</>
	)
}

function avgRank(keywords: Keyword[]): string {
	const ranks = keywords.map((k) => k.currentRank).filter((n): n is number => typeof n === 'number')
	if (!ranks.length) return '—'
	const avg = ranks.reduce((a, b) => a + b, 0) / ranks.length
	return `#${Math.round(avg)}`
}

const demoSeries = [
	{ x: 'D1', y: 12 },
	{ x: 'D2', y: 22 },
	{ x: 'D3', y: 18 },
	{ x: 'D4', y: 30 },
	{ x: 'D5', y: 24 },
	{ x: 'D6', y: 28 },
	{ x: 'D7', y: 35 },
]

const demoSeries2 = [
	{ x: 'D1', y: 2 },
	{ x: 'D2', y: 3 },
	{ x: 'D3', y: 4 },
	{ x: 'D4', y: 5 },
	{ x: 'D5', y: 5 },
	{ x: 'D6', y: 6 },
	{ x: 'D7', y: 7 },
]

