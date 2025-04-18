"use client";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return (
    //ts-expect-error
    <a href="/scores">
      <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>
    </a>
  );
}
