import SelectLevelClient from "@/components/client-server/client-components/select-level-client";
import SelectLevelServer from "@/components/client-server/server-components/select-level-server";

function SelectLevelPage() {
  // move client component down component tree
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
      <SelectLevelClient />
    </>
  );
}

export default SelectLevelPage;
