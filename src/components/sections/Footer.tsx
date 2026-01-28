'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative py-12 border-t border-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="font-display font-bold text-2xl text-gradient">
                            NISHAD<span className="text-accent">.</span>
                        </div>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            © {currentYear} Made with <Heart size={14} className="text-accent fill-accent" /> by Nishad N
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a>
                        <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
                        <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 glass rounded-xl text-primary hover:glow-box transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-8 border-t border-gray-800/30 text-center">
                    <p className="text-gray-600 text-xs">
                        MERN Stack Developer | Clean Architecture Enthusiast | Kollam, Kerala
                    </p>
                </div>
            </div>
        </footer>
    )
}
