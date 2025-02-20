import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import Timer from "./Timer";

const Question = ({ id, question, options, answer, onNext }) => {
  const [correctAns, setCorrectAns] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const inpName = `${id}a`;

  // Called when user manually submits the form
  const onSubmit = (data) => {
    const chosenAnswer = data[inpName];
    const isCorrect = chosenAnswer === answer;

    const attemptData = {
      id,
      question,
      selectedAnswer: chosenAnswer,
      correct: isCorrect,
    };

    setCorrectAns(isCorrect);
    setFormDisabled(true);
  };

  // Called if time runs out
  const handleTimeUp = () => {
    if (!formDisabled) {
      setFormDisabled(true);
      setCorrectAns(false);

      const attemptData = {
        id,
        question,
        selectedAnswer: null,
        correct: false,
      };
      onNext(attemptData);
    }
  };

  const handleNextClick = () => {
    const chosenAnswer = document.querySelector(
      `input[name="${inpName}"]:checked`
    )?.value;
    const isCorrect = correctAns === true;

    const attemptData = {
      id,
      question,
      selectedAnswer: chosenAnswer || null,
      correct: isCorrect,
    };
    onNext(attemptData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        {id}. {question}
      </h3>

      {/* Timer */}
      <div className="mb-4">
        <Timer duration={30} onTimeUp={handleTimeUp} />
      </div>

      {/* Feedback */}
      <div className="mb-4">
        {correctAns === true ? (
          <Alert variant="filled" severity="success" className="w-full">
            Correct
          </Alert>
        ) : correctAns === false ? (
          <Alert variant="filled" severity="error" className="w-full">
            Incorrect
          </Alert>
        ) : (
          <p className="text-gray-700">Select from Option</p>
        )}
      </div>

      {/* Quiz Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={formDisabled} className="space-y-4">
          <div className="flex items-center">
            <input
              className="mr-2"
              value={options.A}
              {...register(inpName, { required: true })}
              type="radio"
              id={options.A}
            />
            <label htmlFor={options.A} className="text-gray-800">
              {options.A}
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              value={options.B}
              {...register(inpName, { required: true })}
              type="radio"
              id={options.B}
            />
            <label htmlFor={options.B} className="text-gray-800">
              {options.B}
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              value={options.C}
              {...register(inpName, { required: true })}
              type="radio"
              id={options.C}
            />
            <label htmlFor={options.C} className="text-gray-800">
              {options.C}
            </label>
          </div>
          <div className="flex items-center pb-2">
            <input
              className="mr-2"
              value={options.D}
              {...register(inpName, { required: true })}
              type="radio"
              id={options.D}
            />
            <label htmlFor={options.D} className="text-gray-800">
              {options.D}
            </label>
          </div>
          {errors[inpName] && (
            <p className="text-red-500">This question is required</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Check Answer
          </button>
        </fieldset>
      </form>

      {/* Next Button */}
      {formDisabled && (
        <button
          onClick={handleNextClick}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Question;
