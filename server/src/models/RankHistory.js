import mongoose from 'mongoose'
const { Schema, Types } = mongoose

const RankHistorySchema = new Schema({
	keywordId: { type: Types.ObjectId, ref: 'Keyword', required: true, index: true },
	date: { type: Date, required: true },
	rank: { type: Number, required: true }
}, { timestamps: true })

export default mongoose.models.RankHistory || mongoose.model('RankHistory', RankHistorySchema)

