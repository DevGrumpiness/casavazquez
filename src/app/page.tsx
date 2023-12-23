"use client";
import React from "react";
import { MenuProvider } from "./context/MenuContext";

import { DigitalMenu } from "./components/DigitalMenu";

export default function Home() {
	return (
		<MenuProvider>
			<main className="">
				<DigitalMenu />
			</main>
		</MenuProvider>
	);
}
