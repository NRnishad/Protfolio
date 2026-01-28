'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const socialLinks = [
    {
        icon: Github,
        href: 'https://github.com/NRnishad',
        label: 'GitHub',
        color: 'hover:text-white',
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/nr-nishad-6ba88224b/',
        label: 'LinkedIn',
        color: 'hover:text-[#0077b5]',
    },
    {
        icon: Mail,
        href: 'mailto:nrnishadkottukadu@gmail.com',
        label: 'Email',
        color: 'hover:text-primary',
    },
    {
        icon: Phone,
        href: 'tel:+919061917631',
        label: 'Phone',
        color: 'hover:text-accent',
    },
]

export default function SocialDock() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        >
            {/* Vertical line */}
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto" />

            {/* Social icons */}
            {socialLinks.map((social, index) => (
                <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, x: 5 }}
                    className={`p-3 glass rounded-lg text-gray-400 transition-all duration-300 ${social.color} group`}
                    aria-label={social.label}
                >
                    <social.icon size={20} />

                    {/* Tooltip */}
                    <span className="absolute left-full ml-3 px-3 py-1 bg-dark-50 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {social.label}
                    </span>
                </motion.a>
            ))}

            {/* Vertical line */}
            <div className="w-px h-20 bg-gradient-to-b from-primary via-transparent to-transparent mx-auto" />
        </motion.div>
    )
}
