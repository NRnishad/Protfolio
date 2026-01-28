'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, XCircle, Loader2 } from 'lucide-react'

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'nrnishadkottukadu@gmail.com',
        href: 'mailto:nrnishadkottukadu@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 9061917631',
        href: 'tel:+919061917631',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Kollam, Kerala, India',
        href: null,
    },
]

const socialLinks = [
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nr-nishad-6ba88224b/',
        color: 'hover:text-[#0077b5] hover:border-[#0077b5]',
    },
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/NRnishad',
        color: 'hover:text-white hover:border-white',
    },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<FormStatus>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error')
            setErrorMessage('Please fill in all fields')
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setStatus('error')
            setErrorMessage('Please enter a valid email address')
            return
        }

        setStatus('loading')
        setErrorMessage('')

        try {
            // Using Formsubmit.co - Free form submission service
            const response = await fetch('https://formsubmit.co/ajax/nrnishadkottukadu@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact: Message from ${formData.name}`,
                })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })

                // Reset to idle after 5 seconds
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Failed to send message. Please try again or email directly.')

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-mono text-sm uppercase tracking-widest">Get In Touch</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let&apos;s discuss how we can work together on your next project.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>

                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:glow-box transition-all duration-300">
                                        <info.icon size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-gray-200 hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-200">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Social Links */}
                            <div className="pt-6">
                                <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 border border-transparent ${social.color} transition-all duration-300`}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Message Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-display font-bold mb-6">Send a Quick Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-dark-50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-dark-50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-dark-50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {/* Status Messages */}
                                <AnimatePresence mode="wait">
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-lg"
                                        >
                                            <CheckCircle size={20} />
                                            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg"
                                        >
                                            <XCircle size={20} />
                                            <span>{errorMessage}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                    disabled={status === 'loading'}
                                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            <p className="text-gray-500 text-xs text-center mt-4">
                                Or email me directly at{' '}
                                <a href="mailto:nrnishadkottukadu@gmail.com" className="text-primary hover:underline">
                                    nrnishadkottukadu@gmail.com
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
