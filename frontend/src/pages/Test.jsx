import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { getQuestion } from '../services/api';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    loadQuestion();
  }, [currentDifficulty]);

  const loadQuestion = async () => {
    const fetchedQuestion = await getQuestion(currentDifficulty);
    setCurrentQuestion(fetchedQuestion);
  };

  const handleAnswer = (answer, time) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    setUserAnswers([...userAnswers, { 
      question: currentQuestion.text, 
      answer, 
      correctAnswer: currentQuestion.correctAnswer,
      time, 
      isCorrect,
      difficulty: currentDifficulty
    }]);

    // Implement adaptive difficulty logic
    if (isCorrect && time < 15) {
      setCurrentDifficulty(Math.min(currentDifficulty + 2, 5));
    } else if (isCorrect && time < 30) {
      setCurrentDifficulty(Math.min(currentDifficulty + 1, 5));
    } else {
      setCurrentDifficulty(Math.max(currentDifficulty - 1, 1));
    }

    if (questionNumber < 7) {
      setQuestionNumber(questionNumber + 1);
      loadQuestion();
    } else {
      navigate('/results', { state: { answers: userAnswers } });
    }
  };

  if (!currentQuestion) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Question {questionNumber} of 7</h2>
      <Question 
        question={currentQuestion} 
        onAnswer={handleAnswer} 
      />
      <Timer onTimeUp={() => handleAnswer(null, 31)} />
    </div>
  );
};

export default Test;