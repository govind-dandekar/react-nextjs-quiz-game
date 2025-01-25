"use client";

import Image from "next/image";

import { redirect } from "next/navigation";

function HomePage() {
  return (
    //TODO: randomize image display -- move to component?
    //TODO: generalized scale transition and duration with template string
    //TODO: declare width and height of container with min-w min-h?
    <>
      <div className="bg-cyan-400 m-3 shadow-2xl rounded-2xl px-60 pb-40 pt-20 text-white text-center">
        <div className="flex justify-center hover:scale-110 transition delay-100 duration-300">
          <Image
            src="/bluey-bingo.png"
            width={128}
            height={200}
            alt="bluey character"
          />
        </div>
        <div className="text-6xl space-y-4 text-nowrap mt-8 hover:scale-110 transition delay-100 duration-300">
          <p>Welcome To...</p>
          <p>The Bluey Quiz Game!!!</p>
        </div>
        {/* TODO: refactor and generalize button */}
        {/* move button to its own component so the rest of Home renders server-side*/}
        <div className="mt-12 text-3xl">
          <button
            onClick={() => redirect("/select-level")}
            className="bg-cyan-800 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300"
          >
            Click Here To Play!
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
