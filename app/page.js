"use client";

import Image from "next/image";

import { redirect } from "next/navigation";

function Home() {
  return (
    //TODO: randomize image display -- move to component?
    <>
      <div className="flex justify-center hover:scale-110 transition delay-100 duration-300">
        <Image src="/bluey.png" width={64} height={100} alt="bluey character" />
      </div>
      <div className="text-white text-6xl text-center space-y-4 text-nowrap mt-8 hover:scale-110 transition delay-100 duration-300">
        <p>Welcome To...</p>
        <p>The Bluey Quiz Game!!!</p>
      </div>
      {/* TODO: refactor and generalize button */}
      <div className="text-white text-center mt-12 text-3xl">
        <button
          onClick={() => redirect("/level")}
          className="bg-cyan-700 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300"
        >
          Click Here To Play!
        </button>
      </div>
    </>
  );
}

export default Home;
