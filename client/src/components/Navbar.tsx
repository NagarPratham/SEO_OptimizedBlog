import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
	const { pathname } = useLocation()
	const [open, setOpen] = useState(false)
	return (
		<header className="sticky top-0 z-50 backdrop-blur bg-gradient-to-b from-[#0B1220]/90 to-transparent border-b border-white/5">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link to="/" className="text-xl font-semibold tracking-tight">
					<span className="text-white">AI</span>
					<span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Study</span>
					<span className="text-white">Hub</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink to="/blog" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
						Blog
					</NavLink>
					<NavLink to="/tools" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
						Tools
					</NavLink>
					<NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
						Dashboard
					</NavLink>
				</nav>
				<button onClick={() => setOpen((v) => !v)} className="md:hidden text-gray-300 hover:text-white">
					{open ? 'Close' : 'Menu'}
				</button>
			</div>
			{pathname !== '/' ? (
				<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			) : null}
			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						className="md:hidden border-t border-white/5 bg-[#0B1220]/95"
					>
						<div className="px-4 py-3 flex flex-col gap-3">
							<NavLink to="/blog" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">Blog</NavLink>
							<NavLink to="/tools" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">Tools</NavLink>
							<NavLink to="/dashboard" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">Dashboard</NavLink>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}

