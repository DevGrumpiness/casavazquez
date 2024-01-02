import { TMenuItemFood, TMenuItemDrink } from "../../interfaces/menuItem";
import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { MenuContext } from "../context/MenuContext";
import { useFetchFromSupabase } from "../hooks/useFetchFromSupabase";
import "./DigitalMenu.scss";

export const DigitalMenu: React.FC = () => {
	const menuContext = useContext(MenuContext);

	if (!menuContext) {
		return <p>MenuContext not found.</p>;
	}

	const { menuState, updateMenuState } = menuContext;

	const foodResponse = useFetchFromSupabase<TMenuItemFood>("food");
	const drinksResponse = useFetchFromSupabase<TMenuItemDrink>("drinks");

	useEffect(() => {
		if (foodResponse.data && drinksResponse.data) {
			if (
				menuState.food !== foodResponse.data ||
				menuState.drinks !== drinksResponse.data
			) {
				updateMenuState({
					...menuState,
					food: [...foodResponse.data],
					drinks: [...drinksResponse.data],
				});
			}
		}
	}, [foodResponse.data, drinksResponse.data]);

	return (
		<div className="digitalMenu">
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
