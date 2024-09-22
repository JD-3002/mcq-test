const mongoose = require('mongoose');

const TestResultSchema = new mongoose.Schema({
  userId: String,
  totalScore: Number,
  accuracy: Number,
  averageResponseTime: Number,
  difficultyProgression: [Number],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TestResult', TestResultSchema);