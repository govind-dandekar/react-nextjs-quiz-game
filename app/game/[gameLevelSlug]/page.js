"use client";

import * as React from "react";
import { useEffect, useState, useActionState } from "react";

import Image from "next/image";
import Link from "next/link";

import { getQuestionsAnthropic } from "@/lib/actions";
// import { getQuestionsDummy } from "@/lib/actions";
import Instructions from "../../../components/game/instructions";
import AnswerGrid from "../../../components/game/answer-grid";
import SubmitButton from "@/components/ui/submit-button";

// import LDRSGridAnimationLoader from "@/components/ui/ldrs-grid-animation-loader";
import LDRSBouncyAnimationLoader from "@/components/ui/ldrs-bouncy-animation-loader";

function GamePage({ params }) {
  // TODO: if selected level is not one of the options redirect
  const { gameLevelSlug } = React.use(params);

  // manage flow of game in PlayGame
  const [gameMode, setGameMode] = useState("instructions");
  // track current question
  const [questionIndex, setQuestionIndex] = useState(0);
  // track # of correct answers for results summary
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  // useActionState to securely retrieve data from server component via server action
  const [quizQuestions, formAction, isPending] = useActionState(
    getQuestionsAnthropic.bind(null, gameLevelSlug),
    []
  );

  // update page state upon questions loading
  useEffect(() => {
    if (isPending) {
      setGameMode("loading");
    } else if (!isPending && quizQuestions.length > 0) {
      setGameMode("playQuiz");
    }
  }, [quizQuestions, isPending]);

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

  // game instructions UI
  if (gameMode === "instructions") {
    // use action to securely retreive data from server
    return (
      <>
        <Instructions />
        <form action={formAction}>
          <SubmitButton>Start Quiz!</SubmitButton>
        </form>
      </>
    );
  }

  // loading UI for Claude latency
  if (gameMode === "loading") {
    return (
      <>
        <p className="text-4xl mb-12">
          Claude Is Preparing Your Bluey Quiz Questions!
        </p>
        <LDRSBouncyAnimationLoader />
      </>
    );
  }

  // play game UI
  if (gameMode === "playQuiz") {
    const displayIndex = questionIndex + 1;
    const displayQuestion = quizQuestions[questionIndex].question;
    const answers = quizQuestions[questionIndex].answers;

    return (
      <>
        <p className="text-3xl mt-6">Question {displayIndex} of 10</p>
        <p className="text-5xl mt-4">{displayQuestion}</p>
        <AnswerGrid answers={answers} onSubmitAnswer={handleAnswerSubmit} />
      </>
    );
  }

  // game results UI
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
