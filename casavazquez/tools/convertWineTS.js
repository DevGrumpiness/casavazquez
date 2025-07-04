import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = ['blancos', 'rosados', 'tintos', 'vinos'];
const inputDir = path.join(__dirname, '../website/src/data');
const outputDir = path.join(__dirname, '../backend/staticdata');

for (const file of files) {
  const tsPath = path.join(inputDir, `${file}.ts`);
  const content = await readFile(tsPath, 'utf-8');

  const lines = content
    .split('\n')
    .filter(line => !line.trim().startsWith('import'))
    .join('\n');

  const jsonString = lines
    .replace(/^export\s+default\s+/, '')
    .replace(/,\s*\]$/, ']');

  try {
    const json = JSON.parse(jsonString);
    await writeFile(path.join(outputDir, `${file}.json`), JSON.stringify(json, null, 2));
    console.log(`✓ ${file}.json exportiert`);
  } catch (err) {
    console.error(`❌ Fehler in ${file}.ts:\n`, err.message);
  }
}
