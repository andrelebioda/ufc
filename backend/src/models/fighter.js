import mongoose from "mongoose";

const FighterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: String,
  nationality: String,
  age: Number,
  weightClass: { type: String, required: true },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  draws: { type: Number, default: 0 },
  koWins: { type: Number, default: 0 },
  submissionWins: { type: Number, default: 0 },
  height: String,
  reach: String
}, { timestamps: true });

const fighter = mongoose.model("Fighter", FighterSchema);

export default fighter;