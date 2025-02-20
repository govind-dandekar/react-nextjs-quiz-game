import Image from "next/image";
import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";

const DYNAMIC_RESULTS_ARRAY = [
  {
    image: (
      <Image
        src="/bingo-trifficult.png"
        width={128}
        height={200}
        alt="bingo playing a xylophone"
      />
    ),
    text: 'Bingo says "Good try! Those questions were really trifficult!"',
  },
  {
    image: (
      <Image
        src="/bingo-celebrating.png"
        width={128}
        height={200}
        alt="bingo celebrating"
      />
    ),
    text: 'Bingo says "Hooray! Great work!"',
  },
  {
    image: (
      <Image
        src="/bluey-bingo-car.png"
        width={160}
        height={120}
        alt="bluey and bingo playing with a toy car"
      />
    ),
    text: 'Bluey & Bingo say "Wackadoo! You\'re amazing!"',
  },
];

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
