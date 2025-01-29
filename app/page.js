"use client";

import SubmitButton from "@/components/ui/submit-button";

import Image from "next/image";

import { redirect } from "next/navigation";

function HomePage() {
  return (
    // TODO: setup error and not found templates
    // TODO: implement fallback to dummy responses if claude returns error
    // TODO: create Button component and refactor all buttons
    // TODO: standardize image hover behavior across pages - put in util file?
    <>
      <div className="flex justify-center hover:scale-110 transition delay-100 duration-300">
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
