import React from "react";

const Instructions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 my-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions:</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>
          For multiple-choice questions, select the one best answer (A, B, C, or D).
        </li>
        <li>
          For integer-type questions, write your numerical answer clearly.
        </li>
        <li>No calculators unless specified.</li>
        <li>You have 30 minutes to complete this quiz.</li>
      </ol>
    </div>
  );
};

export default Instructions;
