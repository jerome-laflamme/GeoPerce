const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./index.html", "./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"vtd-secondary": colors.sky, // Dark mode Datepicker color
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
