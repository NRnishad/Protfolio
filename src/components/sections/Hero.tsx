'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import Image from 'next/image'

const taglines = [
    "Architecting scalable digital solutions",
    "Building with Clean Architecture",
    "Creating seamless user experiences",
    "Full-stack MERN Development",
]

export default function Hero() {
    const [typedText, setTypedText] = useState('')
    const [taglineIndex, setTaglineIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentTagline = taglines[taglineIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentTagline.length) {
                    setTypedText(currentTagline.slice(0, typedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentTagline.slice(0, typedText.length - 1))
                } else {
                    setIsDeleting(false)
                    setTaglineIndex((prev) => (prev + 1) % taglines.length)
                }
            }
        }, isDeleting ? 30 : 80)

        return () => clearTimeout(timeout)
    }, [typedText, taglineIndex, isDeleting])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pb-24">
                <div className="max-w-5xl mx-auto">
                    {/* Profile Picture and Content Grid */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                        {/* Profile Picture */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="relative flex-shrink-0"
                        >
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-50 animate-pulse" />

                            {/* Rotating border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75"
                            />

                            {/* Image container */}
                            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-dark">
                                <Image
                                    src="/profilepic.png"
                                    alt="Nishad N - MERN Stack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating animation wrapper */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent p-3 rounded-full shadow-lg"
                            >
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            {/* Pre-title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center justify-center gap-2 mb-6"
                            >
                                <MapPin size={16} className="text-accent" />
                                <span className="text-gray-400 text-sm font-mono">Kollam, Kerala, India</span>
                            </motion.div>

                            {/* Main Title */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mb-6"
                            >
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight">
                                    <span className="text-gradient glow-text">NISHAD</span>
                                    <span className="text-white"> N</span>
                                </h1>
                            </motion.div>

                            {/* Role Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
                            >
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-primary font-semibold">MERN Stack Developer</span>
                            </motion.div>

                            {/* Typing animation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="h-8 mb-8"
                            >
                                <p className="text-xl md:text-2xl text-gray-300 font-light">
                                    {typedText}
                                    <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
                                </p>
                            </motion.div>

                            {/* Summary */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                            >
                                Self-taught developer with strong foundations in JavaScript & TypeScript.
                                Expert in building full-stack applications using Clean Architecture and MVC patterns.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary px-8 py-3 text-lg"
                                >
                                    View My Work
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-outline px-8 py-3 text-lg"
                                >
                                    Get In Touch
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - positioned relative to section, not content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.a
                    href="#projects"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                >
                    <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={20} className="text-primary" />
                </motion.a>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    )
}
