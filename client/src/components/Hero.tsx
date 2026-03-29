import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import hero from '../assets/hero.png'

export default function Hero() {
	return (
		<section className="relative overflow-hidden rounded-2xl p-0">
			<div className="relative grid gap-8 lg:grid-cols-2 items-center">
				<div>
					<motion.h1
						className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Study smarter with modern AI tools
					</motion.h1>
					<p className="mt-4 text-lg text-gray-400">
						Discover curated AI apps for notes, research, math, and planning—built for students and beginners.
					</p>
					<a href="#featured" className="inline-block mt-6 rounded-lg px-5 py-2.5 bg-[#6366F1] text-white hover:opacity-95 transition">Explore tools</a>
				</div>
				<GlassCard className="p-0 overflow-hidden">
					<img src={hero} alt="AI study tools illustration" className="w-full h-auto object-cover" loading="eager" />
				</GlassCard>
			</div>
		</section>
	)
}

