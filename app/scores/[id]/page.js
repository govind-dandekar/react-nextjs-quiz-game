import "server-only";

import SubmitButton from "@/components/ui/submit-button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import Link from "next/link";

export default async function ScoreDetail({ params }) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { id } = await params;

  console.log(id);

  let { data: selectedScore } = await supabase
    .from("scores_table")
    .select()
    .eq("id", +id);

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
