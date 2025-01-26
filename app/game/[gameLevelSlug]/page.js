async function PlayGame({ params }) {
  // TODO: if selected level is not one of the options redirect
  const selectedLevel = await params.gameLevelSlug;

  // TODO: setup useActionState and form action for secure server-side action
  return (
    <>
      <div className="bg-cyan-400 m-3 shadow-2xl rounded-2xl px-60 pb-40 pt-20 text-white text-center">
        <div className="text-4xl space-y-4 text-nowrap mt-8">
          <p>Instructions:</p>
          <div className="text-3xl space-y-4">
            <p>
              Select the answer you think is correct and then click "Submit!"
            </p>
            <p>You have up to 20 seconds to answer each question!</p>
          </div>
          <form>
            <button>Start Game!</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PlayGame;
