import { unstable_cache as nextCache } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const cookieStore = await cookies();
const supabase = createClient(cookieStore);

async function fetchHighScores(){	
	console.log('fetching data')
	let { data: scoresTable } = await supabase.from("scores_table").select("*");
	return scoresTable;
}

export const getHighScores = nextCache(
	fetchHighScores,
	['high-scores'],
	{revalidate: false}
)

