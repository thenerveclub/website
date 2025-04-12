import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			screens: {
				sm: '640px', // Small screens and up
				md: '768px', // Medium screens and up
				lg: '1080px', // Large screens and up
				xl: '1475px', // Extra large screens and up
				xxl: '2048px', // 2x Extra large screens and up
			},
		},
	},
	plugins: [],
} satisfies Config;
