export type CocktailPersonality = 'bitter' | 'sweet' | 'mysterious' | 'bitchy' | 'adventurous' | 'virgin' | 'fruity';

export interface Cocktail {
    id: string | number;
    femaleName: string;
    maleName: string;
    personality: CocktailPersonality;
    description: string;
    ingredients: string[];
    price: string;
    image?: string;
    characteristics: string[];
    alcoholic: boolean;
}
