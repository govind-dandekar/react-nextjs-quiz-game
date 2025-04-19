export async function GET() {
  // For example, fetch data from your DB here
  const users = [
    {
      id: 1,
      review: "'I love this game!'",
    },
    { id: 2, review: "'The Bluey Quiz is so much fun!'" },
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
