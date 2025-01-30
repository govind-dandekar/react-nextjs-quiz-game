import { useEffect } from "react";

function LDRSGridAnimationLoader() {
  useEffect(() => {
    async function getLoader() {
      const { grid } = await import("ldrs");
      grid.register();
    }
    getLoader();
  }, []);
  return <l-grid size="200" speed="2.5" color="#00838f"></l-grid>;
}

export default LDRSGridAnimationLoader;
