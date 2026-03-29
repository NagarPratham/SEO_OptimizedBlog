import { ReactNode } from 'react'
import clsx from 'clsx'

export default function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<div
			className={clsx(
				'rounded-2xl border border-white/10 bg-[#0B1220]/40 backdrop-blur',
				'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]',
				className
			)}
		>
			{children}
		</div>
	)
}

