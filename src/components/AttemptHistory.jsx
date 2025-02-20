import React, { useEffect, useState } from "react";
import { getAllAttempts } from "../db";
import { Link } from "react-router-dom";

const AttemptHistory = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const fetchAttempts = async () => {
      const storedAttempts = await getAllAttempts();
      setAttempts(storedAttempts);
    };
    fetchAttempts();
  }, []);

  return (
    <div className="bg-indigo-300 p-6 m-4 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Stored Attempt History:
      </h3>
      <div className="space-y-4">
        {attempts.map((attempt) => (
          <div
            key={attempt.storeId}
            className="bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto"
          >
            <h4 className="text-xl font-semibold mb-2">
              Q{attempt.id}: {attempt.question}
            </h4>
            <p
              className={`font-bold ${
                attempt.correct ? "text-green-600" : "text-red-600"
              }`}
            >
              {attempt.correct ? "Correct" : "Incorrect"}
            </p>
            {attempt.selectedAnswer !== null ? (
              <p className="mt-1 text-gray-700">
                Your answer: {attempt.selectedAnswer}
              </p>
            ) : (
              <p className="mt-1 text-sm text-gray-500">(No answer)</p>
            )}
          </div>
        ))}
      </div>
      <Link to="/quiz" className="flex-1">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold my-6 py-2 px-4 rounded transition duration-200">
          Retry Quiz
        </button>
      </Link>
    </div>
  );
};

export default AttemptHistory;
