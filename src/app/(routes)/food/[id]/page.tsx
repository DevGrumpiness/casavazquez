"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import {
	TMenuItemFood,
	TMenuItemDrink,
	FoodResponseType,
} from "../../../../interfaces/menuItem";
import { useFetchData } from "../../../hooks/useFetchData";

export default function DetailPageFood() {
	const { id } = useParams<{ id: string }>();
	const [food, setFood] = useState<TMenuItemFood[]>([]);

	const menuContext = useContext(MenuContext);

	const foodData = useFetchData<FoodResponseType>("/mockdata_food.json");

	useEffect(() => {
		if (!menuContext) {
			setFood(foodData.data?.food ?? []);
		} else {
			setFood(menuContext.menuState.food);
		}
	}, [menuContext, foodData]);

	const item = food.find((foodItem) => foodItem.id === Number(id)) ?? null;

	if (!item) {
		return <p>Item not found</p>;
	}

	return (
		<div>
			<MenuItemDetail item={item} />
		</div>
	);
}
