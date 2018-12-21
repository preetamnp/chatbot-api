import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const botResponseSchema = new Schema({
    intent: { type: String },
    message: { type: String }
})
export default mongoose.model('BotResponse', botResponseSchema,'BotResponses')