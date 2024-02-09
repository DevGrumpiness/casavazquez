interface MenuItem {
	id: number;
	subType: string;
	prices: number[];
	name: string;
	shortDescription: string;
	longDescription: string;
	imageName: string | null;
	available: boolean;
}

export type DrinkSubType = "softdrink" | "beer" | "cocktail" | "hot";

export interface TMenuItemFood extends MenuItem {
	label: string | null;
	variants: string[];
}

export interface TMenuItemDrink extends MenuItem {
	label: string | null;
	quantities: number[];
}

export type FoodResponseType = {
	food: TMenuItemFood[];
};

export type DrinksResponseType = {
	drinks: TMenuItemDrink[];
};
