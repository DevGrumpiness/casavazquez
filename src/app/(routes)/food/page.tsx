"use client";
import FoodList from "./FoodList";
import { MenuProvider } from "../../context/MenuContext";
import AllergenList from "../../components/AllergensList";
import { Cart } from "../../components/Cart";

export default function Food() {
	return (
		<MenuProvider>
			<main className="menuItemList foodList">
				<FoodList />
				<AllergenList />
				<Cart />
			</main>
		</MenuProvider>
	);
}
