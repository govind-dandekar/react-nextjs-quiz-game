import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";

import { DYNAMIC_RESULTS_ARRAY } from "./dynamic-results-array";

function Results({ correctAnswerCounter }) {
  let resultsIndex;

  if (correctAnswerCounter < 4) {
    resultsIndex = 0;
  } else if (correctAnswerCounter < 8) {
    resultsIndex = 1;
  } else {
    resultsIndex = 2;
  }

  return (
    <>
      {DYNAMIC_RESULTS_ARRAY[resultsIndex].image}
      <p className="text-2xl md:text-5xl mt-8">
        Correct Answers: {correctAnswerCounter} out of 10!
      </p>
      <p className="text-2xl md:text-4xl mt-6 px-2">
        {DYNAMIC_RESULTS_ARRAY[resultsIndex].text}
      </p>
      <SubmitButton>
        <Link href="/select-level">Play Again!</Link>
      </SubmitButton>
    </>
  );
}

export default Results;
