import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = { children: ReactNode }

export default function MainLayout({ children }: Props) {
	return (
		<div className="min-h-screen bg-[#0A0F1F] text-slate-300">
			<Navbar />
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
			<Footer />
		</div>
	)
}

