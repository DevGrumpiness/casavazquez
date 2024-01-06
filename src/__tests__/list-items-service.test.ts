import { getFallbackImageUrl } from "./../services/list-item-service";

describe("getFallbackImageUrl", () => {
	it("should return the correct fallback image for a given subtype", () => {
		expect(getFallbackImageUrl("drink", "beer")).toBe("/media/fallback_beer_2-frei.png");
		expect(getFallbackImageUrl("drink", "cocktail")).toBe("/media/fallback_cocktail_2-frei.png");
	});

	it("should return the correct fallback image for a given type", () => {
		expect(getFallbackImageUrl("food")).toBe("/media/fallback_food_1.png");
		expect(getFallbackImageUrl("drink")).toBe("/media/drinks_icon.png");
	});

	it('should return the default image if the type is not "food" or "drink"', () => {
		expect(getFallbackImageUrl("unknown")).toBe("/media/logo.png");
	});
});
