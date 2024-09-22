import React from 'react';

const Question = ({ question, onAnswer }) => {
  const startTime = Date.now();

  const handleAnswer = (selectedAnswer) => {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
    onAnswer(selectedAnswer, timeTaken);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: question.text }}></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <span dangerouslySetInnerHTML={{ __html: option }}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;