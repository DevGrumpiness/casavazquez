const fs = require("fs");
const path = require("path");
const sass = require("sass");

const scssDirectory = "./src";
const mainScssFile = "./src/styles/auto_generated_main.scss";

let importStatements = "";

function searchScssFiles(directory) {
	fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
		const fullPath = path.join(directory, dirent.name);
		if (dirent.isDirectory()) {
			searchScssFiles(fullPath);
		} else if (
			dirent.name.endsWith(".scss") &&
			dirent.name !== "auto_generated_main.scss"
		) {
			const relativePath = path.relative(
				path.dirname(mainScssFile),
				fullPath
			);
			const formattedPath = relativePath.replace(/\\/g, "/");
			console.log(`Importing SCSS file: ${formattedPath}`);
			importStatements += `@import '${formattedPath}';\n`;
		}
	});
}

searchScssFiles(scssDirectory);

fs.writeFileSync(mainScssFile, importStatements);
console.log(`Updated ${mainScssFile} with imports.`);

const result = sass.compile(mainScssFile);
fs.writeFileSync("./src/styles/auto_generated_main.css", result.css);
