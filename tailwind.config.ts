import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00d4ff',
                    50: '#e6fbff',
                    100: '#ccf7ff',
                    200: '#99efff',
                    300: '#66e7ff',
                    400: '#33dfff',
                    500: '#00d4ff',
                    600: '#00aacc',
                    700: '#008099',
                    800: '#005566',
                    900: '#002b33',
                },
                accent: {
                    DEFAULT: '#ff007f',
                    50: '#ffe6f2',
                    100: '#ffcce5',
                    200: '#ff99cc',
                    300: '#ff66b2',
                    400: '#ff3399',
                    500: '#ff007f',
                    600: '#cc0066',
                    700: '#99004c',
                    800: '#660033',
                    900: '#330019',
                },
                dark: {
                    DEFAULT: '#0a0a0f',
                    50: '#1a1a24',
                    100: '#12121a',
                    200: '#0f0f14',
                    300: '#0a0a0f',
                    400: '#050508',
                    500: '#000000',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 20s linear infinite',
                'gradient': 'gradient 8s linear infinite',
                'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                'blink-caret': {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: '#00d4ff' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'cyber-grid': 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
            },
            boxShadow: {
                'glow-primary': '0 0 30px rgba(0, 212, 255, 0.4)',
                'glow-accent': '0 0 30px rgba(255, 0, 127, 0.4)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            backdropBlur: {
                'glass': '10px',
            },
        },
    },
    plugins: [],
}

export default config
