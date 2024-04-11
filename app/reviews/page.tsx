import Link from "next/link";
import Heading from "@/components/Heading";
import Back from "@/components/Back";

export default function ReviewsPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-col gap-3">
                <li className='border w-80 bg-white rounded shadow hover:shadow-xl'>
                    <Link href="/reviews/hollow-knight">
                        <img src="/images/hollow-knight.jpg"
                            width="320" height="180" className='rounded-t'
                        />
                        <h1 className='font-orbitron font-semibold text-center py-1'>
                            Hollow Knight
                        </h1>
                    </Link>
                </li>
                <li className='border w-80 bg-white rounded shadow hover:shadow-xl'>
                    <Link href="/reviews/stardrew-valley">
                        <img src="/images/stardew-valley.jpg"
                            width="320" height="180" className='rounded-t'
                        />
                        <h1 className='font-orbitron font-semibold text-center py-1'>
                            Stardrew Valley
                        </h1>
                    </Link>
                </li>
            </ul>
            <Back href="/">Cancel</Back>
        </>
    );
}