"use client";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return (
    <Link href="/scores" prefetch={false}>
      <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>
    </Link>
  );
}
