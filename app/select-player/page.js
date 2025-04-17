"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SubmitButton from "@/components/ui/submit-button";
import SelectButton from "@/components/ui/select-button";

import {
  baseButtonCSS,
  selectedButtonCSS,
} from "@/components/ui/util/button-css";

export default function SelectPlayerPage() {
  const [selectedPlayer, setSelectedPLayer] = useState("none");

  function playerSelectHandler(playerName) {
    setSelectedPLayer(playerName);
  }

  const linkText = "/select-level";

  // available players
  const playerOptions = [
    { name: "Missy", photoSource: "/missy.png" },
    { name: "Muffin", photoSource: "/muffin.png" },
    { name: "Snickers", photoSource: "/snickers.png" },
    { name: "Socks", photoSource: "/socks.png" },
  ];

  return (
    <>
      <div className="text-3xl text-center mt-8 md:text-6xl">
        <p>Select Your Character!</p>
      </div>
      <div className="flex space-x-3 mx-2">
        {playerOptions.map((player) => {
          return (
            <SelectButton
              key={player.name}
              buttonText={player.name}
              className={
                player.name === selectedPlayer
                  ? selectedButtonCSS
                  : baseButtonCSS
              }
              onSelect={playerSelectHandler}
            >
              <Image
                width={100}
                height={156}
                alt={player.name}
                src={player.photoSource}
                priority
              />
              <p className="mt-4 text-2xl">{player.name}</p>
            </SelectButton>
          );
        })}
      </div>
      <Link href={linkText}>
        <SubmitButton disabled={selectedPlayer === "none"}>
          {selectedPlayer === "none"
            ? "Pick a Character!!"
            : `Choose ${selectedPlayer}!`}
        </SubmitButton>
      </Link>
    </>
  );
}
