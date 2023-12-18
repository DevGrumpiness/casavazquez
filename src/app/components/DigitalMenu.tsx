import React, { useState, useEffect } from "react";
import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { drinks as mockDrinks, food as mockFood } from "../lib/mockdata";
import { MenuItemFood } from "./MenuItemFood";

type fetchStatus = "idle" | "loading" | "error" | "success";

export const DigitalMenu: React.FC = () => {
	const [food, setFood] = useState<TMenuItemFood[]>([]);
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
	const [status, setStatus] = useState<fetchStatus>("idle");

	useEffect(() => {
		const fetchDrinks = async (): Promise<TMenuItemDrink[]> => {
			setStatus("loading");
			// we will move this function to a custom hook later
			return new Promise((resolve) => {
				setTimeout(() => {
					setStatus("success");
					return resolve(mockDrinks as unknown as TMenuItemDrink[]);
				}, 2000);
			});
		};

		const fetchFood = async (): Promise<TMenuItemFood[]> => {
			setStatus("loading");
			// we will move this function to a custom hook later
			return new Promise((resolve) => {
				setTimeout(() => {
					setStatus("success");
					return resolve(mockFood as unknown as TMenuItemFood[]);
				}, 2000);
			});
		};

		fetchDrinks()
			.then((items) => {
				console.log(items);
				setDrinks(items);
			})
			.catch((err) => setStatus("error"));
		fetchFood()
			.then((items) => {
				console.log(items);
				setFood(items);
			})
			.catch((err) => setStatus("error"));
	}, []);

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
