import type { CocktailPersonality } from '../../interfaces/cocktail';
import type { GenderPreference } from '../../composables/useGenderPreference';

import bitterFemale from '../../assets/cocktail-tinder/personas/bitter-female.svg?url';
import bitterMale from '../../assets/cocktail-tinder/personas/bitter-male.svg?url';
import sweetFemale from '../../assets/cocktail-tinder/personas/sweet-female.png?url';
import sweetMale from '../../assets/cocktail-tinder/personas/sweet-male.png?url';
import mysteriousFemale from '../../assets/cocktail-tinder/personas/mysterious-female.svg?url';
import mysteriousMale from '../../assets/cocktail-tinder/personas/mysterious-male.svg?url';
import bitchyFemale from '../../assets/cocktail-tinder/personas/bitchy-female.svg?url';
import bitchyMale from '../../assets/cocktail-tinder/personas/bitchy-male.svg?url';
import adventurousFemale from '../../assets/cocktail-tinder/personas/adventurous-female.svg?url';
import adventurousMale from '../../assets/cocktail-tinder/personas/adventurous-male.svg?url';
import fruityFemale from '../../assets/cocktail-tinder/personas/fruity-female.svg?url';
import fruityMale from '../../assets/cocktail-tinder/personas/fruity-male.svg?url';

// Accent color per personality, used for avatar borders/glow so the
// illustration stays clearly tied to its personality even without the emoji.
export const personalityColors: Record<CocktailPersonality, string> = {
    bitter: '#b8860b',
    sweet: '#ff6b9d',
    mysterious: '#6c5ce7',
    bitchy: '#ff4757',
    adventurous: '#00b894',
    virgin: '#8ecae6',
    fruity: '#ff9f43',
};

type PersonaImages = Partial<Record<GenderPreference, string>>;

// Illustrated (non-photographic) avatars representing each personality, built
// with the "Personas by Draftbit" DiceBear style (CC BY 4.0). See
// `scripts/generate-cocktail-personas.mjs` for how these were generated and
// how to regenerate/replace them with custom artwork later.
const personaImages: Record<CocktailPersonality, PersonaImages> = {
    bitter: { female: bitterFemale, male: bitterMale },
    sweet: { female: sweetFemale, male: sweetMale },
    mysterious: { female: mysteriousFemale, male: mysteriousMale },
    bitchy: { female: bitchyFemale, male: bitchyMale },
    adventurous: { female: adventurousFemale, male: adventurousMale },
    virgin: {},
    fruity: { female: fruityFemale, male: fruityMale },
};

export const getPersonaImage = (
    personality: CocktailPersonality,
    gender: GenderPreference
): string | undefined => personaImages[personality]?.[gender];

export const getPersonalityColor = (personality: CocktailPersonality): string =>
    personalityColors[personality] || '#667eea';
