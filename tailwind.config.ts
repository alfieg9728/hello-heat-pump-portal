
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                heat: {
                    100: '#F5F7FA',
                    200: '#E4E7EB',
                    300: '#CBD2D9',
                    400: '#9AA5B1',
                    500: '#52B5F9',
                    600: '#3182CE',
                    700: '#2B6CB0',
                    800: '#1E3A8A',
                    900: '#1A365D'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-in-up': 'fade-in-up 0.8s ease-out',
                'pulse-soft': 'pulse-soft 3s infinite ease-in-out'
			},
            fontFamily: {
                sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['SF Pro Text', 'Georgia', 'serif']
            },
            boxShadow: {
                'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                'medium': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                'glow': '0 5px 20px -5px rgba(82, 181, 249, 0.4)'
            },
            backgroundImage: {
                'hero-pattern': 'linear-gradient(to bottom right, #F5F7FA, #E4E7EB)',
                'card-gradient': 'linear-gradient(to bottom right, white, #F5F7FA)',
                'cta-gradient': 'linear-gradient(to right, #3182CE, #52B5F9)'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
