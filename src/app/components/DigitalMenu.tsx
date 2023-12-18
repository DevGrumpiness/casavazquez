import React, { useState, useEffect } from "react";
import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import { drinks, food } from "../lib/mockdata";

type fetchStatus = "idle" | "loading" | "error" | "success";

export const DigitalMenu: React.FC = () => {
	const [food, setFood] = useState<TMenTMenuItemFooduItem[]>([]);
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
	const [status, setStatus] = useState<fetchStatus>("idle");

	useEffect(() => {
		const fetchDrinks = async (): Promise<TMenuItem[]> => {
			setStatus("loading");
			// we will move this function to a custom hook later
			return new Promise((resolve) => {
				setTimeout(() => {
					setStatus("success");
					return resolve(drinks as unknown as TMenuItemDrink[]);
				}, 2000);
			});
		};

		const fetchFood = async (): Promise<TMenuItem[]> => {
			setStatus("loading");
			// we will move this function to a custom hook later
			return new Promise((resolve) => {
				setTimeout(() => {
					setStatus("success");
					return resolve(food as unknown as TMenuItemFood[]);
				}, 2000);
			});
		};

		fetchDrinks()
			.then((items) => {
				console.log(items);
				setDrinks(items);
			})
			.catch((err) => setError("Failed to load menu items"));
		fetchFood()
			.then((items) => {
				console.log(items);
				setFood(items);
			})
			.catch((err) => setError("Failed to load menu items"));
	}, []);

	return (
		<div className="digital-menu">
			<h1>Menu</h1>

			{error && <p className="error">{error}</p>}

			<div className="menu-items">
				{food.length > 0 &&
					food.map((item) => (
						<></>
						// map menu items to MenuItem components
					))}
			</div>
		</div>
	);
};
