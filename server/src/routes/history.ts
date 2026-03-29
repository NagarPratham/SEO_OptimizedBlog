import { Router } from 'express'
import Keyword from '../models/Keyword.js'
import RankHistory from '../models/RankHistory.js'

const router = Router()

router.get('/', async (_req, res) => {
	try {
		const hist = await RankHistory.find().sort({ date: -1 }).limit(500).lean()
		res.json(hist)
	} catch {
		// Fallback empty if no DB
		res.json([])
	}
})

router.get('/:keyword', async (req, res) => {
	try {
		const kw = await Keyword.findOne({ keyword: req.params.keyword })
		if (!kw) return res.json([])
		const hist = await RankHistory.find({ keywordId: kw._id }).sort({ date: -1 }).lean()
		res.json(hist)
	} catch {
		res.json([])
	}
})

export default router

