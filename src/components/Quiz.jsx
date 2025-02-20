import React, { useState } from "react";
import sampleQuestions from "../data/sampleQuestions.json";
import Question from "./Question";
import { addAttemptData } from "../db";
import Instructions from "./Instructions";
import { Link } from "react-router-dom";
import IntegerQuestion from "./IntegerQuestion";

const Quiz = () => {
  const mcqs = sampleQuestions.multipleChoiceQuestions.map((q) => ({
    ...q,
    type: "mcq",
  }));
  const intQs = sampleQuestions.integerQuestions.map((q) => ({
    ...q,
    type: "integer",
  }));
  // Combine both arrays in order (first MCQs, then integer questions)
  const allQuestions = [...mcqs, ...intQs];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attemptHistory, setAttemptHistory] = useState([]);
  const [marks, setMarks] = useState(0);

  const handleNext = (attemptData) => {
    if (!attemptData) {
      return;
    }

    setAttemptHistory((prev) => [...prev, attemptData]);

    if (attemptData.correct) {
      setMarks((prevMarks) => prevMarks + 1);
    }

    addAttemptData(attemptData);

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // If we've answered all questions
  if (currentQuestionIndex >= allQuestions.length) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md my-8">
        <h2 className="text-3xl font-bold text-center mb-4">Quiz Completed!</h2>
        <p className="text-xl text-center mb-6">
          Your score:{" "}
          <span className="font-semibold">{marks}</span> /{" "}
          <span className="font-semibold">{allQuestions.length}</span>
        </p>
        <h3 className="text-2xl font-semibold mb-4">Attempt History:</h3>
        <ul className="space-y-3 mb-6">
          {attemptHistory.map((attempt, index) => (
            <li key={index} className="p-3 bg-gray-50 rounded shadow-sm">
              <div className="mb-1">
                <span className="font-semibold">Q{attempt.id}:</span>{" "}
                {attempt.question}
              </div>
              <div className="mb-1">
                Status:{" "}
                <span
                  className={
                    attempt.correct
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {attempt.correct ? "Correct" : "Incorrect"}
                </span>
              </div>
              {attempt.selectedAnswer !== null ? (
                <div className="text-gray-700">
                  Your answer: {attempt.selectedAnswer}
                </div>
              ) : (
                <div className="text-sm text-gray-500">(No answer)</div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/history" className="flex-1">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
              See History
            </button>
          </Link>
          <Link to="/" className="flex-1">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
              Retry Quiz
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = allQuestions[currentQuestionIndex];
  // Render only the current question
  return (
    <>
      <Instructions />
      {currentQuestion.type === "mcq" ? (
        <Question
          key={currentQuestion.id}
          id={currentQuestion.id}
          question={currentQuestion.question}
          options={currentQuestion.options}
          answer={currentQuestion.answer}
          onNext={handleNext}
        />
      ) : (
        <IntegerQuestion
          key={currentQuestion.id}
          id={currentQuestion.id}
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default Quiz;
