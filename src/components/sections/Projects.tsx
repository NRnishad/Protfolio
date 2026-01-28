'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Laptop, Smartphone } from 'lucide-react'

const projects = [
    {
        title: 'KnowMore - LMS Web App',
        description: 'Full-stack Learning Management System with real-time chat, video streaming, and role-based access control.',
        tech: ['React', 'Express', 'Socket.IO', 'AWS', 'Stripe'],
        links: {
            live: 'https://know-more-nine.vercel.app/',
            github: 'https://github.com/NRnishad',
        },
        icon: Laptop,
        gradient: 'from-primary via-blue-500 to-purple-500',
        features: ['Real-time Chat', 'Video Streaming', 'Payment Integration', 'Role Management'],
    },
    {
        title: 'TimeSea - E-commerce',
        description: 'Complete e-commerce platform with cart management, wallet system, and comprehensive admin dashboard.',
        tech: ['Node.js', 'MongoDB', 'Google OAuth', 'Razorpay', 'MVC'],
        links: {
            live: 'https://timesea.nishad.live',
            github: 'https://github.com/NRnishad/TimeSea',
        },
        icon: Smartphone,
        gradient: 'from-accent via-pink-500 to-orange-500',
        features: ['Cart & Wallet', 'Order Tracking', 'Admin Panel', 'Payment Gateway'],
    },
]

export default function Projects() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 cyber-grid opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-mono text-sm uppercase tracking-widest">Portfolio</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing full-stack applications built with modern technologies and best practices.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="glass rounded-2xl overflow-hidden hover:glow-box transition-all duration-500">
                                {/* Project Preview */}
                                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center overflow-hidden`}>
                                    {/* Device Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotateY: 15 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="relative"
                                    >
                                        <project.icon size={120} className="text-white/90" strokeWidth={1} />

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 blur-2xl bg-white/20 scale-150" />
                                    </motion.div>

                                    {/* Floating particles */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                                            initial={{
                                                x: Math.random() * 300 - 150,
                                                y: Math.random() * 200 - 100,
                                            }}
                                            animate={{
                                                y: [0, -20, 0],
                                                opacity: [0.3, 0.8, 0.3],
                                            }}
                                            transition={{
                                                duration: 3,
                                                delay: i * 0.5,
                                                repeat: Infinity,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {project.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-mono bg-dark-50 text-gray-300 rounded-full border border-gray-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={18} />
                                            Source
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
