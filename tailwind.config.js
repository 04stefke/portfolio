/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			bgPrimary: "#000b58",
			fontColor: "#fff",
			lighterFontColor: "#aaa",
			darkerFont: "#fff4b75b",
			hoverBg: "rgba(148, 163, 184, 0.1)",
		},
	},
	plugins: [],
};
