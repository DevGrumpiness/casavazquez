import React, { useState, useEffect } from "react";
import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { drinks as mockDrinks, food as mockFood } from "../lib/mockdata";
import { MenuItemFood } from "./MenuItemFood";
import { useFetchData } from "../hooks/useFetchData";
import { MenuItemDrink } from "./MenuItemDrink";
import { BaseContext } from "../context/BaseContext";

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

	const { baseState, updateBaseState } = React.useContext(BaseContext);

	useEffect(() => {
		foodData.data?.food && setFood(foodData.data.food);
	}, [foodData]);

	useEffect(() => {
		drinksData.data?.drinks && setDrinks(drinksData.data.drinks);
	}, [drinksData]);

	useEffect(() => {
		if (food.length > 0 && drinks.length > 0) {
			updateBaseState({
				...baseState,
				drinks: [...drinks],
				food: [...food],
			});
		}
	}, [food, drinks]);

	return (
		<div className="digitalMenu">
			<h1>Menu</h1>
			<hr />
			<h2>Food</h2>
			{foodData.status === "error" && (
				<p className="error">
					Error loading data.. {foodData.errorMessage ?? ""}
				</p>
			)}
			{foodData.status === "loading" && (
				<p className="error">..loading...</p>
			)}

			<div className="menuItems">
				{food.length > 0 &&
					food.map((dish) => (
						<MenuItemFood key={`foodItem${dish.id}`} dish={dish} />
					))}
			</div>

			<h2>Drinks</h2>

			{drinksData.status === "error" && (
				<p className="error">
					Error loading data.. {drinksData.errorMessage ?? ""}
				</p>
			)}
			{drinksData.status === "loading" && (
				<p className="error">..loading...</p>
			)}

			<div className="menuItems">
				{drinks.length > 0 &&
					drinks.map((drink) => (
						<MenuItemDrink
							key={`foodItem${drink.id}`}
							drink={drink}
						/>
					))}
			</div>
		</div>
	);
};
