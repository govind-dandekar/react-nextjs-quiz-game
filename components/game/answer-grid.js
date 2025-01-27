"use client";

import { useState } from "react";

function AnswerGrid({ answers, onSubmitAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState({
    index: "none",
    flag: undefined,
  });

  function handleAnswerSelect(index, answerFlag) {
    setSelectedAnswer({
      index: index,
      flag: answerFlag,
    });
  }

  return (
    // manage selected CSS with state (since user can focus on background)
    <>
      <div className="grid grid-cols-2 w-1/2 mt-6">
        {answers.map((answer, index) => {
          return (
            <button
              onClick={() => handleAnswerSelect(index, answer.correct)}
              key={answer.text}
              className="bg-cyan-600 rounded-xl py-3 px-2 mt-3 mx-3 hover:bg-cyan-800 focus:bg-cyan-800
						focus:outline-4 focus:outline-offset-2 focus:outline-dotted text-3xl truncate"
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onSubmitAnswer(selectedAnswer.flag)}
        className="bg-cyan-500 rounded-xl py-2 px-4 mt-8 mx-3 hover:bg-cyan-800 hover:scale-110 transition duration-300 text-3xl"
      >
        {selectedAnswer === "none" ? "Pick an Answer!" : "Submit Answer!"}
      </button>
    </>
  );
}

export default AnswerGrid;
