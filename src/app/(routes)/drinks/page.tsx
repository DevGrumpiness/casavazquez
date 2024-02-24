"use client";
import DrinkList from "./DrinkList";
import { MenuProvider } from "../../context/MenuContext";
import AllergenList from "../../components/AllergensList";
import { Cart } from "../../components/Cart";

export default function Food() {
	return (
		<MenuProvider>
			<main className="menuItemList drinkList">
				<DrinkList />
				<AllergenList />
				<Cart />
			</main>
		</MenuProvider>
	);
}
