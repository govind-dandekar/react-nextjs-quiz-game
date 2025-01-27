function AnswerGrid({ answers }) {
  const answerOne = answers[0].text;
  const answerTwo = answers[1].text;
  const answerThree = answers[2].text;
  const answerFour = answers[3].text;

  return (
    <div className="space-y-8">
      <div className="flex justify-around">
        <button>{answerOne}</button>
        <button>{answerTwo}</button>
      </div>
      <div className="flex justify-around">
        <button>{answerThree}</button>
        <button>{answerFour}</button>
      </div>
    </div>
  );
}

export default AnswerGrid;
