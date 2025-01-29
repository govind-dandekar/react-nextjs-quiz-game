"use client";

import { useState } from "react";

import CorrectVSIncorrectAlert from "./correct-vs-incorrect-alert";
import SubmitButton from "../ui/submit-button";
import SelectButton from "../ui/select-button";

import { baseButtonCSS, selectedButtonCSS } from "@/components/ui/util";

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

  return (
    <>
      <div className="grid grid-cols-2 w-1/2 mt-6">
        {answers.map((answer, index) => {
          return (
            <SelectButton
              onClick={() => handleAnswerSelect(index, answer.correct)}
              key={answer.text}
              className={
                selectedAnswer.index === index
                  ? selectedButtonCSS
                  : baseButtonCSS
              }
            >
              {answer.text}
            </SelectButton>
          );
        })}
      </div>
      <SubmitButton
        disabled={selectedAnswer.index === "none" || answerSubmitted}
        onClick={handleAnswerSubmit}
      >
        {!answerSubmitted &&
          (selectedAnswer.index === "none"
            ? "Pick an Answer!"
            : "Submit Answer!")}
        {answerSubmitted && "Submitted!"}
      </SubmitButton>
      <CorrectVSIncorrectAlert
        answerSubmitted={answerSubmitted}
        selectedAnswer={selectedAnswer}
      />
    </>
  );
}

export default AnswerGrid;
