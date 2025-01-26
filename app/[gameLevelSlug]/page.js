import { getQuestions } from "../../lib/actions";

// need to setup SQLite DB to store data
async function GamePage({ params }) {
  const { gameLevelSlug } = await params;

  // must put getQuestions in <form action={get Questions} />
  // bind selected level to Server Action with updateQuestions.bind()
  const questions = await getQuestions(gameLevelSlug);
  console.log(questions);

  return <h1>Game Level Page</h1>;
}

export default GamePage;
