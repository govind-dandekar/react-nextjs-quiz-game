"use client";
import SubmitButton from "../../ui/submit-button";
import Link from "next/link";

export default function ResultsClient({ handleClick }) {
  return (
    <Link prefetch={false}>
      <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>
    </Link>
  );
}
