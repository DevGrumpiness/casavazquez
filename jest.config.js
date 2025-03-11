module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
		},
	},
};
