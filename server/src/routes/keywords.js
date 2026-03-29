import { Router } from 'express'
import Keyword from '../models/Keyword.js'

const router = Router()

// In-memory fallback if no Mongo
let memory = [
	{ keyword: 'ai tools for students free', intent: 'Informational/Transactional', difficulty: 17, currentRank: 35 },
	{ keyword: 'best ai note taking tools for students', intent: 'Commercial', difficulty: 22, currentRank: 41 },
	{ keyword: 'chatgpt prompts for studying', intent: 'Informational', difficulty: 18, currentRank: 29 }
]

router.get('/', async (_req, res) => {
	try {
		if (!Keyword.db?.readyState) return res.json(memory)
		const list = await Keyword.find().sort({ createdAt: -1 }).lean()
		res.json(list)
	} catch (e) {
		res.status(500).json({ error: 'failed' })
	}
})

router.post('/', async (req, res) => {
	const { keyword, intent, difficulty } = req.body || {}
	if (!keyword || !intent || typeof difficulty !== 'number') return res.status(400).json({ error: 'invalid' })
	try {
		if (!Keyword.db?.readyState) {
			const existing = memory.find((m) => m.keyword === keyword)
			if (existing) return res.status(409).json({ error: 'exists' })
			memory.unshift({ keyword, intent, difficulty, currentRank: null })
			return res.status(201).json({ ok: true })
		}
		await Keyword.create({ keyword, intent, difficulty })
		res.status(201).json({ ok: true })
	} catch (e) {
		res.status(500).json({ error: 'failed' })
	}
})

export default router

