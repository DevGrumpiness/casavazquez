interface MenuItem {
	id: number;
	subType: string;
	prices: number[];
	name: string;
	shortDescription: string;
	longDescription: string;
	variants: string[];
	imageName: string | null;
	available: boolean;
}

export type DrinkSubType = "softdrink" | "beer" | "cocktail" | "hot";

export interface TMenuItemFood extends MenuItem {
	label: string | null;
}

export interface TMenuItemDrink extends MenuItem {
	label: string | null;
}

export type FoodResponseType = {
	food: TMenuItemFood[];
};

export type DrinksResponseType = {
	drinks: TMenuItemDrink[];
};
