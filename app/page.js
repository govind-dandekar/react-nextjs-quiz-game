"use client";

import SubmitButton from "@/components/ui/submit-button";

import Image from "next/image";

import { redirect } from "next/navigation";

function HomePage() {
  return (
    // TODO: implement fallback to dummy responses if claude returns error
    // TODO: standardize image hover behavior across pages - put in util file?
    <>
      <div className="flex justify-center">
        <Image
          src="/bluey-bingo.png"
          width={128}
          height={200}
          alt="bluey and bingo"
        />
      </div>
      <div className="text-6xl space-y-4 text-nowrap mt-8">
        <p>Welcome To...</p>
        <p>The Bluey Quiz Game!!!</p>
      </div>
      <SubmitButton onClick={() => redirect("/select-level")}>
        Click Here To Play!
      </SubmitButton>
    </>
  );
}

export default HomePage;
