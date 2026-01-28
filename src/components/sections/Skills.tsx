'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
    {
        title: 'Frontend',
        color: 'primary',
        skills: [
            { name: 'React', level: 95 },
            { name: 'Next.js', level: 85 },
            { name: 'Redux', level: 90 },
            { name: 'Tailwind', level: 95 },
            { name: 'Material UI', level: 80 },
        ],
    },
    {
        title: 'Backend',
        color: 'accent',
        skills: [
            { name: 'Node.js', level: 95 },
            { name: 'Express', level: 95 },
            { name: 'Clean Architecture', level: 90 },
            { name: 'REST APIs', level: 95 },
            { name: 'GraphQL', level: 75 },
        ],
    },
    {
        title: 'Database & Languages',
        color: 'purple',
        skills: [
            { name: 'MongoDB', level: 90 },
            { name: 'JavaScript', level: 95 },
            { name: 'TypeScript', level: 85 },
        ],
    },
    {
        title: 'Tools & Cloud',
        color: 'green',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'AWS', level: 75 },
            { name: 'Firebase', level: 80 },
            { name: 'Figma', level: 70 },
            { name: 'Postman', level: 90 },
        ],
    },
]

const colorMap: Record<string, string> = {
    primary: 'from-primary to-blue-400',
    accent: 'from-accent to-pink-400',
    purple: 'from-purple-500 to-violet-400',
    green: 'from-emerald-500 to-green-400',
}

const bgColorMap: Record<string, string> = {
    primary: 'bg-primary/10 border-primary/20',
    accent: 'bg-accent/10 border-accent/20',
    purple: 'bg-purple-500/10 border-purple-500/20',
    green: 'bg-emerald-500/10 border-emerald-500/20',
}

export default function Skills() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-accent font-mono text-sm uppercase tracking-widest">Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit built through hands-on experience with modern web technologies.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="glass rounded-2xl p-8"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorMap[category.color]}`} />
                                <h3 className="text-xl font-display font-bold">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-dark-50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${colorMap[category.color]}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Skill Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
                >
                    {['Clean Architecture', 'MVC Pattern', 'RESTful APIs', 'Socket.IO', 'JWT Auth', 'OAuth 2.0', 'Stripe', 'Razorpay', 'S3 Uploads', 'Nodemailer'].map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="px-4 py-2 glass-light rounded-full text-sm text-gray-300 border border-gray-700/50 cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
