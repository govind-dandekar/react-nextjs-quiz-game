import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { getHighScores } from "@/lib/high-score-actions";

function Fallback() {
  return (
    <div className="space-y-4 text-nowrap mt-8 text-xl md:text-3xl">
      <p>
        Bluey & Bingo are retreiving the high scores (but are eating ice cream
        first)!
      </p>
    </div>
  );
}

async function ScoreList() {
  const highScores = await getHighScores();
  console.log(highScores);

  return highScores.map((score) => {
    return (
      <p className="text-xl md:text-3xl mt-4" key={score.id}>
        <Link href={`/scores/${score.id}`}>
          {score.name} {score.score}{" "}
        </Link>
      </p>
    );
  });
}

export default async function ScoresPage() {
  return (
    <>
      <Image
        src="/bluey-bingo-ice-cream.png"
        width={128}
        height={200}
        alt="bluey and bingo"
        priority
      />
      <Suspense fallback={<Fallback />}>
        <p className="text-xl md:text-3xl mt-8">Top Scores:</p>
        <ScoreList />
        <p className="mt-4">click on score to see more detail</p>
      </Suspense>
    </>
  );
}
