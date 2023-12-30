interface MenuItem {
	id: number;
	type: "food" | "drink";
	name: string;
	shortDescription: string;
	longDescription: string;
	price: number;
	imageUrl: string | null;
	available: boolean;
	allergens?: string[];
}

type DrinkSize = "standard" | "small" | "medium" | "large"; // Drinks that come only in one size should be "standard"

export type DrinkSubType = "softdrink" | "beer" | "cocktail" | "hot";

export interface TMenuItemFood extends MenuItem {
	label: "veggie" | "vegan" | null;
}

export interface TMenuItemDrink extends MenuItem {
	label: "alcoholic" | "hot" | null;
	subtype?: DrinkSubType;
	availableSizes: DrinkSize[];
}

export type FoodResponseType = {
	food: TMenuItemFood[];
};

export type DrinksResponseType = {
	drinks: TMenuItemDrink[];
};
