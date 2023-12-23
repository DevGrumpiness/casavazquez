"use client";
import FoodList from "./FoodList";
import { MenuProvider } from "../../context/MenuContext";

export default function Food() {
	return (
		<MenuProvider>
			<main className="">
				<FoodList />
			</main>
		</MenuProvider>
	);
}
