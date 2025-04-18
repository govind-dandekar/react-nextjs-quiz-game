"use client";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return (
    <a href="/scores">
      <SubmitButton>See High Scores!</SubmitButton>
    </a>
  );
}
