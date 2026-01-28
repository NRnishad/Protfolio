import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Nishad N | MERN Stack Developer',
    description: 'Architecting scalable digital solutions with Clean Architecture. Self-taught developer with strong foundations in JS/TS. Expert in building full-stack apps.',
    keywords: ['MERN Stack', 'React', 'Node.js', 'Developer', 'Full Stack', 'Clean Architecture'],
    authors: [{ name: 'Nishad N' }],
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    openGraph: {
        title: 'Nishad N | MERN Stack Developer',
        description: 'Architecting scalable digital solutions with Clean Architecture.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
                <div className="relative min-h-screen bg-dark">
                    {children}
                </div>
            </body>
        </html>
    )
}
