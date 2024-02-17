import "./AllergenList.scss";
import React from "react";

const AllergenList: React.FC = () => {
	const allergens = [
		{ number: 1, allergen: "mit Farbstoff" },
		{ number: 2, allergen: "mit Konservierungsstoff" },
		{ number: 3, allergen: "mit Geschmacksverstärker" },
		{ number: 4, allergen: "geschwefelt / enthält Sulfit" },
		{ number: 5, allergen: "geschwärzt" },
		{ number: 6, allergen: "mit Phosphat" },
		{ number: 7, allergen: "mit Süssungsmitteln" },
		{ number: 8, allergen: "koffeinhaltig" },
		{ number: 9, allergen: "enthält Gluten (Weizen)" },
		{ number: 10, allergen: "enthälz Gluten (Gerste)" },
		{ number: 11, allergen: "enthält Ei" },
		{ number: 12, allergen: "enthält Nüsse / Erdnüsse" },
		{ number: 13, allergen: "enthält Laktose / Milch" },
		{ number: 14, allergen: "enthält Sellerie" },
		{ number: 15, allergen: "enthält Senf" },
		{ number: 24, allergen: "chininhaltig" },
		{ number: 25, allergen: "enthält Gluten (Roggen)" },
	];

	return (
		<>
			<p>
				In unseren Gerichten sind teilweise Zusatzstoffe und allergene Stoffe (wie z.b. Milch, Senf, Gluten
				etc.) enthalten. Bei weiteren Fragen zu den Produkten wenden Sie sich bitte an unser Personal.
			</p>
			<ul>
				{allergens.map(({ number, allergen }) => (
					<li key={number}>{`${number}) ${allergen}`}</li>
				))}
			</ul>
		</>
	);
};

export default AllergenList;
