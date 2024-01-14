const tab = "\t";

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["warn", "windows"],
		quotes: ["warn", "double"],
		"prefer-const": "error",
		"react/jsx-wrap-multilines": ["error", { return: "parens" }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "off",
		"react/prop-types": "off",
		"@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "error" }],
	},
};
