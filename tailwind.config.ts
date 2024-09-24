import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		keyframes: {
			blink: {
				"100%": { opacity: "0" },
			},
			appear: {
				"100%": { opacity: "100" },
			},
			"slide-in": {
				from: { opacity: "0", transform: "translateY(-0.5rem)" },
				to: { opacity: "1", transform: "translateY(0)" },
			},
		},
		animation: {
			blink: "blink ease-out 0.8s infinite",
			appear: "appear 1s forwards",
			"slide-in": "slide-in 0.4s forwards var(--slide-in-delay,0ms)",
		},
	},
	plugins: [],
};
export default config;
