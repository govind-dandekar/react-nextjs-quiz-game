import Image from "next/image";
import { Suspense } from "react";

export default function Scores() {
  return (
    <>
      <Image
        src="/bluey-bingo-ice-cream.png"
        width={128}
        height={200}
        alt="bluey and bingo"
        priority
      />
      <div className="space-y-4 text-nowrap mt-8 text-xl md:text-3xl">
        <p>Bluey & Bingo are retreiving the high scores!</p>
      </div>
    </>
  );
}
