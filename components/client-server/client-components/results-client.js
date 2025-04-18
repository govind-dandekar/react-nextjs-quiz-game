"use client";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return (
    //@ts-ignore: use a to disable prefetching
    <a href="/scores">
      <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>
    </a>
  );
}
