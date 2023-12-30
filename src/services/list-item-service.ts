import { DrinkSubType } from "../interfaces/menuItem";

const fallbackImages = {
	food: "/media/food_icon.png",
	drink: "/media/drinks_icon.png",
	softdrink: "/media/fallback_softdrink_1.png",
	beer: "/media/fallback_beer_1.png",
	hot: "/media/fallback_hot_drink_1.png",
	cocktail: "/media/fallback_cocktail_2.png",
};

export const getFallbackImageUrl = (
	type: string,
	subtype?: DrinkSubType
): string => {
	if (subtype) {
		return fallbackImages[subtype];
	}
	if (type === "food" || type === "drink") {
		return fallbackImages[type];
	}
	return "/media/logo.png";
};
