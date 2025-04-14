import Image from "next/image";

export default function HomePageServer() {
  return (
    <>
      <Image
        src="/bluey-bingo.png"
        width={128}
        height={200}
        alt="bluey and bingo"
        priority
      />
      <div className="space-y-4 text-nowrap mt-8 text-3xl md:text-6xl">
        <p>Welcome To...</p>
        <p>The Bluey Quiz Game!!!</p>
      </div>
    </>
  );
}
