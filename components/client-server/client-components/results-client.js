"use client";
import Link from "next/link";
import SubmitButton from "../../ui/submit-button";

export default function ResultsClient({ handleClick }) {
  return (
    <Link href="/scores" onClick={handleClick}>
      <SubmitButton>See High Scores!</SubmitButton>
    </Link>
  );
}
