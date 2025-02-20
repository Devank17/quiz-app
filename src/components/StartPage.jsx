import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz!</h1>
        <p className="text-gray-700 mb-6">
          Test your knowledge with our interactive quiz. Ready to begin?
        </p>
        <button
          onClick={handleStartQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartPage;
