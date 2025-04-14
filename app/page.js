import HomePageClient from "@/components/client-server/client-components/home-page-client";
import HomePageServer from "@/components/client-server/server-components/home-page-server";

function HomePage() {
  return (
    <HomePageClient>
      <HomePageServer />
    </HomePageClient>
  );
}

export default HomePage;
