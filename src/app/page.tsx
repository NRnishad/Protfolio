'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/Navbar'
import SocialDock from '@/components/ui/SocialDock'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
    ssr: false,
    loading: () => (
        <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-primary font-mono">Loading 3D Experience...</p>
            </div>
        </div>
    ),
})

export default function Home() {
    return (
        <main className="relative">
            {/* 3D Background Scene */}
            <Scene3D />

            {/* Navigation */}
            <Navbar />

            {/* Floating Social Dock */}
            <SocialDock />

            {/* Main Content Sections */}
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    )
}
