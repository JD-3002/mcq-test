import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveTestResult } from '../services/api';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (location.state?.answers) {
      const answers = location.state.answers;
      const totalQuestions = answers.length;
      const correctAnswers = answers.filter(a => a.isCorrect).length;
      const totalScore = answers.reduce((sum, a) => sum + (a.isCorrect ? a.difficulty : 0), 0);
      const accuracy = (correctAnswers / totalQuestions) * 100;
      const averageResponseTime = answers.reduce((sum, a) => sum + a.time, 0) / totalQuestions;
      const difficultyProgression = answers.map(a => a.difficulty);

      const resultsData = {
        userId: 'user123', // Replace with actual user ID when you implement authentication
        totalScore,
        accuracy,
        averageResponseTime,
        difficultyProgression
      };

      setResults(resultsData);
      saveTestResult(resultsData).catch(error => {
        console.error('Error saving test result:', error);
      });
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  if (!results) return <div>Loading results...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Test Results</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-2">Total Score: {results.totalScore}</p>
        <p className="text-lg mb-2">Accuracy: {results.accuracy.toFixed(2)}%</p>
        <p className="text-lg mb-4">Average Response Time: {results.averageResponseTime.toFixed(2)} seconds</p>
        
        <h3 className="text-xl font-semibold mb-2">Difficulty Progression</h3>
        <div className="flex items-center justify-center space-x-1 mb-4">
          {results.difficultyProgression.map((difficulty, index) => (
            <div 
              key={index} 
              className="w-8 h-8 flex items-center justify-center rounded"
              style={{backgroundColor: `rgba(59, 130, 246, ${difficulty * 0.2})`}}
            >
              {difficulty}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Take Another Test
        </button>
      </div>
    </div>
  );
};

export default Results;