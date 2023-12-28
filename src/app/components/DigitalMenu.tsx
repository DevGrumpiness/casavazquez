import "./DigitalMenu.scss";
import React, { useState, useEffect } from "react";

import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { useFetchData } from "../hooks/useFetchData";
import { MenuContext } from "../context/MenuContext";
import Link from "next/link";

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
			<div className="menu-link-container">
				<Link className="menu-link" href="/food">
					Hungry
				</Link>
				<Link className="menu-link" href="/drinks">
					Thirsty
				</Link>
			</div>
		</div>
	);
};
