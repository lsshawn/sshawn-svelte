const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Arial', 'sans-serif'],
				serif: ['Poppins', 'Arial', 'sans-serif'],
				mono: ['Poppins', 'Arial', 'sans-serif'],
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
				},
			},
		],
	},
};

module.exports = config;
