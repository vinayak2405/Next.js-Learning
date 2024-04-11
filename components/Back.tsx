import Link from "next/link";

export default function Back({ children, href }) {
    return (
        <>
            <div className="flex gap-4 py-4">

                <Link href={href} className=' bg-orange-500  hover:bg-orange-700 font-bold rounded-lg py-1 px-1'>
                    <button>{children}</button>
                </Link>
            </div>
        </>
    );
}