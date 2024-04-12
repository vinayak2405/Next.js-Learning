import { Metadata } from "next";
import Link from "next/link";
import Heading from "@/components/Heading";
import Back from "@/components/Back";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
    title: 'Reviews',
};

export default async function ReviewsPage() {
    const reviews = await getReviews();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-row flex-wrap gap-3">
                {reviews.map((review) => (
                    <li key={review.slug}
                        className='border w-80 bg-white rounded shadow hover:shadow-xl'>
                        <Link href={`/reviews/${review.slug}`}>
                            <img src={review.image}
                                width="320" height="180" className='rounded-t'
                            />
                            <h1 className='font-orbitron font-semibold text-center py-1'>
                                {review.title}
                            </h1>
                        </Link>
                    </li>
                ))}
            </ul>
            <Back href="/">Cancel</Back>
        </>
    );
}