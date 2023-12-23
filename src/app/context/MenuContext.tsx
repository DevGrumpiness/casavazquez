import React, { createContext, useEffect, useState } from "react";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

type MenuState = {
	drinks: TMenuItemDrink[];
	food: TMenuItemFood[];
	loading: boolean;
};

type UpdateMenuState = (newState: Partial<MenuState>) => void;

type MenuContextType = {
	menuState: MenuState;
	updateMenuState: UpdateMenuState;
};

export const MenuContext = createContext<MenuContextType | undefined>(
	undefined
);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [menuState, setMenuState] = useState<MenuState>({
		drinks: [],
		food: [],
		loading: true,
	});

	const fetchMenuItems = async () => {
		try {
			const drinksResponse = await fetch("/mockdata_drinks.json");
			const drinksData = await drinksResponse.json();
			const foodResponse = await fetch("/mockdata_food.json");
			const foodData = await foodResponse.json();

			return { drinksData, foodData };
		} catch (error) {
			console.error("Fehler beim Laden der Menüdaten", error);
			return { drinksData: [], foodData: [] };
		}
	};

	useEffect(() => {
		fetchMenuItems().then(({ drinksData, foodData }) => {
			setMenuState({
				drinks: drinksData.drinks,
				food: foodData.food,
				loading: false,
			});
		});
		console.log("menuState", menuState);
	}, []);

	const updateMenuState: UpdateMenuState = (newState) => {
		setMenuState((prev) => ({ ...prev, ...newState }));
	};

	return (
		<MenuContext.Provider value={{ menuState, updateMenuState }}>
			{menuState.loading ? <p>loading..</p> : children}
		</MenuContext.Provider>
	);
};
