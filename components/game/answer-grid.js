"use client";

import { useState } from "react";

import Image from "next/image";

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
    // will trigger re-render - should be able to update CSS and text for correct v incorrect messaging here
    // update button text to "submitted"
    setAnswerSubmitted(true);

    setTimeout(() => {
      onSubmitAnswer(selectedAnswer.flag);
      // reset component state after answer is submitted
      setAnswerSubmitted(false);
      setSelectedAnswer({
        index: "none",
        flag: false,
      });
    }, 1500);
  }

  let buttonCSS =
    "bg-cyan-500 rounded-xl py-3 px-2 mt-3 mx-3 hover:bg-cyan-800 focus:bg-cyan-800 focus:outline-4 focus:outline-offset-2 focus:outline-dotted text-3xl text-wrap";

  let selectedButtonCSS =
    "text-3xl truncate rounded-xl py-3 px-2 mt-3 mx-3 bg-cyan-800 outline-4 outline-offset-2 outline-dotted";

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
        // disable if no answer picked OR if answer submitted
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
      {/* update CSS and include dynamic text upon submit -- need re-render to take effect?*/}
      <div
        className={
          !answerSubmitted
            ? "text-3xl mt-8 invisible py-2 rounded-xl px-4"
            : answerSubmitted && selectedAnswer.flag
            ? "text-3xl mt-8 py-2 rounded-xl px-6 bg-emerald-300"
            : "text-3xl mt-8 py-2 rounded-xl px-6 bg-fuchsia-300"
        }
      >
        {selectedAnswer.flag ? (
          <p>
            <Image
              src="/bingo-celebrating.png"
              alt="bingo celebrating"
              width={30}
              height={40}
              className="inline align-middle"
            />{" "}
            Correct!
          </p>
        ) : (
          <p>
            <Image
              src="/bingo-silly.png"
              alt="bingo looking silly"
              width={30}
              height={40}
              className="inline align-middle"
            />{" "}
            Incorrect
          </p>
        )}
      </div>
    </>
  );
}

export default AnswerGrid;
