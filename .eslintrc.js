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
        indent: ["off", "tab"],
        "linebreak-style": ["off", "windows"],
        quotes: ["off", "double"],
        "prefer-const": "off",
        "react/jsx-wrap-multilines": ["off", { return: "parens" }],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/prop-types": "off",
		"@typescript-eslint/no-unused-vars": ["off", { varsIgnorePattern: "warn" }],
		"no-mixed-spaces-and-tabe": "off",
    },
};
