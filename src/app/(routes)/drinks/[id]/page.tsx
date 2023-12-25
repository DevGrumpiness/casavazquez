"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import MenuItemDetail from "../../../components/MenuItemDetails";
import { MenuContext } from "../../../context/MenuContext";
import {
	TMenuItemDrink,
	DrinksResponseType,
} from "../../../../interfaces/menuItem";
import { useFetchData } from "../../../hooks/useFetchData";

export default function DetailPageDrink() {
	const { id } = useParams<{ id: string }>();
	const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);

	const menuContext = useContext(MenuContext);

	const drinksData = useFetchData<DrinksResponseType>(
		"/mockdata_drinks.json"
	);

	useEffect(() => {
		if (!menuContext) {
			setDrinks(drinksData.data?.drinks ?? []);
		} else {
			setDrinks(menuContext.menuState.drinks);
		}
	}, [menuContext, drinksData]);

	const item =
		drinks.find((drinksItem) => drinksItem.id === Number(id)) ?? null;

	if (!item) {
		return <p>Item not found</p>;
	}

	return (
		<div>
			<MenuItemDetail item={item} />
		</div>
	);
}
