"use client";

import { useState } from "react";
import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";
import SelectButton from "@/components/ui/select-button";

import {
  baseButtonCSS,
  selectedButtonCSS,
} from "@/components/ui/util/button-css";

export default function SelectLevelClient() {
  const [selectedLevel, setSelectedLevel] = useState("none");

  function levelSelectHandler(levelName) {
    setSelectedLevel(levelName);
  }

  const linkText = "/game/" + selectedLevel.toLowerCase();

  // available game levels
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <>
      <div className="flex space-x-4">
        {levels.map((level) => {
          return (
            <SelectButton
              key={level}
              buttonText={level}
              className={
                level === selectedLevel ? selectedButtonCSS : baseButtonCSS
              }
              onSelect={levelSelectHandler}
            >
              {level}
            </SelectButton>
          );
        })}
      </div>
      <Link href={linkText}>
        <SubmitButton disabled={selectedLevel === "none"}>
          {selectedLevel === "none"
            ? "Pick a Level to Get Started!"
            : `${selectedLevel} Quiz - Click Here!`}
        </SubmitButton>
      </Link>
    </>
  );
}
