"use client";
import DrinkList from "./DrinkList";
import { MenuProvider } from "../../context/MenuContext";
import AllergenList from "../../components/AllergensList";

export default function Food() {
	return (
		<MenuProvider>
				<main className="menuItemList drinkList">
					<DrinkList />
					<AllergenList />
				</main>
		</MenuProvider>
	);
}
