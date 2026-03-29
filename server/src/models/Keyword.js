import mongoose from 'mongoose'
const { Schema } = mongoose

const KeywordSchema = new Schema({
	keyword: { type: String, required: true, index: true, unique: true },
	intent: { type: String, required: true },
	difficulty: { type: Number, required: true },
	currentRank: { type: Number, default: null }
}, { timestamps: true })

export default mongoose.models.Keyword || mongoose.model('Keyword', KeywordSchema)

