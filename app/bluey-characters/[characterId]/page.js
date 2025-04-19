import Image from "next/image";

export async function generateStaticParams() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/characters`);
  const characters = await res.json();

  return characters.map((characters) => ({
    characterId: characters.id.toString(),
  }));
}

export default async function CharacterPage({ params }) {
  const { characterId } = await params;
  const res = await fetch(`http://localhost:3000/api/characters`);
  const characters = await res.json();

  const selectedCharacter = characters.filter(
    (character) => character.id === +characterId
  );

  console.log(selectedCharacter);

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
