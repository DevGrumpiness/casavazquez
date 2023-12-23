"use client";
import FoodList from "./FoodList";
import { BaseProvider } from "../../context/MenuContext";

export default function Food() {
	return (
		<BaseProvider>
			<main className="">
				<FoodList />
			</main>
		</BaseProvider>
	);
}
