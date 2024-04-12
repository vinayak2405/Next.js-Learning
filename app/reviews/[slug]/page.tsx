import { Metadata } from "next";
import Back from "@/components/Back";
import Heading from "@/components/Heading";
import getReview, { getSlugs } from '@/lib/reviews';

interface ReviewPageParams {
    slug: string;
}

interface ReviewPageProps {
    params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps): Promise<Metadata> {
    const review = await getReview(slug);
    return {
        title: review.title,
    };
}
export default async function ReviewPage({ params: { slug } }: ReviewPageProps) {

    const review = await getReview(slug);
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-2'>{review.date}</p>
            <img src={review.image}
                width="640" height="360" className='rounded-lg mb-2'
            />
            <article dangerouslySetInnerHTML={{ __html: review.body }}
                className="max-w-screen-sm prose prose-slate"
            />

            <Back href="/reviews">Cancel</Back>

        </>
    );
}