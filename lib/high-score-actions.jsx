import { unstable_cache as nextCache } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function fetchHighScores(supabase) {
  console.log('fetching data');
  let { data: scoresTable } = await supabase.from("scores_table").select("*");
  return scoresTable;
}

// used Claude for this
export const getHighScores = async () => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Use the cached function or create it if it doesn't exist yet
  const cachedFetchHighScores = nextCache(
    () => fetchHighScores(supabase),
    ['high-scores'],
    {revalidate: false}
  );

  // Call the cached function and return its result
  return await cachedFetchHighScores();
};