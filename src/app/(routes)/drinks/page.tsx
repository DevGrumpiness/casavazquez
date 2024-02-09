"use client";
import DrinkList from "./DrinkList";
import { MenuProvider } from "../../context/MenuContext";
import { CartProvider } from "../../context/CartContext";

export default function Food() {
	return (
		<MenuProvider>
			<CartProvider>
				<main className="menuItemList drinkList">
					<DrinkList />
				</main>
			</CartProvider>
		</MenuProvider>
	);
}
