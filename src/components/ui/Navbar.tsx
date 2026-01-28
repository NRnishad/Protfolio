'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="font-display font-bold text-2xl text-gradient cursor-pointer"
                    >
                        NISHAD<span className="text-accent">.</span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <motion.span
                                whileHover={{ y: -2 }}
                                className="text-gray-300 hover:text-primary transition-colors font-medium cursor-pointer"
                            >
                                {link.label}
                            </motion.span>
                        </Link>
                    ))}

                    {/* Download CV Button */}
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download CV
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                className="md:hidden overflow-hidden glass-light"
            >
                <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <span
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-primary transition-colors font-medium block py-2"
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="btn-primary flex items-center justify-center gap-2 mt-2"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    )
}
