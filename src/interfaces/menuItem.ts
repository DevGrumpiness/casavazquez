interface MenuItem {
	id: number;
	name: string;
	shortDescription: string;
	longDescription: string;
	imageName: string | null;
	available: boolean;
}

export type DrinkSubType = "softdrink" | "beer" | "cocktail" | "hot";

export interface TMenuItemFood extends MenuItem {
	label: string | null;
	price: number;
}

export interface TMenuItemDrink extends MenuItem {
	label: string | null;
	prices: number[];
	quantities: number[];
	subtype?: DrinkSubType;
}

export type FoodResponseType = {
	food: TMenuItemFood[];
};

export type DrinksResponseType = {
	drinks: TMenuItemDrink[];
};
