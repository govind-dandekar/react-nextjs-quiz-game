"use client";

import * as React from "react";
import { useEffect, useState, useActionState } from "react";

import Image from "next/image";
import Link from "next/link";
// import { getQuestionsAnthropic } from "@/lib/actions"
import { getQuestionsDummy } from "@/lib/actions";
import Instructions from "../../../components/game/instructions";
import AnswerGrid from "../../../components/game/answer-grid";
import SubmitButton from "@/components/ui/submit-button";

function GamePage({ params }) {
  // TODO: if selected level is not one of the options redirect
  const { gameLevelSlug } = React.use(params);

  // manage flow of game in PlayGame
  const [gameMode, setGameMode] = useState("instructions");
  // track current question
  const [questionIndex, setQuestionIndex] = useState(0);
  // track # of correct answers for results summary
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  // useActionState to securely retrieve data from server
  const [quizQuestions, formAction] = useActionState(
    getQuestionsDummy.bind(null, gameLevelSlug),
    []
  );

  useEffect(() => {
    if (quizQuestions.length === 0) {
      return;
    } else {
      setGameMode("playQuiz");
    }
  }, [quizQuestions]);

  function handleAnswerSubmit(answerFlag) {
    if (answerFlag) {
      setCorrectAnswerCounter((prevCounter) => prevCounter + 1);
    }

    // end quiz if questions are complete
    if (questionIndex === 9) {
      setGameMode("results");
      return;
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
  }

  // use action to securely get data from server
  if (gameMode === "instructions") {
    return (
      <>
        <Instructions />
        <form action={formAction}>
          <SubmitButton>Start Quiz!</SubmitButton>
        </form>
      </>
    );
  }

  if (gameMode === "playQuiz") {
    const displayIndex = questionIndex + 1;
    const displayQuestion = quizQuestions[questionIndex].question;
    const answers = quizQuestions[questionIndex].answers;

    return (
      <>
        <p className="text-4xl">Question {displayIndex} of 10</p>
        <h1 className="text-5xl mt-6">{displayQuestion}</h1>
        <AnswerGrid answers={answers} onSubmitAnswer={handleAnswerSubmit} />
      </>
    );
  }

  if (gameMode === "results") {
    return (
      <>
        <Image
          src="/bluey-bingo-car.png"
          width={160}
          height={120}
          alt="bluey and bingo playing with a toy car"
        />
        <p className="text-5xl mt-8">
          Correct Answers: {correctAnswerCounter} out of 10!
        </p>
        <p className="text-5xl mt-6">Great Work!</p>
        <SubmitButton>
          <Link href="/select-level">Play Again!</Link>
        </SubmitButton>
      </>
    );
  }
}

export default GamePage;
