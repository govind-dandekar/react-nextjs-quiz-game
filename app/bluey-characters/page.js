"use server";

import { headers } from "next/headers";

export default async function Page() {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/characters`);
  const posts = await res.json();

  console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
