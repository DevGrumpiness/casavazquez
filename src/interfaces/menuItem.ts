interface MenuItem {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string | null;
	available: boolean;
	allergens?: string[];
}

type DrinkSize = "standard" | "small" | "medium" | "large"; // Drinks that come only in one size should be "standard"

export interface TMenuItemFood extends MenuItem {
	label: "veggie" | "vegan" | null;
}

export interface TMenuItemDrink extends MenuItem {
	label: "alcoholic" | "hot" | null;
	availableSizes: DrinkSize[];
}
