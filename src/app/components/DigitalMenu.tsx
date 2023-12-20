import React, { useState, useEffect } from "react";
import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { drinks as mockDrinks, food as mockFood } from "../lib/mockdata";
import { MenuItemFood } from "./MenuItemFood";
import { useFetchData } from "../hooks/useFetchData";

type TFoodData = {
	food: TMenuItemFood[];
};

export const DigitalMenu: React.FC = () => {
	const [food, setFood] = useState<TMenuItemFood[]>([]);
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);

	const { data, status, errorMessage } = useFetchData<TFoodData>(
		"/mockdata_food.json"
	);

	useEffect(() => {
		data?.food && setFood(data.food);
	}, [data]);

	return (
		<div className="digitalMenu">
			<h1>Menu</h1>

			{status === "error" && (
				<p className="error">Error loading data..</p>
			)}
			{status === "loading" && <p className="error">..loading...</p>}

			<div className="menuItems">
				{food.length > 0 &&
					food.map((item) => (
						<MenuItemFood key={`foodItem${item.id}`} item={item} />
					))}
			</div>
		</div>
	);
};
