import { DYNAMIC_RESULTS_ARRAY } from "../../components/game/dynamic-results-array";

import { addHighScore } from "@/lib/high-score-actions";

import ResultsClient from "@/components/client-server/client-components/results-client";

import { revalidatePath } from "next/cache";

export default async function Results({ searchParams }) {
  const { name, level, llm, score } = await searchParams;

  console.log(name);
  console.log(level);
  console.log(llm);
  console.log(score);

  await addHighScore(name, score, level, llm);

  let resultsIndex;

  if (score < 4) {
    resultsIndex = 0;
  } else if (score < 8) {
    resultsIndex = 1;
  } else {
    resultsIndex = 2;
  }

  async function handleClick() {
    "use server";
    revalidatePath("/scores");
  }

  return (
    <>
      {DYNAMIC_RESULTS_ARRAY[resultsIndex].image}
      <p className="text-2xl md:text-5xl mt-8">
        Correct Answers: {score} out of 10!
      </p>
      <p className="text-2xl md:text-4xl mt-6 px-2">
        {DYNAMIC_RESULTS_ARRAY[resultsIndex].text}
      </p>
      <ResultsClient handleClick={handleClick} />
    </>
  );
}
