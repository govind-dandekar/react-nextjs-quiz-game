import SelectLevelClient from "@/components/client-server/client-components/select-level-client";
import SelectLevelServer from "@/components/client-server/server-components/select-level-server";

function SelectLevelPage() {
  return (
    <>
      <SelectLevelClient>
        <SelectLevelServer />
      </SelectLevelClient>
    </>
  );
}

export default SelectLevelPage;
