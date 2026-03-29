import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import keywordsRouter from './src/routes/keywords.js'
import rankRouter from './src/routes/rank.js'
import historyRouter from './src/routes/history.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const MONGO_URI = process.env.MONGO_URI || ''
const PORT = Number(process.env.PORT || 4000)

async function start() {
	if (MONGO_URI) {
		await mongoose.connect(MONGO_URI)
		console.log('Connected to MongoDB')
	} else {
		console.warn('MONGO_URI not set. Running with in-memory storage.')
	}
	app.use('/api/keywords', keywordsRouter)
	app.use('/api/rank-update', rankRouter)
	app.use('/api/history', historyRouter)

	app.get('/api/health', (_req, res) => res.json({ ok: true }))

	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`)
	})
}

start().catch((err) => {
	console.error(err)
	process.exit(1)
})

