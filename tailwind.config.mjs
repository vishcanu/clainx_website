/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary Neon Palette
                neon: {
                    blue: '#00D4FF',
                    cyan: '#00FFE7',
                    purple: '#8B5CF6',
                    orange: '#FF6B00',
                    lime: '#AAFF00',
                    pink: '#FF0080',
                },
                // Brand Colors
                brand: {
                    primary: '#00D4FF',
                    secondary: '#8B5CF6',
                    accent: '#FF6B00',
                    success: '#AAFF00',
                },
                // Dark theme
                dark: {
                    950: '#020408',
                    900: '#050C14',
                    800: '#08111E',
                    700: '#0D1928',
                    600: '#122135',
                    500: '#1A2D45',
                    400: '#243A57',
                    300: '#2E4A6E',
                    200: '#3D6190',
                },
                // Light theme surface
                light: {
                    50: '#F8FAFF',
                    100: '#EFF4FF',
                    200: '#E0EAFF',
                    300: '#C7D9FF',
                    400: '#A5C0FF',
                },
                // Tier colors
                tier: {
                    lowkey: '#94A3B8',
                    cooking: '#22D3EE',
                    slaps: '#8B5CF6',
                    goated: '#F59E0B',
                    certified: '#FF6B00',
                },
                // Siege colors
                siege: {
                    blaze: '#FF4500',
                    cyclone: '#00BFFF',
                    tremor: '#8B4513',
                    deluge: '#1E90FF',
                    rift: '#9400D3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
                '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '100': '25rem',
                '128': '32rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'grid-dark': 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
                'grid-light': 'linear-gradient(rgba(0,100,200,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,200,0.06) 1px, transparent 1px)',
                'noise': "url('/noise.svg')",
            },
            backgroundSize: {
                'grid': '60px 60px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 10s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'scan': 'scan 3s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
                'gradient-x': 'gradientX 4s ease infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
                'counter': 'counter 2s ease-out forwards',
                'territory-claim': 'territoryClaim 0.8s ease-out forwards',
                'map-pulse': 'mapPulse 3s ease-in-out infinite',
                'orb-float': 'orbFloat 12s ease-in-out infinite',
                'radar-sweep': 'radarSweep 3s linear infinite',
                'typing': 'typing 3.5s steps(30, end), blink 0.75s step-end infinite',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'border-glow': 'borderGlow 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
                    '50%': { boxShadow: '0 0 60px rgba(0,212,255,0.8), 0 0 100px rgba(0,212,255,0.3)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 0%' },
                    '25%': { backgroundPosition: '100% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '75%': { backgroundPosition: '0% 100%' },
                },
                territoryClaim: {
                    '0%': { opacity: '0', transform: 'scale(0.5)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                mapPulse: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' },
                },
                orbFloat: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '50%': { transform: 'translate(-20px, -80px) scale(0.9)' },
                    '75%': { transform: 'translate(-40px, -20px) scale(1.05)' },
                },
                radarSweep: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                blink: {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: 'orange' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                borderGlow: {
                    '0%, 100%': { borderColor: 'rgba(0,212,255,0.3)' },
                    '50%': { borderColor: 'rgba(0,212,255,0.8)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'neon-blue': '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
                'neon-cyan': '0 0 20px rgba(0,255,231,0.5), 0 0 40px rgba(0,255,231,0.2)',
                'neon-purple': '0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.2)',
                'neon-orange': '0 0 20px rgba(255,107,0,0.5), 0 0 40px rgba(255,107,0,0.2)',
                'neon-lime': '0 0 20px rgba(170,255,0,0.5), 0 0 40px rgba(170,255,0,0.2)',
                'glass': '0 8px 32px 0 rgba(0,0,0,0.4)',
                'glass-light': '0 8px 32px 0 rgba(0,80,160,0.12)',
                'glow-sm': '0 0 10px rgba(0,212,255,0.4)',
                'glow-lg': '0 0 60px rgba(0,212,255,0.3)',
                'tier-goated': '0 0 30px rgba(245,158,11,0.6)',
                'tier-certified': '0 0 30px rgba(255,107,0,0.6)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
            },
            screens: {
                'xs': '375px',
                '3xl': '1920px',
                '4xl': '2560px',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [],
};
