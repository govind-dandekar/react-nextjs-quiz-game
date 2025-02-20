import Image from "next/image";
import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";

function Results({ correctAnswerCounter }) {
  if (correctAnswerCounter < 4) {
    return (
      <>
        <Image
          src="/bingo-trifficult.png"
          width={128}
          height={200}
          alt="bingo playing a xylophone"
        />
        <p className="text-2xl md:text-5xl mt-8">
          Correct Answers: {correctAnswerCounter} out of 10!
        </p>
        <p className="text-2xl md:text-3xl mt-6">
          Bingo says &quot;Good try! Those questions were really
          trifficult!&quot;
        </p>
        <SubmitButton>
          <Link href="/select-level">Play Again!</Link>
        </SubmitButton>
      </>
    );
  } else if (correctAnswerCounter < 8) {
    return (
      <>
        <Image
          src="/bingo-celebrating.png"
          width={128}
          height={200}
          alt="bingo celebrating"
        />
        <p className="text-2xl md:text-5xl mt-8">
          Correct Answers: {correctAnswerCounter} out of 10!
        </p>
        <p className="text-2xl md:text-4xl mt-6">
          Bingo says &quot;Hooray! Great work!&quot;
        </p>
        <SubmitButton>
          <Link href="/select-level">Play Again!</Link>
        </SubmitButton>
      </>
    );
  } else {
    return (
      <>
        <Image
          src="/bluey-bingo-car.png"
          width={160}
          height={120}
          alt="bluey and bingo playing with a toy car"
        />
        <p className="text-2xl md:text-5xl mt-8">
          Correct Answers: {correctAnswerCounter} out of 10!
        </p>
        <p className="text-2xl md:text-4xl mt-6">
          Bluey & Bingo say &quot;Wackadoo! You&apos;re amazing!&quot;
        </p>
        <SubmitButton>
          <Link href="/select-level">Play Again!</Link>
        </SubmitButton>
      </>
    );
  }
}

export default Results;
