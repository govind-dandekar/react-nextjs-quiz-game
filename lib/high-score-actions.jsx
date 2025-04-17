import { unstable_cache as nextCache } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

async function fetchHighScores(supabase) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000) // delay for testing & UI purposes
  })
	
	console.log('fetching data');
  let { data: scoresTable } = await supabase.from("scores_table").select("*");
  return scoresTable;
}

// used several Claude prompts (and perplexity and chatGPT and v0 and blog posts)
// for this after several hours of attempting to get it to work
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

// old code:
// const cookieStore = await cookies();
// const supabase = createClient(cookieStore);

// async function fetchHighScores(){	
// 	console.log('fetching data')
// 	let { data: scoresTable } = await supabase.from("scores_table").select("*");
// 	return scoresTable;
// }

// export const getHighScores = nextCache(
// 	fetchHighScores,
// 	['high-scores'],
// 	{revalidate: false}
// )