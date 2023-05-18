const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Arial', 'sans-serif'],
				serif: ['Poppins', 'sans-serif'],
				mono: ['Jetbrains Mono', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [forms, typography, daisyui],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#f9a825',
					success: '#428c5f',
					error: '#e32d2d',
				},
			},
		],
	},
};

module.exports = config;
