import React, { useState, useEffect } from "react";
import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { drinks as mockDrinks, food as mockFood } from "../lib/mockdata";
import { useFetchData } from "../hooks/useFetchData";
import { MenuContext } from "../context/MenuContext";
import ListItem from "./ListItem";

type TFoodData = {
	food: TMenuItemFood[];
};
type TDrinksData = {
	drinks: TMenuItemDrink[];
};

export const DigitalMenu: React.FC = () => {
	const [food, setFood] = useState<TMenuItemFood[]>([]);
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);

	const foodData = useFetchData<TFoodData>("/mockdata_food.json");
	const drinksData = useFetchData<TDrinksData>("/mockdata_drinks.json");

	const menuContext = React.useContext(MenuContext);

	if (!menuContext) {
		return <p>MenuContext not found.</p>;
	}

	const { menuState, updateMenuState } = menuContext;

	useEffect(() => {
		if (food.length > 0 && drinks.length > 0) {
			updateMenuState({
				...menuState,
				drinks: [...drinks],
				food: [...food],
			});
		}
	}, [food, drinks]);

	return (
		<div className="digitalMenu">
			<h1>Welcome</h1>
			<hr />
		</div>
	);
};
