const axios = require('axios');

const difficultyMap = {
  1: 'easy',
  2: 'easy',
  3: 'medium',
  4: 'medium',
  5: 'hard'
};

exports.getQuestions = async (req, res) => {
  try {
    const { difficulty = 1 } = req.query;
    const apiDifficulty = difficultyMap[difficulty] || 'easy';
    
    const response = await axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 1,
        difficulty: apiDifficulty,
        type: 'multiple'
      }
    });

    if (response.data.results.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    const question = response.data.results[0];
    const formattedQuestion = {
      id: Date.now(),
      text: question.question,
      options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
      correctAnswer: question.correct_answer,
      difficulty: parseInt(difficulty)
    };

    res.json(formattedQuestion);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Error fetching question' });
  }
};