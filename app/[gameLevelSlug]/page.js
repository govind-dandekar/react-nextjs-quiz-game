import { getQuestions } from "../../lib/questions";

async function GamePage({ params }) {
  const { gameLevelSlug } = await params;

  const questions = getQuestions(gameLevelSlug);
  console.log(questions);

  return <h1>Game Level Page</h1>;
}

export default GamePage;
