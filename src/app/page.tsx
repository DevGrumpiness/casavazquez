"use client";
import React from "react";
import { BaseProvider } from "./context/BaseContext";

import { DigitalMenu } from "./components/DigitalMenu";

export default function Home() {
	return (
		<BaseProvider>
			<main className="">
				<DigitalMenu />
			</main>
		</BaseProvider>
	);
}
