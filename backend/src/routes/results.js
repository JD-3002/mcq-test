const express = require('express');
const router = express.Router();
const { saveTestResult } = require('../controllers/resultController');

router.post('/', saveTestResult);

module.exports = router;