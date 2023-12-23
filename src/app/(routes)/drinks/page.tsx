"use client";
import DrinkList from "./DrinkList";
import { MenuProvider } from "../../context/MenuContext";

export default function Food() {
	return (
		<MenuProvider>
			<main className="menuItemLsit drinkList">
				<DrinkList />
			</main>
		</MenuProvider>
	);
}
