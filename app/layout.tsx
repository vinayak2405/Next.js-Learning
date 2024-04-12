import { Metadata } from "next";
import { ReactNode } from "react"
import NavBar from "../components/NavBar";
import { orbitron } from './fonts';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer',
    },
};

interface Layoutprops {
    children: ReactNode;
}

export default function RootLayout({ children }: Layoutprops) {
    return (
        <html lang="en" className={orbitron.variable}>
            <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
                <header>
                    <NavBar />
                </header>
                <main className='grow py-3'>
                    {children}
                </main>
                <footer className='border-t text-center text-slate-500 text-xs py-3'>
                    Game data and images courtesy of{' '} 
                    <a href="https://rawg.io/" target="_blank"
                    className='text-orange-800 hover:underline'>RAWG</a>
                </footer>
            </body>
        </html>
    )
}