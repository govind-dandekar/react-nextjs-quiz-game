"use client";

import { useState } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import SubmitButton from "@/components/ui/submit-button";
import SelectButton from "@/components/ui/select-button";

function SelectLevelPage() {
  const [selectedLevel, setSelectedLevel] = useState("none");

  function levelSelectHandler(levelName) {
    setSelectedLevel(levelName);
  }

  const linkText = "/game/" + selectedLevel.toLowerCase();

  // available game levels
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <>
      <div className="flex justify-center hover:scale-110 transition delay-100 duration-300">
        <Image
          src="/bluey-bingo-sitting.png"
          width={128}
          height={200}
          alt="bluey and bingo sitting"
        />
      </div>
      {/* level selection container */}
      <div className="text-6xl text-center mt-8">
        <p>Select Your Level!</p>
      </div>
      <div className="flex space-x-4">
        {levels.map((level) => {
          return (
            <SelectButton
              key={level}
              buttonText={level}
              selectedLevel={selectedLevel}
              onSelect={levelSelectHandler}
            >
              {level}
            </SelectButton>
          );
        })}
      </div>
      <SubmitButton
        disabled={selectedLevel === "none"}
        onClick={() => redirect(linkText)}
      >
        {selectedLevel === "none"
          ? "Pick a Level to Get Started!"
          : `${selectedLevel} Quiz - Click Here!`}
      </SubmitButton>
    </>
  );
}

export default SelectLevelPage;
