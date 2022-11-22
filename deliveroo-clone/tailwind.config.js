/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		colors: {
			turquoise: "#00ccbb",
			darkTurquoise: "#01A290",
			white: "#fff",
			darkGray: "#4C4C4C",
			lightGray: "#ddd",
			lighterGray: "#F0F0F0"
		},
		extend: {},
	},
	plugins: [],
}
