"use client";

import { useState } from "react";

import CorrectVsIncorrectAlert from "./correct-vs-incorrect-alert";

// need to re-factor answer grid
function AnswerGrid({ answers, onSubmitAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState({
    index: "none",
    flag: false,
  });

  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  function handleAnswerSelect(index, answerFlag) {
    setSelectedAnswer((prevState) => {
      return { ...prevState, index: index, flag: answerFlag };
    });
  }

  function handleAnswerSubmit() {
    setAnswerSubmitted(true);

    setTimeout(() => {
      onSubmitAnswer(selectedAnswer.flag);
      // reset component state after answer is submitted
      setAnswerSubmitted(false);
      setSelectedAnswer({
        index: "none",
        flag: false,
      });
    }, 1000);
  }

  // refactor with @/ui button components
  // move correct indicator to its own component
  let buttonCSS =
    "bg-cyan-500 rounded-xl py-3 px-2 mt-3 mx-3 hover:bg-cyan-800 focus:bg-cyan-800 focus:outline-4 focus:outline-offset-2 focus:outline-dotted text-3xl text-wrap";

  let selectedButtonCSS =
    "text-3xl rounded-xl py-3 px-2 mt-3 mx-3 bg-cyan-800 outline-4 outline-offset-2 outline-dotted text-wrap";

  return (
    <>
      <div className="grid grid-cols-2 w-1/2 mt-6">
        {answers.map((answer, index) => {
          return (
            <button
              onClick={() => handleAnswerSelect(index, answer.correct)}
              key={answer.text}
              className={
                selectedAnswer.index === index ? selectedButtonCSS : buttonCSS
              }
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <button
        disabled={selectedAnswer.index === "none" || answerSubmitted}
        onClick={handleAnswerSubmit}
        className="bg-cyan-500 rounded-xl py-2 px-4 mt-8 mx-3 hover:bg-cyan-800 hover:scale-110 transition duration-300 text-3xl"
      >
        {!answerSubmitted &&
          (selectedAnswer.index === "none"
            ? "Pick an Answer!"
            : "Submit Answer!")}
        {answerSubmitted && "Submitted!"}
      </button>
      <CorrectVsIncorrectAlert
        answerSubmitted={answerSubmitted}
        selectedAnswer={selectedAnswer}
      />
    </>
  );
}

export default AnswerGrid;
