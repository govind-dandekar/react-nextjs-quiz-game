import { cache } from "react";

import { unstable_cache as nextCache } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getHighScores() {
	const cookieStore = await cookies();
	const supabase = createClient(cookieStore);
	const sortedScores = await getHighScoresCached(supabase)
	return sortedScores;
}

// pass false to ensure caching w/o explicit call to revalidate
export const getHighScoresCached = nextCache(cache(async function getHighScoresCached(supabase){
	"use server";
	console.log('getting high scores')
	let { data: scoresTable } = await supabase.from("scores_table").select("*");
	const sortedScores = scoresTable.sort((a, b) => b.score - a.score);
	return sortedScores;
}), ['top-scores'], false)

