import ReviewsClient from "@/components/client-server/client-components/reviews-client";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/reviews`);

  const reviews = await res.json();

  return reviews.map((review) => ({
    id: String(post.id),
  }));
}

export default async function GameReviews({ params }) {
  return (
    <>
      <ul className="text-3xl space-y-4">
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              {review.text} {"   -"} {review.reviewerName}
            </li>
          );
        })}
      </ul>
      <ReviewsClient />
    </>
  );
}
