"use client";

import { redirect } from "next/navigation";

import SubmitButton from "@/components/ui/submit-button";

export default function HomePageClient({ children }) {
  return (
    <>
      {children}
      <SubmitButton onClick={() => redirect("/select-level")}>
        Click Here To Play!
      </SubmitButton>
    </>
  );
}
