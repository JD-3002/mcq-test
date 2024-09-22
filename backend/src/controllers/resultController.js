const TestResult = require('../models/TestResult');

exports.saveTestResult = async (req, res) => {
  try {
    const result = new TestResult(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving test result:', error);
    res.status(500).json({ error: 'Error saving test result' });
  }
};