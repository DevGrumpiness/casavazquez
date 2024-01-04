interface MenuItem {
	id: number;
	name: string;
	shortDescription: string;
	longDescription: string;
	price: number;
	imageName: string | null;
	available: boolean;
}

export type DrinkSubType = "softdrink" | "beer" | "cocktail" | "hot";
type FoodLabel = "veggie" | "vegan";
type DrinkLabels = "alcoholic" | "hot";

export interface TMenuItemFood extends MenuItem {
	labels: FoodLabel[] | null;
}

export interface TMenuItemDrink extends MenuItem {
	labels: DrinkLabels[] | null;
	subtype?: DrinkSubType;
}

export type FoodResponseType = {
	food: TMenuItemFood[];
};

export type DrinksResponseType = {
	drinks: TMenuItemDrink[];
};
