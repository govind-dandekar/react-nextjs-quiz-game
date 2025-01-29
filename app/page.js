"use client";

import Image from "next/image";

import { redirect } from "next/navigation";

import CustomFooter from "../components/custom-footer";

function HomePage() {
  return (
    // TODO: fix double submit bug
    // TODO: setup error and not found templates
    // TODO: general refactor of CSS
    // TODO: implement fallback if claude returns error
    // TODO: create Button component
    // TODO: set font-sizw CSS for answers depending on # of characters OR wrap text
    <>
      <div className="flex flex-col bg-cyan-400 shadow-2xl rounded-2xl w-3/4 h-[40rem] text-white text-center items-center justify-center">
        <div className="flex justify-center hover:scale-110 transition delay-100 duration-300">
          <Image
            src="/bluey-bingo.png"
            width={128}
            height={200}
            alt="bluey and bingo"
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
      <CustomFooter />
    </>
  );
}

export default HomePage;
