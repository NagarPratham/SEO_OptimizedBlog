import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Dashboard from './pages/Dashboard'
import Tools from './pages/Tools'

export default function App() {
	return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<Article />} />
				<Route path="/tools" element={<Tools />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</MainLayout>
	)
}

