"use client";
import DrinkList from "./DrinkList";
import { MenuProvider } from "../../context/MenuContext";
import { CartProvider } from "../../context/CartContext";
import AllergenList from "../../components/AllergensList";

export default function Food() {
	return (
		<MenuProvider>
			<CartProvider>
				<main className="menuItemList drinkList">
					<DrinkList />
					<AllergenList />
				</main>
			</CartProvider>
		</MenuProvider>
	);
}
