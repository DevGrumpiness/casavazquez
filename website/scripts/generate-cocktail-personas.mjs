// One-off generator for the Cocktail Tinder personality avatars.
//
// These are NOT real photos of people. They are illustrated, deterministic
// avatars built with the "Personas by Draftbit" style from DiceBear
// (https://www.dicebear.com/styles/personas/), licensed CC BY 4.0
// (https://creativecommons.org/licenses/by/4.0/). Attribution: "Personas"
// by Draftbit (https://draftbit.com), via DiceBear (https://www.dicebear.com).
//
// Run manually with `node scripts/generate-cocktail-personas.mjs` whenever the
// mapping below changes. The generated SVGs are committed to the repo so the
// app never depends on a network call to DiceBear at build or run time.
// The user can later swap any of these files 1:1 with custom-generated
// artwork - just keep the same file names.
//
// NOTE: The "sweet" personality now uses custom illustrated artwork
// (sweet-male.png / sweet-female.png, see personalityTheme.ts) instead of a
// generated DiceBear avatar, so it has been removed from `configs` below.
import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createAvatar } from '@dicebear/core';
import { personas } from '@dicebear/collection';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = join(__dirname, '..', 'src', 'assets', 'cocktail-tinder', 'personas');

// One config per personality x gender. Hair/mouth/eyes/facialHair are chosen
// to visually match the personality's character; colors mirror the
// personality color palette used in the Cocktail Tinder UI (see
// `src/components/CocktailTinder/personalityTheme.ts`).
const configs = {
  'bitter-female': {
    seed: 'bitter-female', hair: ['long'], hairColor: ['3a2e2b'], mouth: ['smirk'], eyes: ['sleep'],
    nose: ['mediumRound'], body: ['rounded'], clothingColor: ['6b4a2f'], backgroundColor: ['b8860b'],
  },
  'bitter-male': {
    seed: 'bitter-male', hair: ['shortCombover'], hairColor: ['2b2320'], mouth: ['smirk'], eyes: ['sleep'],
    facialHair: ['shadow'], facialHairProbability: 100, nose: ['wrinkles'], body: ['squared'],
    clothingColor: ['6b4a2f'], backgroundColor: ['b8860b'],
  },
  'mysterious-female': {
    seed: 'mysterious-female', hair: ['long'], hairColor: ['1a1730'], mouth: ['smirk'], eyes: ['sleep'],
    nose: ['mediumRound'], body: ['rounded'], clothingColor: ['4b3a7a'], backgroundColor: ['6c5ce7'],
  },
  'mysterious-male': {
    seed: 'mysterious-male', hair: ['sideShave'], hairColor: ['1a1730'], mouth: ['smirk'], eyes: ['sleep'],
    facialHair: ['goatee'], facialHairProbability: 100, nose: ['mediumRound'], body: ['squared'],
    clothingColor: ['4b3a7a'], backgroundColor: ['6c5ce7'],
  },
  'bitchy-female': {
    seed: 'bitchy-female', hair: ['curlyBun'], hairColor: ['1a1a1a'], mouth: ['smirk'], eyes: ['wink'],
    nose: ['smallRound'], body: ['rounded'], clothingColor: ['b91d3a'], backgroundColor: ['ff4757'],
  },
  'bitchy-male': {
    seed: 'bitchy-male', hair: ['mohawk'], hairColor: ['1a1a1a'], mouth: ['smirk'], eyes: ['wink'],
    facialHair: ['goatee'], facialHairProbability: 100, nose: ['wrinkles'], body: ['squared'],
    clothingColor: ['b91d3a'], backgroundColor: ['ff4757'],
  },
  'adventurous-female': {
    seed: 'adventurous-female', hair: ['bobBangs'], hairColor: ['4a3220'], mouth: ['surprise'], eyes: ['open'],
    nose: ['mediumRound'], body: ['rounded'], clothingColor: ['0d8a6b'], backgroundColor: ['00b894'],
  },
  'adventurous-male': {
    seed: 'adventurous-male', hair: ['fade'], hairColor: ['3a2a1a'], mouth: ['surprise'], eyes: ['open'],
    facialHair: ['beardMustache'], facialHairProbability: 60, nose: ['mediumRound'], body: ['squared'],
    clothingColor: ['0d8a6b'], backgroundColor: ['00b894'],
  },
  'fruity-female': {
    seed: 'fruity-female', hair: ['curly'], hairColor: ['a45c2e'], mouth: ['smile'], eyes: ['happy'],
    nose: ['smallRound'], body: ['rounded'], clothingColor: ['e67e22'], backgroundColor: ['ff9f43'],
  },
  'fruity-male': {
    seed: 'fruity-male', hair: ['curly'], hairColor: ['8a4a1e'], mouth: ['smile'], eyes: ['happy'],
    facialHairProbability: 0, nose: ['smallRound'], body: ['squared'],
    clothingColor: ['e67e22'], backgroundColor: ['ff9f43'],
  },
};

async function generate() {
  await fs.mkdir(outDir, { recursive: true });

  for (const [name, options] of Object.entries(configs)) {
    const avatar = createAvatar(personas, { ...options, size: 128, radius: 50 });
    const svg = avatar.toString();
    const filePath = join(outDir, `${name}.svg`);
    await fs.writeFile(filePath, svg, 'utf-8');
    console.log(`✅ Generated ${filePath}`);
  }
}

generate().catch((error) => {
  console.error('Failed to generate cocktail persona avatars:', error);
  process.exitCode = 1;
});
