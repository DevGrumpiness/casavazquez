import React, { createContext, useState } from "react";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";
import { food } from "../lib/mockdata";

type MenuState = {
	drinks: TMenuItemDrink[];
	food: TMenuItemFood[];
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
	});

	const updateMenuState: UpdateMenuState = (newState) => {
		setMenuState((prev) => ({ ...prev, ...newState }));
	};

	return (
		<MenuContext.Provider value={{ menuState, updateMenuState }}>
			{children}
		</MenuContext.Provider>
	);
};
