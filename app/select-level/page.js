"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaHome } from "react-icons/fa";

import SelectLevelButton from "../../components/select-level/select-level-button";
import StartQuizButton from "../../components/select-level/start-quiz-button";
import CustomFooter from "../../components/custom-footer";

function SelectLevelPage() {
  const [selectedLevel, setSelectedLevel] = useState("none");

  function levelSelectHandler(levelName) {
    setSelectedLevel(levelName);
  }

  return (
    <>
      <div className="flex flex-col bg-cyan-400 shadow-2xl rounded-2xl w-3/4 h-[40rem] text-white text-center items-center justify-center">
        {/* image container */}
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
        <div className="flex space-x-4 mt-12">
          {/* set as array.map? */}
          {/* update with tailwind focus */}
          <SelectLevelButton
            buttonText="Easy"
            selectedLevel={selectedLevel}
            onSelect={levelSelectHandler}
          />
          <SelectLevelButton
            buttonText="Medium"
            selectedLevel={selectedLevel}
            onSelect={levelSelectHandler}
          />
          <SelectLevelButton
            buttonText="Hard"
            selectedLevel={selectedLevel}
            onSelect={levelSelectHandler}
          />
        </div>
        {/* confirm level and start game container */}
        <div className="flex mt-12 justify-center">
          <StartQuizButton buttonText={selectedLevel}>
            {selectedLevel === "none"
              ? "Pick a Level to Get Started!"
              : `${selectedLevel} Quiz - Click Here!`}
          </StartQuizButton>
        </div>
      </div>
      {/* TODO: add back link icon */}
      <CustomFooter />
    </>
  );
}

export default SelectLevelPage;
