import { Router } from 'express'
import Keyword from '../models/Keyword.js'
import RankHistory from '../models/RankHistory.js'

const router = Router()

router.post('/', async (req, res) => {
	const { keyword, rank, date } = req.body || {}
	if (!keyword || typeof rank !== 'number') return res.status(400).json({ error: 'invalid' })
	try {
		let kw = await Keyword.findOne({ keyword })
		if (!kw) kw = await Keyword.create({ keyword, intent: 'Unknown', difficulty: 0, currentRank: rank })
		kw.currentRank = rank
		await kw.save()
		await RankHistory.create({ keywordId: kw._id, rank, date: date ? new Date(date) : new Date() })
		res.json({ ok: true })
	} catch (e) {
		res.status(500).json({ error: 'failed' })
	}
})

export default router

