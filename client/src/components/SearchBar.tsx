import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SearchBar() {
	const [q, setQ] = useState('')
	const navigate = useNavigate()
	return (
		<motion.form
			onSubmit={(e) => {
				e.preventDefault()
				navigate(`/blog?q=${encodeURIComponent(q)}`)
			}}
			className="rounded-xl border border-white/10 bg-[#0B1220]/60 p-3 shadow-inner"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div className="flex items-center gap-3">
				<input
					value={q}
					onChange={(e) => setQ(e.target.value)}
					placeholder="Search AI tools, prompts, study tips..."
					className="w-full bg-transparent text-white placeholder:text-gray-500 outline-none px-3 py-2"
				/>
				<button type="submit" className="rounded-lg px-4 py-2 bg-[#6366F1] hover:bg-indigo-500 transition">
					Search
				</button>
			</div>
		</motion.form>
	)
}

