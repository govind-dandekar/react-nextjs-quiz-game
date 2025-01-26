"use client";

import * as React from "react";

import Image from "next/image";

import { getQuestions } from "@/lib/actions";
import { useActionState } from "react";

function PlayGame({ params }) {
  // TODO: if selected level is not one of the options redirect
  const { selectedLevel } = React.use(params);

  // TODO: setup useActionState and form action for secure server-side action
  const [actionState, formAction, pending] = useActionState(getQuestions, []);

  console.log(actionState);

  return (
    <>
      <div className="bg-cyan-400 m-3 shadow-2xl rounded-2xl px-40 pb-40 pt-20 text-white text-center">
        {/* image container */}
        <div className="flex justify-center">
          <Image
            src="/bluey-family-car.png"
            width={160}
            height={120}
            alt="bluey family with play car"
          />
        </div>
        <div className="text-4xl text-nowrap mt-8">
          <p>Instructions:</p>
          <div className="text-4xl space-y-4 mt-4">
            <p>There are 10 multiple choice questions.</p>
            <p>
              Select the answer you think is correct and then click "Submit!"
            </p>
            <p>Good luck & have fun!</p>
          </div>
          <div className="mt-12 text-3xl">
            <form action={formAction}>
              <button className="bg-cyan-800 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300">
                Start Quiz!
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayGame;
