import "server-only";

import Image from "next/image";
import { Suspense } from "react";

import { getHighScores } from "@/lib/high-score-actions";

function Fallback() {
  return (
    <div className="space-y-4  mt-8 text-xl md:text-3xl text-wrap">
      <p>
        Bluey & Bingo are retreiving the high scores (but are eating ice cream
        first)!
      </p>
    </div>
  );
}

async function ScoreList() {
  try {
    const sortedScores = await getHighScores();

    return sortedScores.map((score) => {
      return (
        <p className="text-xl md:text-3xl mt-4" key={score.id}>
          {score.name} {score.score}{" "}
        </p>
      );
    });
  } catch (error) {
    console.log("supabase error " + error);
  }
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
