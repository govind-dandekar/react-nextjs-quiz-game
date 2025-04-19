import Image from "next/image";

export async function generateStaticParams() {
  // const baseUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000";

  // const testUrl =
  //   process.env.VERCEL_ENV === "production"
  //     ? "https://react-nextjs-quiz-game.vercel.app"
  //     : "http://localhost:3000";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/characters`
  );
  // const res = await fetch("https://bluey-api.vercel.app/api/bluey");
  const characters = await res.json();

  return characters.map((characters) => ({
    characterId: characters.id.toString(),
  }));
}

export default async function CharacterPage({ params }) {
  const { characterId } = await params;

  // const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL

  // const baseUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000";

  // const testUrl =
  //   process.env.VERCEL_ENV === "production"
  //     ? "https://react-nextjs-quiz-game.vercel.app"
  //     : "http://localhost:3000";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/characters`
  );
  // const res = await fetch("https://bluey-api.vercel.app/api/bluey");
  const characters = await res.json();

  const selectedCharacter = characters.filter(
    (character) => character.id === +characterId
  );

  return (
    <>
      <Image
        src={selectedCharacter[0].photoSource}
        alt={selectedCharacter[0].name}
        height={200}
        width={100}
      />
      <div className="text-3xl space-y-4 mt-6">
        <p>Name: {selectedCharacter[0].name}</p>
        <p>Breed: {selectedCharacter[0].breed}</p>
        <p>Quote: {selectedCharacter[0].quote}</p>
      </div>
    </>
  );
}
