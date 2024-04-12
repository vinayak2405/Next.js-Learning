import { Metadata } from "next";
import Back from "@/components/Back";
import Heading from "@/components/Heading";

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <>
            <Heading>About Us</Heading>
            <p>
                This will be about page.
            </p>
            <Back href="/">Cancel</Back>
        </>
    );
}