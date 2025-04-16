"use client";

import SubmitButton from "@/components/ui/submit-button";

import { getScoreID } from "@/lib/high-score-actions";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ScoreDetail() {
  const params = useParams();

  const selectedScore = getScoreID(+params.id);

  console.log(selectedScore);

  return (
    <>
      <div className="text-3xl space-y-6">
        <p>Name: {selectedScore[0].name}</p>
        <p>Level: {selectedScore[0].level}</p>
        <p>LLM: {selectedScore[0].model}</p>
        <p>Score: {selectedScore[0].score}</p>
      </div>
      <Link href="/scores">
        <SubmitButton>Top Scores</SubmitButton>
      </Link>
    </>
  );
}
