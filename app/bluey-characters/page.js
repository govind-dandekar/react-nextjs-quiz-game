"use server";

import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  console.log("vercel url " + process.env.VERCEL_URL);

  // const baseUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000/";

  // const testUrl =
  //   process.env.VERCEL_ENV === "production"
  //     ? "https://react-nextjs-quiz-game.vercel.app"
  //     : "http://localhost:3000";

  const res = await fetch("https://bluey-api.vercel.app/api/bluey");

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
