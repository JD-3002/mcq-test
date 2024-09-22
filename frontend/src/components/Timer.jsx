import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="mt-4 text-center">
      <p className="text-xl font-semibold">Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;