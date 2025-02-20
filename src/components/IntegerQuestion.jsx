import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";

const IntegerQuestion = ({ id, question, answer, onNext }) => {
  const [correctAns, setCorrectAns] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false);
  const [attempt, setAttempt] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const inputName = `${id}int`;

  const onSubmit = (data) => {
    const userAnswer = data[inputName];
    const numericAnswer = parseInt(userAnswer, 10);
    const isCorrect = numericAnswer === answer;
    const attemptData = {
      id,
      question,
      selectedAnswer: numericAnswer,
      correct: isCorrect,
    };

    setAttempt(attemptData);
    setCorrectAns(isCorrect);
    setFormDisabled(true);
  };

  const handleNextClick = () => {
    onNext(attempt);
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        {id}. {question}
      </h3>

      {correctAns === true ? (
        <Alert variant="filled" severity="success" className="w-full mb-4">
          Correct
        </Alert>
      ) : correctAns === false ? (
        <Alert variant="filled" severity="error" className="w-full mb-4">
          Incorrect
        </Alert>
      ) : (
        <p className="text-gray-700 mb-4">Please enter your answer below</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={formDisabled} className="space-y-4">
          <div>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded-xl"
              {...register(inputName, {
                required: "This answer is required",
                valueAsNumber: true,
              })}
            />
            {errors[inputName] && (
              <p className="text-red-500 mt-1">{errors[inputName].message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Check Answer
          </button>
        </fieldset>
      </form>

      {formDisabled && (
        <button
          onClick={handleNextClick}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default IntegerQuestion;
