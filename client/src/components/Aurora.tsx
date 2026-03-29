import { motion } from 'framer-motion'

export default function Aurora() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<motion.div
				className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)]"
				animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0], rotate: [0, 8, -6, 0] }}
				transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
			/>
			<motion.div
				className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.28),transparent_60%)]"
				animate={{ x: [0, -15, 10, 0], y: [0, 12, -8, 0], rotate: [0, -10, 6, 0] }}
				transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
			/>
			<div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.04),transparent_30%,rgba(255,255,255,0.04))]" />
		</div>
	)
}

