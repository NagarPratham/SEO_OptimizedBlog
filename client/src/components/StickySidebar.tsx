import { ReactNode } from 'react'

export default function StickySidebar({ children }: { children: ReactNode }) {
	return <aside className="hidden lg:block lg:w-80 xl:w-96 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto">{children}</aside>
}

