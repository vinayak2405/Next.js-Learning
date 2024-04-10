import { ReactNode } from "react"

interface Layoutprops {
    children: ReactNode;
}

export default function RootLayout({ children }: Layoutprops) {
    return (
        <html lang="en">
            <body>
                <header>
                    [header]
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [footer]
                </footer>
            </body>
        </html>
    )
}