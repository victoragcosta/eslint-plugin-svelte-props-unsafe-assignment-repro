/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	semi: true,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	plugins: ["prettier-plugin-svelte"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
