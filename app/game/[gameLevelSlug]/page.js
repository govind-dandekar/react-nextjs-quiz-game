"use client";

import * as React from "react";
import { useEffect, useState, useActionState } from "react";

import Image from "next/image";

import { getQuestions } from "@/lib/actions";
import Instructions from "../../../components/game/instructions";
import AnswerGrid from "../../../components/game/answer-grid";
import CustomFooter from "../../../components/custom-footer";

function PlayGame({ params }) {
  // TODO: if selected level is not one of the options redirect
  const { selectedLevel } = React.use(params);

  // managed flow of game in PlayGame
  const [gameState, setGameState] = useState("instructions");
  const [questionIndex, setQuestionIndex] = useState(0);

  // useActionState to retrieve data from server
  const [claudeQuestions, formAction, pending] = useActionState(
    getQuestions,
    []
  );

  useEffect(() => {
    if (claudeQuestions.length === 0) {
      return;
    } else {
      setGameState("playQuiz");
    }
  }, [claudeQuestions]);

  function handleAnswerSubmit() {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  }

  if (gameState === "instructions") {
    return (
      <>
        <div className="flex flex-col bg-cyan-400 shadow-2xl rounded-2xl w-2/3 h-[40rem] text-white text-center items-center justify-center">
          <Instructions />
          <div className="mt-12 text-3xl">
            <form action={formAction}>
              <button className="bg-cyan-800 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300">
                Start Quiz!
              </button>
            </form>
          </div>
        </div>
        <CustomFooter />
      </>
    );
  }

  if (gameState === "playQuiz") {
    const displayIndex = questionIndex + 1;
    const displayQuestion = claudeQuestions[questionIndex].question;
    // array of objects: answers and t/f flag
    const answers = claudeQuestions[questionIndex].answers;

    //adjust min and max widths -- make fixed width question and answer card
    return (
      <>
        <div className="flex flex-col bg-cyan-400 shadow-2xl rounded-2xl w-2/3 h-[40rem] text-white text-center items-center justify-center">
          <p className="text-4xl">Question {displayIndex} of 10</p>
          <h1 className="text-5xl mt-6">{displayQuestion}</h1>
          <AnswerGrid answers={answers} onSubmit={handleAnswerSubmit} />
        </div>
        <CustomFooter />
      </>
    );
  }
}

export default PlayGame;
