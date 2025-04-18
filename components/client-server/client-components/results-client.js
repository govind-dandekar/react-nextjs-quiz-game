"use client";
import SubmitButton from "../../ui/submit-button";
import Link from "next/link";

export default function ResultsClient({ handleClick }) {
  return <SubmitButton onClick={handleClick}>See High Scores!</SubmitButton>;
}
