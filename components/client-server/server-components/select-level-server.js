import Image from "next/image";

export default function SelectLevelServer() {
  return (
    <>
      <Image
        src="/bluey-bingo-sitting.png"
        width={128}
        height={200}
        alt="bluey and bingo sitting"
        priority
      />
      {/* level selection container */}
      <div className="text-3xl text-center mt-8 md:text-6xl">
        <p>Select Your Level!</p>
      </div>
    </>
  );
}
