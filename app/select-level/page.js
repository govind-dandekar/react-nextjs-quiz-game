"use client";

import { useState } from "react";

import Link from "next/link";

import { IconContext } from "react-icons/lib";
import { FaHome } from "react-icons/fa";

import SelectLevelButton from "../../components/select-level/select-level-button";
import StartQuizButton from "../../components/select-level/start-quiz-button";

function LevelPage() {
  const [selectedLevel, setSelectedLevel] = useState("none");

  function levelSelectHandler(levelName) {
    setSelectedLevel(levelName);
  }

  return (
    <div>
      <div className="bg-cyan-400 m-3 shadow-2xl rounded-2xl px-60 pb-20 pt-20 text-white">
        {/* level selection container */}
        <div className="text-6xl text-center">
          <p>Select Your Level!</p>
        </div>
        <div className="flex space-x-4 mt-12">
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
        <div className="flex mt-16 justify-center">
          <StartQuizButton>
            {selectedLevel === "none"
              ? "Pick a Level to Get Started!"
              : `${selectedLevel} - Click Here to Start !`}
          </StartQuizButton>
        </div>
      </div>
      {/* generalize footer */}
      <div className="flex text-stone-600 bg-cyan-400 m-3 py-3 px-3 mt-10 rounded-2xl font-sans justify-evenly align-middle">
        <p>for non-commercial entertainment purposes only</p>
        <span className="mt-1">
          <Link href="/">
            <FaHome className="scale-150" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LevelPage;
