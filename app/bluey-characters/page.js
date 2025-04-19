"use server";

import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `https://react-nextjs-quiz-game.vercel.app//api/characters`
  );
  const characters = await res.json();

  console.log(characters);

  return (
    <>
      <ul className="grid grid-cols-4 gap-8">
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`bluey-characters/${character.id}`}>
              <Image
                src={character.photoSource}
                alt={character.name}
                height={200}
                width={100}
              />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-3xl">Click on a Character to Learn More!</p>
    </>
  );
}
