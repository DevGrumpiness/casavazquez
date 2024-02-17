"use client";
import FoodList from "./FoodList";
import { MenuProvider } from "../../context/MenuContext";
import AllergenList from "../../components/AllergensList";

export default function Food() {
	return (
		<MenuProvider>
			<main className="menuItemList foodList">
				<FoodList />
				<AllergenList />
			</main>
		</MenuProvider>
	);
}
