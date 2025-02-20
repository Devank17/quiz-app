import React, { useState, useEffect } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-center text-lg font-semibold text-gray-800 p-2 bg-gray-100 rounded shadow">
      Time left: <span className="text-blue-600">{timeLeft}</span> seconds
    </div>
  );
};

export default Timer;
